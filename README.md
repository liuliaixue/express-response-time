a simple example to use this middleware

```
const express = require('express')
const app = express();
const responseTime = require('express-response-time')


const timeout = ms => new Promise(r => setTimeout(() => r(), ms))

app.use(responseTime((methond, url, time) => {
    console.log(`${methond} ${url} ${time}ms`)
}))
app.get('/time', async (req, res, next) => {
    await timeout(1000)
    res.end('response after 1000ms ')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`server is listenning on ${process.env.PORT || 8080}`)
})
```