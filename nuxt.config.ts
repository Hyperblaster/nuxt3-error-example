import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  nitro: {
    serveStatic: true,
    commonJS: {
      dynamicRequireTargets: [
        './node_modules/@vue/compiler-core',
        './node_modules/@vue/compiler-dom',
        './node_modules/@vue/compiler-ssr',
        './node_modules/vue/server-renderer',
        // allow h(), you can remove it if you use only objects to define vue components
        './node_modules/vue'
      ]
    },
  },
  alias: {
    '@vue/compiler-core': '@vue/compiler-core',
    '@vue/compiler-dom': '@vue/compiler-dom',
    '@vue/compiler-ssr': '@vue/compiler-ssr',
    'vue/server-renderer': 'vue/server-renderer'
  },
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient) {
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler'
      }
    }
  },
})
