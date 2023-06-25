const express=require("express");
const ClassStudent=require("./models/cstudent.js")
const port=process.env.PORT||8000;
require("./db/connection.js")
const app=express();
app.use(express.json())

app.post("/classmates",async(request,response)=>{

    try{
       const user=new ClassStudent(request.body);
       const createuser= await user.save();
       if(!createuser){
        response.status(404).send()
       }
else{
    response.status(202).send(createuser)
}
    }catch(error){
        response.status(505).send(error)
    }

})




app.get("/classmates",async(request,response)=>{
    try{
        const resultData=await ClassStudent.find().sort({roll:1});
        if(!resultData){
            return response.status(404).send()
        }else{
            response.status(202).send(resultData)
        }

    }catch(error){
        response.status(500).send(error)
    }


})


// app.get("/classmates/:id",async(request,response)=>{

//     try{ 
//          console.log(request.params.id)
//         const _id=request.params.id
//         const oneStudentResult=await ClassStudent.findById(_id);
//         if(!oneStudentResult){
//             return response.status(404).send();
//         }
//         else{
//             response.status(202).send(oneStudentResult)
//         }
       
//     }catch(error){
//         response.status(505).send(error)
//     }


// })







app.get("/classmates/:id",async(request,response)=>{

    try{ 
        const _id=request.params.id;
    
        const oneStudentResult=await ClassStudent.find({firstName:_id});
    // console.log(oneStudentResult)
        if(!oneStudentResult){
            return response.status(404).send();
        }
        else{
            response.status(202).send(oneStudentResult)
        }
       
    }catch(error){
        response.status(505).send(error)
    }


})








app.patch("/classmates/:id",async(request,response)=>{

    try{
        const _id=request.params.id;
        const updateStudents=await ClassStudent.findByIdAndUpdate(_id,request.body,{new:true})
        // console.log(updateStudents)
        response.status(202).send(updateStudents)

    }catch(error){
        response.status(500).send(error)
    }


})


app.delete("/classmates/:id",async(request,response)=>{
    try{
        const _id=request.params.id;
        const deletData=await ClassStudent.findByIdAndDelete(_id);

        response.status(202).send(deletData);
    }catch(error){
        response.status(500).send(error)
    }



})
app.listen(port,"127.0.0.1",()=>{

    console.log(`server start hai ${port } par`)
})