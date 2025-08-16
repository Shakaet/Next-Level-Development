import { model, Schema } from "mongoose";
import { AdditionalInfo, user } from "./user.interface";


// create Schema
let AdditionalInfoSchema=new Schema<AdditionalInfo>({
    
        fatherName:{type:String,required:true},
        motherName:{type:String,required:true}
    
})

let userSchema=new Schema<user>({

    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:Number,required:true},
    dateOfBirthMonth:{type:String,required:true},
    additionalinfo:AdditionalInfoSchema

})

// 3. Create a Model.
export const userModel = model<user>('User', userSchema);