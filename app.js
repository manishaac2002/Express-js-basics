const express =require('express')
const bodyParser=require('body-parser')
const adminRouter =require('./router/admin.js')
const shopRouter =require('./router/shop.js')
//storing a function to a variable
const application = express()
console.log("server is running");

//filtering path - url prefix /admin
application.use('/admin',adminRouter)
application.use(shopRouter)
application.use((request,response,next)=>{
    response.status(404).send('<h3>404 page not found</h3>')
})


application.use(bodyParser.urlencoded())
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

