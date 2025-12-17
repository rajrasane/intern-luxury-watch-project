const mongoose = require("mongoose");
const User = require("../models/User.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')


exports.register = async(req, res , next) =>{
    try{
        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({...req.body, password : hashedPassword});
        await user.save();
        const token = jwt.sign({id: user._id, email: user.email, role: user.role}, 'ogyygyggyewsesdacxfswwzx', { expiresIn: "15m" })

        res.status(201).json({data : user , token});
    }
    catch(err){
        next(err);
    }
}

exports.login = async(req,res,next) => {
    try{
        const {password, email} = req.body
        const user = await User.findOne({email: req.body.email})
        if(!user){
            return res.status(400).json({message: "Wrong user name and password"})
        }
        valid = bcrypt.compare(password, user.pssword)
        if (!valid){
            return res.status(400).json({message: "Wrong user name and password"})   
        }
        const token = jwt.sign({id: user._id, email: user.email, role: user.role}, 'ogyygyggyewsesdacxfswwzx', { expiresIn: "15m" })

        verifyed = jwt.verify(token, 'ogyygyggyewsesdacxfswwzx')

        if(!verifyed){
            return res.status(401).json({message: "Unauthorized access, invalid token"})
        }
        return res.status(200).json({ user, token})
    }
    catch(err){
        next(err);
    }
}

exports.deleteUser = async(req,res,next) => {
    try{
        const {id} = req.params;
        console.log(id);
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted successfully"} )
    }
    catch(err){
        next(err);
    }
}