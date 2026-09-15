const express=require('express')
const dotenv=require('dotenv')
const registerroute=require('./route/register.js')
const app = express()
const connectdb=require('./db/connect.js')

app.use(express.json())

dotenv.config({
    path:"./.env",
})

app.use('/register',registerroute)

connectdb()
  .then(()=>{
    app.listen(5000, () => {
   console.log(`Example app listening on port 5000`)
})
  })
  .catch((err)=>{
    console.log("error",err)
  })