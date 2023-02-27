/*
 * @Author       : wanglei
 * @Date         : 2023-02-27 14:16:26
 * @LastEditors  : wanglei
 * @LastEditTime : 2023-02-27 14:32:46
 * @FilePath     : /wepback-code-split/demo1/webpack.config.js
 * @description  : 多入口配置
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 多个入口文件，多入口
  entry: {
    app: './src/app.js',
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // webpack命名方式，[name]以文件名自己的名字去命名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  mode: 'production'
}