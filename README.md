a simple example to use this middleware

```
const express = require('express')
const app = express();
const timeRecord = require('express-response-time')

const timeout = ms => new Promise(r => setTimeout(() => r(), ms))

const logger = console.log
app.use(timeRecord(logger))

app.get('/time', async (req, res, next) => {
    await timeout(1000)
    res.end('response after 1000ms ')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`server is listenning on ${process.env.PORT || 8080}`)
})
```