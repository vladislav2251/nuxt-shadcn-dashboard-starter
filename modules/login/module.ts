import type { Nuxt } from '@nuxt/schema';
import { defineNuxtModule } from '@nuxt/kit';
import { join, resolve } from 'pathe';

export default defineNuxtModule({
    meta: {
        name: 'login-module',
        configKey: 'loginModule',
    },
    setup(options: object, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components'),
            });
        });

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'login',
                path: '/',
                file: resolve(__dirname, './pages/index.vue'),
            });
        });
    },
});
