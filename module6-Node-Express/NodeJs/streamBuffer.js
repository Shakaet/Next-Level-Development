const http = require('http');
// console.log(http)


let fs=require("fs")

const server = http.createServer();




server.on("request",(req,res)=>{

    if(req.url="/read-file" && req.method==="GET"){

        // let readableStream=fs.createReadStream(__dirname+"/text/read2.txt")
        let readableStream=fs.createReadStream(process.cwd()+"/text/read2.txt")
        // let readableStream=fs.createReadStream("./text/read2.txt")
           

        readableStream.on("data",(buffer)=>{
             

             res.statusCode=200
             console.log(res)
            res.write(buffer)
            // console.log(buffer)

        })

        readableStream.on("end",()=>{
             res.statusCode=200
            res.end("the streaming is over")

        })

        readableStream.on("error",(err)=>{
            console.log(err)
             res.statusCode=404
            res.end("the streaming is error")

        })


    }
    

})



server.listen(5000,()=>{
    console.log("server is listening on port 5000")
})




