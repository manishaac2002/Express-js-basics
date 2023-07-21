const express = require('express')
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
    response.status(404).send('<h3>404 page not found</h3>')
})

application.use(bodyParser.urlencoded())
application.listen(7000)

