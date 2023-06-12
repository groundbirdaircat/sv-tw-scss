import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

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
			// $components: './src/lib/components'
		}
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'control-alt-i',
			showToggleButton: 'never'
		}
	}
};

export default config;
