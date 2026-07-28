import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

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

test("ships an original beat-driven soundtrack and reduced-motion visual layer", async () => {
  const [html, game, styles] = await Promise.all([
    readFile(new URL("../public/game/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/game/game.js", import.meta.url), "utf8"),
    readFile(new URL("../public/game/styles.css", import.meta.url), "utf8"),
  ]);

  assert.match(html, /class="rhythm-field"/);
  assert.match(game, /const MUSIC_BPM = 126/);
  assert.match(game, /function scheduleKick/);
  assert.match(game, /function scheduleSnare/);
  assert.match(game, /function scheduleBass/);
  assert.match(game, /function schedulePowerChord/);
  assert.doesNotMatch(game, /setInterval\(\(\) => \{[\s\S]*1700\)/);
  assert.match(styles, /body\.beat-pulse/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /\.rhythm-field \{ display: none; \}/);
});

function readBrowserAsset(source, globalName) {
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return context.window[globalName];
}

test("ships complete, ID-stable localization for eight languages", async () => {
  const [html, uiSource, questionSource, game] = await Promise.all([
    readFile(new URL("../public/game/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/game/i18n-ui.js", import.meta.url), "utf8"),
    readFile(new URL("../public/game/i18n-questions.js", import.meta.url), "utf8"),
    readFile(new URL("../public/game/game.js", import.meta.url), "utf8"),
  ]);
  const ui = readBrowserAsset(uiSource, "MISSION_UI_TRANSLATIONS");
  const questions = readBrowserAsset(questionSource, "MISSION_QUESTION_TRANSLATIONS");
  const locales = ["en", "zh-TW", "zh-CN", "ja", "ko", "es", "pt-BR", "vi"];
  const translatedLocales = locales.filter(locale => locale !== "en");
  const englishKeys = Object.keys(ui.en).sort();
  const sourceIds = [...game.matchAll(/id: "((?:web3|agent|matrix)-\d{3})"/g)].map(match => match[1]).sort();

  assert.deepEqual(Object.keys(ui), locales);
  for (const locale of locales) {
    assert.deepEqual(Object.keys(ui[locale]).sort(), englishKeys, `${locale} UI keys differ`);
  }
  assert.deepEqual(Object.keys(questions), translatedLocales);
  for (const locale of translatedLocales) {
    assert.deepEqual(Object.keys(questions[locale]).sort(), sourceIds, `${locale} question IDs differ`);
    for (const item of Object.values(questions[locale])) {
      assert.equal(typeof item.q, "string");
      assert.ok(Array.isArray(item.o));
      assert.ok(item.o.length === 2 || item.o.length === 4);
      assert.equal(typeof item.e, "string");
    }
  }

  assert.match(html, /id="language-select"/);
  assert.ok(html.indexOf("i18n-ui.js") < html.indexOf("i18n-questions.js"));
  assert.ok(html.indexOf("i18n-questions.js") < html.indexOf("game.js"));
  assert.match(game, /localStorage\.setItem\(LOCALE_KEY, currentLocale\)/);
  assert.match(game, /window\.MISSION_QUESTION_TRANSLATIONS/);
  assert.match(game, /selectedAnswers\.push\(\{ id: item\.id, choice, isCorrect \}\)/);
  assert.match(game, /copy\.o\.length === item\.options\.length/);
});
