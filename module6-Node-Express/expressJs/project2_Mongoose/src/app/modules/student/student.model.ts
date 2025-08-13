

import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Name, Student } from './student.interface';








const nameSchema=new Schema<Name>({
    
    firstName:{type:String,
              required:true
            },
   middleName:{
    type:String,
   },
   lastName:{
    type:String,
    required:true

   }
  
    
}
)



const guardianSchema=new Schema<Guardian>(
    {

    fatherName:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherContactNo:{type:String,required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNo:{type:String,required:true}



  }

)

const localGuardianSchema=new Schema<LocalGuardian>(
    {
    name:{type:String,required:true},
    occupation:{type:String,required:true},
    contactNo:{type:String,required:true},
    address:{type:String,required:true},
  }

)

//  Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
  id: { type: String },
  name:nameSchema,

  //enum type

//   gender: {
//   type: String,
//   enum: ["male", "female"],
//   required: true
// }
  gender:["male","female"],
  dateOfBirth:{type:String},
  email:{type:String,required:true},
  contactNo:{type:String,required:true},
  emergencyContactNo:{type:String,required:true},
  bloodGroup:["A+", "A-","B+","B-","AB+","AB-", "O+", "O-"],
  presentAddress:{type:String,required:true},
  permanentAddress:{type:String,required:true},
  guardian:guardianSchema,
  localGuardian:localGuardianSchema,
  profileImg:{type:String},
  isActive:["active","blocked"]


 
  
});

//. Create a Model.
export const Studentmodel = model<Student>('Student', studentSchema);
