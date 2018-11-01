const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
  ** Headers of the page
  */
    head: {
        titleTemplate: '%s - Kammaco - René Kamm',
        title: 'Kammaco - René Kamm',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Kammaco is an independent, boutique management advisory firm based in Switzerland.'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            },
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial scale=1'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://kammaco.com/logo.jpg'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'Kammaco - René Kamm'
            },
            {
                hid: 'og:image:width',
                property: 'og:image:width',
                content: '700'
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
            },
            {
                hid: ' og:image:height',
                property: 'og:image:height',
                content: '700'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content:
                    'Kammaco is an independent, boutique management advisory firm based in Switzerland.'
            }
        ],
        noscript: [{ innerHTML: 'This website requires JavaScript.' }],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href:
                    '//fast.fonts.net/t/1.css?apiType=css&projectid=0b4ddfc0-24c4-474c-8c96-84207a556c44'
            },
            { rel: 'manifest', href: '/manifest.json' }
        ],
        script: [
            { src: '/js/manup.js' },
            { src: 'pwabuilder-sw.js' },
            { src: 'pwabuilder-sw-register.js' },
            { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }
        ]
    },

    /*
  ** Customize the progress-bar color
  */
    loading: { color: '#00FF00' },

    /*
  ** Global CSS
  */
    css: [],

    /*
  ** Nuxt.js modules
  */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        [
            'nuxt-sass-resources-loader',
            [
                '~assets/stylesheets/sass/variables_mixins.scss',
                '~assets/stylesheets/sass/typography.scss',
                '~assets/stylesheets/sass/helpers.scss'
            ]
        ],
        // Simple usage
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-53071775-2'
            }
        ]
    ],
    /*
  ** Axios module configuration
  */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
  ** Build configuration
  */
    build: {
        /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
            //Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: {
            preset: {
                //autoprefixer settings
                autoprefixer: {
                    grid: true,
                    browsers: ['>1%', 'IE 11']
                }
            }
        }
    },
    plugins: [
        '~/plugins/helpers.js',
        { src: '~/plugins/vuetouch.js', ssr: false }
    ]
}
