import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import * as path from 'path'

const config: UserConfig = {
	plugins: [sveltekit()],
    resolve: {
        alias: {
            $utils: path.resolve('./src/utils'),
        }
    },
};

export default config;
