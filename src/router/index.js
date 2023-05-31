const KoaRouter = require('koa-router')
const loginCtrl = require('../controller/login/index')
const uploadCtrl = require('../controller/upload/index')
const uploadMultiCtrl = require('../controller/upload/upload-mul')
const addUserCtrl = require('../controller/user/index')

const router = new KoaRouter({
    prefix: '/api'
});

// 写路由规则
router.post('/login', loginCtrl)
router.post('/user/add', addUserCtrl)

// 上传文件
router.post('/upload', uploadCtrl)
router.post('/upload/multi', uploadMultiCtrl)

module.exports = {
    router
}