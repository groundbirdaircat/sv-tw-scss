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
      $dev: './src/lib/dev',
      $mock: './src/lib/mock',
      $utils: './src/lib/utils',
      $assets: './src/lib/assets',
      $guards: './src/lib/guards',
      $models: './src/lib/models',
      $stores: './src/lib/stores',
      $actions: './src/lib/actions',
      $classes: './src/lib/classes',
      $services: './src/lib/services',
      $components: './src/lib/components'
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
