const user=require('../model/usermodel.js')
const bcrypt=require('bcrypt')

const reguser= async(req,res)=>{
    const {username,email,phone,password}=req.body
    const existing_user= await user.findOne({email:email}) //this will return null if user dosent exist
    if(!existing_user){
        const hashed_password= await bcrypt.hash(password,10)
        await user.create({
             username: username,
             email: email,
             phone: phone,
             password:hashed_password
        })
        res.status(201).json({
        message: "User registered successfully"
        })

    }
    else{
        res.status(409).json({
    message: "Email already exists"
    });
        
    }
    

}
module.exports=reguser