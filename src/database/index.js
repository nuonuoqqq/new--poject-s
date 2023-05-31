const Mysql2 = require('mysql2/promise')
let connection = null

async function query(sql) {
    // 确保就连接一次
    if (!connection) {
        connection = await Mysql2.createConnection({
            host: 'static.tobethinker.com',
            user: 'root',
            database: 'nodejs-koa',
            password: '123456'
        });
    }

    // const result = await connection.ping();
    // console.log(result)
    const result = await connection.execute(sql)
    return result
}
// query('select * from grade').then(data => {
//     console.log(data[0])
// })
module.exports = {
    query,
    escape: Mysql2.escape
}

// console.log()


