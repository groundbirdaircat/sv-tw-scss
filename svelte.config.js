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
			$dev: './src/lib/dev',
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
	onwarn: (w, h) => (ignore(w.code) ? _ => _ : h)(w)
};

export default config;
