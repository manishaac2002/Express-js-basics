const express = require('express')
const path = require('path')
const rootDir =require('../utils/path.js')

const router = express.Router()

router.get('/', (request, response, next) => {
    console.log("Hey you");
    response.sendFile(path.join(rootDir, 'views', 'shop-product.html'))
})

module.exports = router