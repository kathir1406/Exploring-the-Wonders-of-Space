const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    isVerified:{type:Boolean,default:false}
},{timestamps:true})
const usermodel=new mongoose.model('users',userschema)
module.exports=usermodel