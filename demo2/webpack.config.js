/*
 * @Author       : wanglei
 * @Date         : 2023-02-27 14:16:26
 * @LastEditors  : wanglei
 * @LastEditTime : 2023-02-27 14:55:17
 * @FilePath     : /wepback-code-split/demo2/webpack.config.js
 * @description  : 多入口配置,提取公共方法为单独文件
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
  mode: 'production',
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: 'all', // 对所有模板都进行分割
      // 修改配置
      cacheGroups: {
        // 其他没有写的配置，会使用上面的默认配置
        default: {
          minSize: 0, // 我们定义的文件体积太大了，要走默认配置的话，不会被打包，所以要更改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}