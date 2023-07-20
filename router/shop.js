const express =require('express')
const router =express.Router()

router.get('/shop',(request,response)=>{
    response.send('<h1>Welcome Page</h1>')
})

module.exports=router