const express=require('express')
const router=express.Router()
const reguser=require('../controller/regcontroller.js')

router.post('/',reguser)

module.exports=router