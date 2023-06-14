import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const ignore = [].includes.bind([
	'css-unused-selector',
	'vite-plugin-svelte-css-no-scopable-elements'
]);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: '@use "src/styles" as *;'
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$utils: './src/lib/utils',
			$guards: './src/lib/guards',
			$stores: './src/lib/stores',
			$assets: './src/lib/assets',
			$models: './src/lib/models',
			$actions: './src/lib/actions',
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
	onwarn: (w, h) => (ignore(w.code) ? (_) => _ : h)(w)
};

export default config;
