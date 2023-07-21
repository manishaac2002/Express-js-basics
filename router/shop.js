const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (request, response, next) => {
    console.log("Hey you");
    response.sendFile(path.join(__dirname, '../', 'views', 'shop-product.html'))
})

module.exports = router