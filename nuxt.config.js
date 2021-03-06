
module.exports = {
  telemetry: false,
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nico Tukiainen | Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: 'Nico Tukiainen | Software Developer' },
      { hid: 'og:locale', name: 'og:locale', content: 'en_EU' },
      { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL || 'http://localhost:3000' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80' },
      { hid: 'og:description', name: 'og:description', content: 'My name is Nico Tukiainen and I am a software engineer and developer.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/d33a83f69c.js' },
      { src: 'https://widget.cloudinary.com/v2.0/global/all.js' },
    ]
  },
  buildModules: [
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-155293168-2'
      },
      '@nuxtjs/vuetify',
    ]
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e67e22' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/variables.scss'
    ]
   },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/filters'},
    {src: '~/plugins/vuelidate'},
    {src: '~/plugins/integrations'},
    {src: '~/plugins/components'},
    {src: '~/plugins/tooltip'},
    {src: '~/plugins/particles'},
    {src: '~/plugins/toasted', ssr: false},
    {src: '~/plugins/paginate', ssr: false},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'portal-vue/nuxt',
    '@nuxtjs/style-resources',
    '~/modules/api'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'https://localhost:3000',
    proxy: true
  },
  proxy: {
    '/products/': {
      target: `https://${process.env.DOMAIN}/api/v1/`,
      changeOrigin: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
