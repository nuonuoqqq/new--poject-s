const { createToken, verifyToken } = require('./jwt')

const token = createToken({name: 'pjw'})
console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGp3IiwiZXhwIjoxNjc1NzM0NzIxLCJpYXQiOjE2NzU2N
// DgzMjF9.5Ts00z6QiAStXGftaTaHPCF1X4qgXpAbJDM0_yTDpds
// const decode = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGp3IiwiZXhwIjoxNjc1NTg2MzMzLCJpYXQiOjE2NzU1ODYzMzJ9.ReCac4XXVon1EN0WCmQMCsMY7UfthW0RGXnqqHsWRZc')

// if (!decode) {
//     console.log(decode)
// }
// console.log(decode)