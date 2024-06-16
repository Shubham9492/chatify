import mongoose from "mongoose"

const userModel = new mongoose.Schema({
    fullName :{
        type:String,
        requied:true
    },
    username :{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true,
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        requied:true
    }
},{timestamps:true});

export const User= mongoose.model("User",userModel)