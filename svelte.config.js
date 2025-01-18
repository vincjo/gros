import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import adapter from '@sveltejs/adapter-node'
import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],
    compilerOptions: { runes: true },
    kit: {
        adapter: adapter({ out: 'build' }),
        paths: {
            base:  '/gros',
        },
        alias: {
			$utils: 'src/utils',
			$utils: 'src/utils/*',
		}
    },
    vitePlugin: {
        inspector: {
            toggleKeyCombo: 'meta-shift',
            holdMode: true,
            showToggleButton: 'always',
            toggleButtonPos: 'bottom-right',
        }
    }
}

export default config
