const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
name:{
type:String,
required:[true, 'Please enter your username'],
trim:true,
maxlength:[20, 'Username cannot be longer than 20 characters']

},
email:{
    type:String,
    required:[true, "Please enter a valid address"]

},
password:{
    type:String,
    required:[true, 'please enter your password']


}
})

module.exports=mongoose.model('User', userSchema)