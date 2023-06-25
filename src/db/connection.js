const mongoose=require("mongoose");

const classStudentFunction=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/classdata")
}
classStudentFunction().then(()=>{


    console.log("sahi hai bsdk")
}).catch(()=>{

    console.log("galat hai bsdk")
})