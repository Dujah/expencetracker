const user=require('../model/usermodel.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const login=async (req,res)=>{
    // this awit can fail to the i use try catch
     // to avoid this try catch we use async hnadler a helper function which will be warp around this function
    try{
         const {email,password}=req.body
          const existing_user=await user.findOne({email:email})
         if(existing_user){
        const isMatch = await bcrypt.compare(password, existing_user.password)
        if(isMatch){
            //jwt stuff
            const token=jwt.sign(
       { id: existing_user._id },       // payload — keep it minimal
        process.env.JWT_SECRET,          // secret key
       { expiresIn: '1d' }              // token expiry
       )
       res.cookie('token', token, {
    httpOnly: true,
    secure: false,  // true only over HTTPS
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000   // 1 day, in milliseconds
     })

     return res.status(200).json({
    message: "Login successful",
    user: {
        id: existing_user._id,
        username: existing_user.username,
        email: existing_user.email
    }
})


        }
        else{
             return res.status(401).json({
        message: "Invalid email or password"
         })

        }

     }
     else{
         res.status(401).json({
             message: "create the account"
         })
     }
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Something went wrong, please try again" })
    }

}

module.exports=login