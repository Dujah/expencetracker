const express=require('express')
const dotenv=require('dotenv')
const verify=require('./middleware/aunthetic.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const registerroute=require('./route/register.js')
const loginuser=require('./route/login.js')
const app = express()
const connectdb=require('./db/connect.js')

app.use(express.json())
app.use(cookieParser()) // this reads the incoming cookie from the client

dotenv.config({
    path:"./.env",
})
app.use(cors({
    origin: 'http://localhost:5000',   
    credentials: true                
}))

app.use('/register',registerroute)
app.use('/login',loginuser)
app.use('/expense',verify)

connectdb() 
  .then(()=>{
    app.listen(5000, () => {
   console.log(`Example app listening on port 5000`)
})
  })
  .catch((err)=>{
    console.log("error",err)
  })