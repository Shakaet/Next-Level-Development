

import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Name, Student } from './student.interface';
import validator from 'validator';








const nameSchema=new Schema<Name>({
    
    firstName:{type:String,
              minLength:[2,"first name t00o small"],
              required:[true,"FirstName is required"],
              trim:true,
              validate:{
                validator:function(val:string){
              //  console.log("firstName",val)
               const capitalized = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();

               return  capitalized===val
              },
              // message:"{VALUE} is not correct"
              message: props => `${props.value} is not correct!`

    }
            },
   middleName:{
    type:String,
    trim:true
   },
   lastName:{
    type:String,
    required:[true,"LastName is required"],
    trim:true,
    validate:{
      validator:(val:string)=>{
       return  validator.isAlpha(val)

      },
      message:"its must string"
    }

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
  id: { type: String,required:true,unique:true },
  name:{
    type:nameSchema,
    required:[true,"name is required"],
    
  },

  //enum type

//   gender: {
//   type: String,
//   enum: ["male", "female"],
//   required: true
// }
  gender:{
    type:String,
    enum:{
      values:["male","female","others"],
       message:'{VALUE} is not supported'
    },
    required:true
  },
  dateOfBirth:{type:String},
  email:{type:String,
    required:true,
    unique:true,
    validate:{
      validator:(val:string)=>validator.isEmail(val),
      message:"{VALUE} is not valid email"

    }


  },
  contactNo:{type:String,required:true},
  emergencyContactNo:{type:String,required:true},
  bloodGroup: {
    type: String,
    enum: ["A+", "A-","B+","B-","AB+","AB-", "O+", "O-"],
    required: true
  },
  // bloodGroup:["A+", "A-","B+","B-","AB+","AB-", "O+", "O-"],
  presentAddress:{type:String,required:true},
  permanentAddress:{type:String,required:true},
  guardian:{
    type:guardianSchema,
    required:true
  },
  localGuardian:{
    type:localGuardianSchema,
    required:true
  },
  profileImg:{type:String},
  isActive:{
    type:String,
    enum:["active","blocked"],
    required:true,
    default:"active"
  }


 
  
});

//. Create a Model.
export const Studentmodel = model<Student>('Student', studentSchema);
