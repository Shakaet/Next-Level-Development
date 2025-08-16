import { NextFunction, Request, Response } from "express"
import { CreateUserOfDB } from "./user.service"




export let createUsersfn= async(req:Request,res:Response,next:NextFunction)=>{

    try{
        let users=req.body.user

    
    let result=await CreateUserOfDB(users)

     res.status(200).json({
        status:true,
        message:result. message,
        
        result:result.r,

     })

     console.log(result.r.email)

    

    
    }catch(err){

        next(err)
    }






    



}