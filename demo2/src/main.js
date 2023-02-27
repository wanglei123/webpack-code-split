/*
 * @Author       : wanglei
 * @Date         : 2023-02-27 14:18:12
 * @LastEditors  : wanglei
 * @LastEditTime : 2023-02-27 16:57:11
 * @FilePath     : /wepback-code-split/demo2/src/main.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {sum} from './math'

console.log(sum(4,5,6))
console.log('hello main')

document.getElementById('btn').onclick = function(){
  // import 动态导入，会将动态导入的文件代码分割(拆分成单独模块),在需要使用的时候自动加载
  import('./count').then((res) => {
    console.log('模块加载成功', res.default(3,4))
  }).catch((err) => {
    console.log('模块加载失败', err)
  })
}