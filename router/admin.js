const express =require('express')
const router =express.Router()

//parsing data from request
router.get('/add-product',(request,response,next)=>{
    response.send('<form action="/store-product" method="POST"><h1>Add Product details</h1><input type="text" name ="title"><input type="submit" value="submit"></form>')
})

router.post('/store-product',(request,response,next)=>{
    response.send('<b>Product Submitted..!</b>')
})
module.exports =router