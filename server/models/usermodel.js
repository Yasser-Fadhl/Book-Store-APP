const mongoose=require('mongoose')
require('mongoose-type-email');


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        Required:true,
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        Required:true,
    },
    password:{
        type:String
    }
})
const user=mongoose.model('users',userSchema)

module.exports=user;