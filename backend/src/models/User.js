const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String, enum:['customer','admin'], default:'customer', required:true}
},
{timestamps:true, strict:true}
);

module.exports = mongoose.model('User', userSchema);