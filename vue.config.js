'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const host = 'localhost'



module.exports = {
  publicPath: '/', // 部署应用包时的基本位置
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置静态资源（从生成的资源覆写filename或chunkFilename时，assetsDir会被忽略）
  lintOnSave: false, // 设置是否在开发环境下每次保存代码时都启用eslint验证
  css: {
    extract: process.env.NODE_ENV === 'production', // 是否将组件中的css提取至一个独立的css文件中，生产环境下是ture, 开发环境下是false
    sourceMap: true, // 是否为css开启sourceMap
    requireModuleExtension: true
  },
  runtimeCompiler: true
}
