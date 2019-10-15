
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Amarpreet Singh | Toronto Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'apple-touch-icon-precomposed', type: 'image/png', href: '/favicon-180x180.png', sizes: '180x180' },
      { name: 'msapplication-TileColor', content: '#efefef' },
      { name: 'msapplication-TileImage', content: '/favicon-144x144.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans+Narrow&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alegreya+Sans|Rammetto+One&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      
    
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  /*
  ** Nuxt.js modules
  */
 modules: ['@nuxtjs/style-resources'],

  /*
  ** Build configuration
  */
 build: {
  extend (config, ctx) {
  }
},

  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  }
}
