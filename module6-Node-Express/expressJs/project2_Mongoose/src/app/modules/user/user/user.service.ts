import { create } from 'domain';

import { user } from "./user.interface";
import { userModel } from './user.model';


export let CreateUserOfDB=async(user:user)=>{


    

       let email=user.email
      let hasAlrearyUsers=await userModel.findOne({email})


      if(hasAlrearyUsers){

        let  result={

            status:false,
            message:"this users already exist",
             r:hasAlrearyUsers
        }

        return result
      }

    let result =await userModel.create(user)
     let res={
        r:result,
        message:"user created successfully"

     }
     return res
    }




