// app.js
import { chunk } from 'lodash-es'
console.log(chunk([1, 2, 3], 2))

//JS 的 Tree Shaking 依赖的是 ES6 的模块系统（比如：import 和 export）
//lodash-es 采用export
//lodash采用commonjs module.exports
//babel-plugin-lodash和lodash-webpack-plugin对使用ES Module引入lodash的场景有不错的优化效果
//是否使用ES Module引入lodash取决于业务的源代码及所有第三方库的态度，在当前npm生态中依旧是CommonJS占大头，大部分包并没有提供module 字段的前提下，优化的概率有限。

//在正常的Chunk拆分的思路下，lodash这种使用范围经常变化的库的Tree Shaking可能导致对应的Chunk的hash不稳定，让缓存频繁地失效，因此我们选择放弃了lodash的优化，保持整个lodash引入的状态，以50KB左右体积的代价换取hash的绝对稳定
