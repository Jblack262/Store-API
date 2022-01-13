const path = require('path')

const notFoundHandler = (req,res,next) => {
    console.log(req.url)
    res.status(404).sendFile(path.join(__dirname, "../public/404.html"))
}

module.exports = notFoundHandler;