const mongoose=require("mongoose");
const validator=require("validator");

const classSchema=new mongoose.Schema({
firstName:{
    type:String,
    required:true,
    minLength:3,
    trim:true,
    uppercase:true,
},
lastName:{
    type:String,
    required:true,
    minLength:3,
    trim:true,
    uppercase:true,

},roll:{
    type:String,
    minLength:8,
    maxLength:18,
    required:true,
    unique:[true,"your roll no already exit"]

},
email:{
    type:String,
    minLength:7,
    unique:[true,"your email already exit"],
    required:true,
    lowercase:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("please enter right email")
        }
    }

},phone:{
    minLength:10,
    maxLength:15,
    type:Number,
    required:true,
    unique:[true,"your number already exit"],
}
})

const ClassStudent=new mongoose.model("classmate",classSchema);
module.exports=ClassStudent;