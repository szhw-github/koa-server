// 响应业务数据的请求
module.exports = async ctx => {
    const params = ctx.url.split('/')
    ctx.state.data = require(`../static/${params[params.length - 1]}.json`)
    console.log(`get ${params[params.length - 1]}.json success`)
}
