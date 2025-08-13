
import express from "express"


import { createStudent, getAllStudents, getSpecificStudent } from "./student.controller"




const router= express.Router()




// will call controller function
router.post("/create-student",createStudent)

router.get("/allStudents",getAllStudents)

router.get("/specificStudent/:id",getSpecificStudent)



export const studentRoutes=router


