const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
  ** Headers of the page
  */
    head: {
        title: 'Kammaco - René Kamm',
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
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href:
                    '//fast.fonts.net/t/1.css?apiType=css&projectid=0b4ddfc0-24c4-474c-8c96-84207a556c44'
            }
        ],
        script: [
            //add polyfill for IE when needed
            /*
      { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Object.entries' },
      */
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
  ** Plugins to load before mounting the App
  */
    plugins: [],

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
                    browsers: ['>1%']
                }
            }
        }
    },
    plugins: ['~/plugins/helpers.js']
}
