# 优势

- 实现了文件导入，方便模块化开发
- 使用了 babel，将高级语法转为了 es5 的代码

# 注意

- 不支持 Promise 等特性

  如果使用 core-js 方式来识别 promise 会导致文件非常大，且引入了更过本身 hamibot 本身不认识的东西，会报错。故不考虑支持。
