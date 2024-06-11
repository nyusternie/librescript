// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    /* Application Settings */
    app: {
        /* Application Header */
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'LibreScript Markup Language (LSML)',
            meta: [
                { name: 'description', content: 'A succinct language for embedding web & mobile application data within a blockchain.' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
        },
    },

    /* Application Modules */
    modules: [/* Tailwind CSS */
    '@nuxtjs/tailwindcss', "@nuxtjs/plausible"],
})