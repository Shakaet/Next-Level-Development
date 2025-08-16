import { NextFunction, Request, Response } from "express"
import { studentServices } from "./student.service"

import { Student } from "./student.interface";
import { studentJoiSchema } from "./validation.joi";




// eta request,response handle kore just,database e ki ache ta janena,ota service er kaj

export const createStudent =async(req:Request,res:Response,next:NextFunction)=>{


   try{



     const student:Student=req.body.students

     const { error, value } = studentJoiSchema.validate(student);


    //  console.log(error,value)
     if(error){
         return res.status(500).json({
        status:false,
        message:"something Wrongg",
        data:error
    })

     }

    const result=await studentServices.createStudentToDatabase(student)

     // send response
      
    res.status(200).json({
        status:true,
        message:"student created successfully",
        data:result
    })


   }catch(err:any){
    // console.log(err)
    // next(err)
    res.status(500).json({
        status:false,
        message:"something Wrong",
        data:err
    })

    

   }
   
    

}



export const getAllStudents=async(req:Request,res:Response,next:NextFunction)=>{


    try{
        const result= await studentServices.getAllStudentFromDB()

    res.status(201).send(result)

    }catch(err){
        // console.log(err)
        next(err)
    }

    

    

}

export const getSpecificStudent=async(req:Request,res:Response,next:NextFunction)=>{

   try{
     const id=req.params.id

    const result=await studentServices.getSpecificStudentsFromDb(id)

    res.status(200).json({
        status:true,
        messsage:"data find",
        data:result
    })

   }catch(err){
    // console.log("errroer",err)
    next(err)
   }

}
