const User= require('../models/Users')

const addUser=async(req,res)=>{
    try{
        const user= await User.create(req.body)
        res.send(200).json({user})
    }catch(err){

    }
}

const checkUser=async(req,res)=>{
    try{
        const user= await User.create(req.body)
        res.send(200).json({user})
    }catch(err){

    }
}

module.exports={addUser, checkUser}