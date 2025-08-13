import { Student } from "./student.interface";
import { Studentmodel } from "./student.model";



const createStudentToDatabase=async(student:Student)=>{



        const result= Studentmodel.create(student)
        return result



}


const getAllStudentFromDB=async()=>{

    const result= await Studentmodel.find()
    return result

}


const getSpecificStudentsFromDb=async(id:string)=>{

    const result=await Studentmodel.findById(id)

    return result
    
}

export const studentServices={
    createStudentToDatabase,
    getAllStudentFromDB,
    getSpecificStudentsFromDb
}