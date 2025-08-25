
import express from "express"


import { createStudent, deletedSpecificStudent, getAllStudents, getSpecificStudent } from "./student.controller"




const router= express.Router()




// will call controller function
router.post("/create-student",createStudent)

router.get("/allStudents",getAllStudents)

router.get("/specificStudent/:id",getSpecificStudent)

router.delete("/specificStudent/:id",deletedSpecificStudent)



export const studentRoutes=router


