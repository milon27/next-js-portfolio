const { https } = require('firebase-functions')
const { default: next } = require('next')

const isDev = process.env.NODE_ENV !== 'production'

const server = next({
    dev: isDev,
    conf: { distDir: '.next' }
})

const nextjsHandle = server.getRequestHandler();
//we will create our firebase function

exports.nextServer2 = https.onRequest((req, res) => {
    return server.prepare().
        then(() => {
            return nextjsHandle(req, res)
        })
})