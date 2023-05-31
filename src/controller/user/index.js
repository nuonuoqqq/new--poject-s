const { success, fail } = require('../../utils/response')
const { addUser } = require('../../service/user')

async function addUserCtrl(ctx) {
    const { email, password, username, phone } = ctx.request.body
    // 此处需要参数校验
    const isValid = await addUser({ email, password, username, phone });
    if (isValid) {
        ctx.body = success({ msg: '添加成功' })
    } else {
        ctx.body = fail('添加失败')
    }
}

module.exports = addUserCtrl