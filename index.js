module.exports = function (req, res, next) {
    const start = new Date();


    res.on('finish', function () {
        console.log(res)
        const end = new Date();
        const duration = end - start;
        console.log(`requestURL: ${req.url} takes ${duration}`)
    })
    next()
}