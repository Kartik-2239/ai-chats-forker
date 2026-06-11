import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react', '@wxt-dev/auto-icons'],
  outDir: 'output',
  autoIcons: {
    enabled: true,
    baseIconPath: './assets/icon.png',
    developmentIndicator: 'grayscale',
    sizes: [16, 32, 48, 128],
  },
  manifest: {
    permissions: ['activeTab', 'scripting', 'tabs'],
    host_permissions: [
      "*://chatgpt.com/*",
      "*://claude.ai/*",
      "*://gemini.google.com/*"
    ],
  },
});
