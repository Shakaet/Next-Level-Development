import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000



app.use(express.json())

app.use(express.text())

let userRouter = express.Router()
let courseRouter = express.Router()

app.use("/",userRouter)
app.use("/",courseRouter)


let logger=(req:Request,res:Response,next:NextFunction)=>{

  console.log(req.url,req.method,req.hostname)
  next()

}


userRouter.post("/api/v1/create-user",(req:Request,res:Response)=>{

  let user=req.body

  console.log(user)

  res.json({
    message:"successfully create users",
    data:user
  })




})



courseRouter.get("/api/v1/course",(req:Request,res:Response)=>{

  let course=req.body

  console.log(course)

  res.json({
    message:"successfully added courses",
    data:course
  })




})



// error handling



userRouter.get("/api/v1/error",async(req:Request,res:Response)=>{

   try{

    console.log(somthing)

   }catch(err){
    console.log("error",err)
    res.status(400).json({
      success:false,
      mesaage:"not get data"
    })
   }
  

})




// globar error handling 

userRouter.get("/api/v1/globalerror",async(req:Request,res:Response,next:NextFunction)=>{

   try{

    console.log(somthing)

   }catch(err){
    // console.log("error",err)
    // res.status(400).json({
    //   success:false,
    //   mesaage:"not get data"
    // })

    next(err)
   }
  

})







// router use





app.get('/', logger,(req:Request, res:Response) => {
  // console.log("req",req?.body)
  //  console.log("res",res)
 
  res.send('Hello server running successfully done')
})


//params
app.get('/:id/:userId', (req:Request, res:Response) => {
  
  console.log(req.params.id)
  console.log(req.params.userId)
  res.send('Hello server running successfully done')
})

//query

app.get('/details', (req:Request, res:Response) => {
  
  console.log(req.query)
  res.send('Hello server running successfully done')
})


app.post("/",(req:Request,res:Response)=>{

  console.log(req.body)

  res.json({
    message:"data sent successfully"
  })

})



// all error handler



// app.all("*", (req, res) => {
//   res.status(404).json({
//     status: false,
//     message: "not found"
//   });
// });
app.use((req:Request, res:Response) => {
  res.status(404).json({
    status: false,
    message: "not found"
  });
});







/// global error handler

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  if(err){
    console.log(err)

    res.status(400).json({
      status:false,
      message:"soththing went wrong"
    })
  }
})





export default app


