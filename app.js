const express =require('express')

//storing a function to a variable
const application = express()

//next - execute the next function after executing the current function
application.use((request,response,next)=>{
    console.log('First Middleware');
    next()
})
application.use((request,response,next)=>{
    console.log('Second Middleware');
    next()
})
application.use((request,response,next)=>{
    console.log('Third Middleware');
    //sending response in express
    response.send("<h1>Hey I'm there</h1>")
})


application.listen(7000)

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/manishaac2002/Express-js-basics.git
// git push -u origin main