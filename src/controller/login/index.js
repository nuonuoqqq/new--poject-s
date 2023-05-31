const { success, fail } = require('../../utils/response')
const { createToken } = require('../../service/jwt')
const { valid } = require('../../service/user')

async function login(ctx) {
    const { email, password } = ctx.request.body
    const isValid = await valid({ email, password });
    if (isValid) {
        const token = createToken({ email, password })
        ctx.body = success({ token })
    } else {
        ctx.body = fail('用户名或者密码错误')
    }
}

module.exports = login