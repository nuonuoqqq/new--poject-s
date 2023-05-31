const { success } = require('../../utils/response')

function uploadMultiCtrl(ctx) {
    console.log(ctx.request.files)
    const result = []
    Object.keys(ctx.request.files).forEach(key => {
        result.push(`http://127.0.0.1:3000/download/${ctx.request.files[key].newFilename}`)
    })
    ctx.body = success({ urls: result })
}


module.exports = uploadMultiCtrl