const mongoose=require('mongoose');

const user=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

//create a collection
const Register=new mongoose.model("Register",user);

module.exports=Register;