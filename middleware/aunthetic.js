const jwt = require('jsonwebtoken')
const verify=(req,res,next)=>{
const tocken=req.cookies.token
if(!tocken){
     return res.status(401).json({ message: 'Token missing' })
}

try{
const decode=jwt.verify(tocken,process.env.JWT_SECRET)
return next()
}
catch(error){
     return res.status(401).json({ message: 'Invalid or expired token' })
}

}




module.exports=verify