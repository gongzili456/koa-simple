const Koa = require('koa')
const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
  ctx.set('content-type', 'text/html')
  ctx.body = '🎉 Congratulations, you are already in the magical world. 🎊'
})

router.get('/hi', async ctx => {
  ctx.body = "Hi, I'm here"
})

router.get('/json', async ctx => {
  ctx.body = {
    code: 200,
    message: 'success',
    data: { name: 'Jack', age: 34 },
  }
})

const app = new Koa()

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(9090)
