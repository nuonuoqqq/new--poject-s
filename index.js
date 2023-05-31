// 如果是类或者构造函数，首字母大写
const Koa = require('koa')
const KoaMount = require('koa-mount')
const KoaStatic = require('koa-static')
const { koaBody } = require('koa-body')
const KoaCors = require('@koa/cors')
const path = require('path')
const { router } = require('./src/router/index')
const { createContext } = require('vm')
// self middleware
const jwtMiddle = require('./src/middleware/koa-jwt')

const STATIC_FILE_URL = path.join(__dirname, './static')
const DOWNLOAD_URL = 'http://localhost:3000/download'
// 创建koa应用
const app = new Koa();
// 文件
const middleStatic = KoaStatic('./static', {
    setHeaders: function (resp) {
        // 设置http响应报文key-value，报文的数据保存为附件
        resp.setHeader('content-disposition', 'attachment')
    }
})

app.use(jwtMiddle)
// 网站
const mainSite = KoaStatic('./website')

// 跨域问题
app.use(KoaCors());
// 1.开发一个静态文件服务器
app.use(KoaMount('/download', middleStatic))
app.use(mainSite)
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: STATIC_FILE_URL,
        // filename: function (name, ext, part, form) {
        //     // console.log(name, ext, part, form)
        //     return `${name}.${ext}`;
        // }
    }
}))
app.use(router.routes()).use(router.allowedMethods())
// 支持查询参数
// 支持body[form-data;x-www-urlencoded;json;text/plain]
// app.use(async (ctx, next) => {
//     ctx.body = {
//         method: ctx.request.method,
//         url: ctx.request.url,
//         params: ctx.request.query,
//         body: ctx.request.body,
//         fileUrl: `${DOWNLOAD_URL}/${ctx.request.files.upload.newFilename}`
//     }
// })

// 启动服务器，监听端口
app.listen(3000, '127.0.0.1', () => {
    console.log('server is listening on http://localhost:3000')
})