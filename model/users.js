const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const { users } = require('../user-permission/data');
let userSchema = new Schema({
    email:{ type:String , required:true},
    enrollment:{ type:String,unique:true},
    password:{type:String , required:true},
    role: {type: String, default: "student", enum: ["teacher", "student"]}
}, 
{ 
    collection:'users'
})
let studentSchema = new Schema({
    name:{ type:String , required:true},
    email:{ type:String,required:true },
    studentid:{ type:String,required:true },
    grievancesub:{ type:String,required:true},
    mobile:{type:String,required:true},
    grievancecat:{type:String,required:true},
    department:{type:String,required:true},
    grievancedesc:{type:String,required:true},
    redressal:{type:String, default:null},
}, 
{ 
    collection:'complaint'
})

userSchema.plugin(uniqueValidator,{message:'Email already exists'});
let usedata = mongoose.model('Users',userSchema);
let studentdata = mongoose.model('complaint',studentSchema);
//let facultyresponse = mongoose.model('facultyresponse', facultyresponse)
module.exports = {
    usedata,studentdata
}