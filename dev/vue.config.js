const { resolve } = require("./config");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // "别名":"对应的文件夹"
        'a': resolve('src/assets')
      }
    },

    devServer: {
      open: true, //自动开启
      port: 8081, //修改端口
      proxy: {
        '/api': {
          target: 'http://www.dzm.com',
          ws: false,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}
