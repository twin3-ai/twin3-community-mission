import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the public twin3 Community Mission shell", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>twin3 Community Mission<\/title>/i);
  assert.match(html, /src="\/game\/index\.html"/i);
  assert.match(html, /title="twin3 Community Mission"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("ships the ten-question, no-repeat mission contract", async () => {
  const game = await readFile(new URL("../public/game/game.js", import.meta.url), "utf8");
  const questionIds = [...game.matchAll(/id: "(web3|agent|matrix)-\d{3}"/g)];

  assert.equal(questionIds.length, 30);
  assert.equal(new Set(questionIds.map(match => match[0])).size, 30);
  assert.match(game, /const MISSION_SIZE = 10/);
  assert.match(game, /journey\.seen\.includes\(question\.id\)/);
  assert.match(game, /revealPanel\.hidden = false/);
  assert.match(game, /QUESTION_BANK\.length - journey\.seen\.length/);
});
