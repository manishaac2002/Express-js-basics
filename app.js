const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const adminRouter = require('./router/admin.js')
const shopRouter = require('./router/shop.js')

//storing a function to a variable
const application = express()
console.log("server is running");

//filtering path - url prefix /admin
application.use('/admin', adminRouter)
application.use(shopRouter)

application.use((request, response, next) => {
    response.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

application.use(bodyParser.urlencoded())
application.listen(7000)

