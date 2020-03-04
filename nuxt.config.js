export default {
  mode: "universal",
  // env: { API: process.env.API || "http://localhost:8000/api" },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ccc" },
  /*
   ** Global CSS
   */
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/main.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/validate.js",
    "~plugins/axios.js",
    "~plugins/fontawesome.js",
    { src: "~plugins/vue-notification-ssr.js", mode: "server" },
    { src: "~plugins/vue-notification-client.js", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    // "@mole-inc/nuxt-validate" is the only to use v3 of vee-validate
    ["@mole-inc/nuxt-validate"],
    "cookie-universal-nuxt"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    headers: {
      common: {
        Accept: "application/json"
      }
    }
  },
  auth: {
    token: {
      prefix: "token."
    },
    cookie: {
      prefix: ""
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/inventory/books"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/v1/authentication/login/",
            method: "post",
            propertyName: "token"
          },
          logout: false,
          user: false
        },
        tokenType: false
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  render: {
    static: { cacheControl: false }
  },
  router: {
    linkActiveClass: "active"
  }
};
