const mongoose=require('mongoose')
const connectdb=async()=>{
    
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected sucessfully")

    
}
module.exports = connectdb