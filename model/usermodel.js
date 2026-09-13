const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
         type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Int16Array,
    },
    password:{
        type: String,
    required: true
    }
});