const {success} = require('../../utils/response')

function uploadCtrl(ctx) {
    console.log(ctx.request.files.file.newFilename)
    console.log(ctx.request.body)
    ctx.body = success({netUrl: `http://localhost:3000/download/${ctx.request.files.file.newFilename}`})
}

module.exports = uploadCtrl