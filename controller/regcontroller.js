const reguser=(req,res)=>{
    const {name,emil,password}=req.body
    console.log(name)
    console.log(emil)
    console.log(password)
     res.json({ message: "Registration endpoint working" });

}
module.exports=reguser