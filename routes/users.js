const express= require('express');
const {addUser, checkUser}=require('../controllers/users');
const user=express.Router();

user.route('/userReg').post(addUser);
user.route('/userLogin').get(checkUser);






module.exports=user;