

// step1: interface(if use ts)
// step2: schema
// step3: model
// step4:db query
import { Schema, model, connect } from 'mongoose';


 export type Name= {
    firstName:string,
    middleName:string,
    lastName:string
  };

export type Guardian= {
    fatherName:string,
    fatherOccupation:string,
    fatherContactNo:string,
    motherName:string,
    motherOccupation:string,
    motherContactNo:string
  }


 

  export type LocalGuardian={
    name:string,
    occupation:string,
    contactNo:string,
    address:string
  }

export type  Student=  {
  id:string,
  name:Name,
  gender:"male"|"female",
  dateOfBirth?:string,
  email: string;
  contactNo:string,
  emergencyContactNo:string,
  bloodGroup?: "A+"| "A-"| "B+"| "B-"| "AB+"| "AB-"| "O+"| "O-";
  presentAddress:string,
  permanentAddress:string,
  guardian:Guardian,
  localGuardian:LocalGuardian,
  profileImg?:string,
  isActive:"active"|"blocked"
}