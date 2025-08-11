

let fs= require("fs")

// read asynchronusly
fs.readFile("./text/read.txt","UTF-8",(err,data)=>{

    if(err){
        console.log(err)
    }
    // console.log(data)
    // write asynchronusly


    fs.writeFile("./text/write2.txt",data,"utf-8",(err,data)=>{

        if(err){
            console.log(err)
        }

        console.log("updated")

    })
})


// console.log("testing")