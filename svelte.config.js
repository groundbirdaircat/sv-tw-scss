import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

const ignore = [].includes.bind([
  'css-unused-selector',
  'vite-plugin-svelte-css-no-scopable-elements'
]);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: true
  },
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    alias: {
      $server: './src/lib/server',
      $assets: './src/lib/assets',
      $modules: './src/lib/modules'
    }
  },
  vitePlugin: {
    inspector: {
      toggleKeyCombo: 'control-alt-i',
      showToggleButton: 'never'
    }
  },
  // @ts-expect-error ___
  onwarn: (w, h) => (ignore(w.code) ? _ => _ : h)(w)
};

export default config;
