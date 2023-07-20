const express =require('express')
const bodyParser=require('body-parser')

//storing a function to a variable
const application = express()
console.log("server is running");

application.use(bodyParser.urlencoded())
//parsing data from request
application.get('/add-product',(request,response,next)=>{
    response.send('<form action="/store-product" method="POST"><h1>Add Product details</h1><input type="text" name ="title"><input type="submit" value="submit"></form>')
})

application.post('/store-product',(request,response,next)=>{
    console.log(request.body);
    response.send('<b>Product Submitted..!</b>')
})









//handling different request & routers
//next - execute the next function after executing the current function
// application.use('/third',(request,response,next)=>{
//     console.log('third Middleware');
//     response.send('<h2>third page</h2>')
// })   
// application.use('/second',(request,response,next)=>{
//     console.log('Third Middleware');
    //sending response in express
    // response.send("<h1>Hey I'm there</h1>")
    // response.send('<h2>second page</h2>')
// })
//this is a main route first runs in browser
// application.use('/',(request,response,next)=>{
//     console.log('First Middleware');
//     response.send('<h2>First page</h2>')
// })

application.listen(7000)

