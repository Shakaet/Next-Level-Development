


let file =require("fs")



// read file
let readfile=file.readFileSync("./text/read.txt","utf-8")
console.log(readfile)

//write file


console.log(file.writeFileSync("./text/write.txt",readfile))