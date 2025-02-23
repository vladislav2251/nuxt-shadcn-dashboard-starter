// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/eslint',
        'nuxt-lucide-icons',
        'shadcn-nuxt',
        '~/modules/login',
        '~/modules/dashboard',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            bodyAttrs: {
                class: 'dark',
            },
        },
    },
    lucide: {
        namePrefix: 'Icon',
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },
    css: [
        '~/assets/styles/main.scss',
        '~/assets/styles/base.scss',
    ],
    eslint: {
        config: {
            stylistic: true,
        },
    },
});
