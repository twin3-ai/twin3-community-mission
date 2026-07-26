# twin3 Community Mission

A browser-based Twin Matrix knowledge game for the twin3 community.

Players enter a live-style mission room, answer five questions, and receive a
simulated `$PoC` result. The current release is a public gameplay prototype: it
does not write to the production contributor ledger or issue real rewards.

## Play

https://twin3-community-mission.mingwen.chatgpt.site

## Features

- Responsive desktop and mobile gameplay
- Animated Twin Matrix mission lobby
- Five-question timed quiz
- Music and sound controls
- Answer feedback and mission review
- Simulated player room and `$PoC` settlement
- Canonical twin3 product visual system
- Reduced-motion support

## Development

Requirements:

- Node.js 22.13 or newer

Run locally:

```bash
npm install
npm run dev
```

Validate the production build:

```bash
npm test
```

The game source is under `public/game/`. The root application embeds that game
as a full-viewport experience and is packaged for Codex Sites with vinext.

## Current Rules

- The prototype starts immediately for testing.
- The planned production format opens a scheduled mission every hour.
- One participant is enough to start a scheduled mission.
- Empty seats may be represented by simulated players.
- Production rewards, identity checks, and ledger settlement are not enabled.

## License

[MIT](LICENSE)
