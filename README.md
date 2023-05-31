# koa学习

## 中间件注意事项

```javascript
// 同步函数和异步函数都可
// callback函数
// ctx对象，next函数
// 中间件写法
// 函数签名/函数定义

// 一、洋葱模型
// 中间件next前后部分的执行顺序
// 二、如果开发中间件，一定要await next()

async function test(ctx, next) {
    // 写逻辑
    await next();
}
```

## 后端需求

### 静态文件托管功能

1. 静态文件托管
2. 将下载路径前缀修改为download
3. 托管前端项目

### 文件路径的规划

+ /
网站

+ /download
可以作为静态文件托管

+ /api
TODO: 所有的api增删改查操作

## 数据库配置

[详细说明请点击](./docs//database.md)



