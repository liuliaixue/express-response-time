const timeRecord = (logger) => {

    return function (req, res, next) {
        const start = new Date();

        res.on('finish', function () {
            const end = new Date();
            const duration = end - start;
            logger(`requestURL: ${req.url} takes ${duration}`)
        })
        next()
    }
}

module.exports = timeRecord;