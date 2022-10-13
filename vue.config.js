const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // @ts-ignore
  publicPath: process.env.NODE_ENV === 'production' ? '/deterministic-avatar/' : '/'
})
