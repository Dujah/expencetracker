const express=require('express')
const registerroute=require('./route/register.js')
const app = express()
app.use(express.json())

app.use('/register',registerroute)

app.listen(5000,()=>{
    console.log("listing to the serever")
})