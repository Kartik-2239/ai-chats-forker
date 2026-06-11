# AI Chats Forker

A browser extension for scraping and saving your AI chat conversations, built with [WXT](https://wxt.dev) and React.

## Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [pnpm](https://pnpm.io)

## Setup

```bash
# Install dependencies
pnpm install

# Start dev server (Chrome)
pnpm dev

# Or for Firefox
pnpm dev:firefox
```

## Build

```bash
# Production build (Chrome)
pnpm build

# Production build (Firefox)
pnpm build:firefox

# Create a zip for distribution
pnpm zip
```

The built extension is output to `output/chrome-mv3/`.

## Load the extension manually

1. Run `pnpm build`
2. Open `chrome://extensions` in Chrome
3. Enable **Developer mode**
4. Click **Load unpacked** and select the `output/chrome-mv3/` folder

## Type checking

```bash
pnpm compile
```
