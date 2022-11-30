const Koa = require('koa')
const Router = require('@koa/router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

app.use(koaBody())

app.use(async (ctx, next) => {
    if (ctx.request.method === 'GET') console.log(`${ctx.request.method} ${ctx.request.url}: `, ctx.query)
    if (ctx.request.method === 'POST') console.log(`${ctx.request.method} ${ctx.request.url}: `, ctx.request.body)
    await next()
})

let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

router.post('/api/user/login', async (ctx) => {
    const { account, password } = ctx.request.body
    if (!account || !password) ctx.response.status = 400
    await wait(3000)
    ctx.body = {
        token: 'tokentoken',
        userInfo: {
            id: 'id123456',
            nickname: 'nickName',
            roles: ['user']
        }
    }
    // ctx.body = {
    //     ip: `${ctx.request.ip}`,
    //     method: `${ctx.request.method}`,
    //     url: `${ctx.request.url}`,
    //     json: ctx.request.method === 'POST' ? ctx.request.body : ctx.query
    // }
})

router.get('/api/app/:id', async (ctx) => {
    await wait(3000)
    ctx.body = {
        current: 0,
        list: [
            {
                id: '1111',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '2222',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '3333',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '4444',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '5555',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '6666',
                image: 'http://localhost/user/u04.jpg',
                title: '拼单发起人昵称',
                description: '10人成团 还差1人 11:22:33'
            },
            {
                id: '7777',
                image: 'http://localhost/user/u04.jpg',
                title: '标题7标题标题标题',
                description: '内容1的描述性文字'
            },
            {
                id: '8888',
                image: 'http://localhost/user/u04.jpg',
                title: '标题8标题标题标题',
                description: '内容1的描述性文字'
            },
            {
                id: '9999',
                image: 'http://localhost/user/u04.jpg',
                title: '标题9标题标题标题',
                description: '内容1的描述性文字'
            },
            {
                id: '1010',
                image: 'http://localhost/user/u04.jpg',
                title: '标题10标题标题标题',
                description: '内容1的描述性文字'
            }
        ]
    }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(8001, () => {
    console.log('user api :8001 ')
})
