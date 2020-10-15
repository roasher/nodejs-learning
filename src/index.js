const Koa = require('koa')
const app = new Koa();

app.use((ctx) => {
    const body = ctx.request.body;
    console.log(body)
    ctx.body = body
})

app.listen(3000)