const express =require('express')
const path =require('path')
const rootDir=require('../utils/path')
const router =express.Router()

//parsing data from request
router.get('/add-product',(request,response,next)=>{
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/store-product',(request,response,next)=>{
    response.send('<b>Product Submitted..!</b>')
})
module.exports =router