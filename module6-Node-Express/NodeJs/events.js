const EventEmitter = require("events");

const myEmitter = new EventEmitter();



myEmitter.on("birthday",(name)=>{
    console.log(`happy birthday ${name}`)

})

myEmitter.on("birthday",()=>{
    console.log(`congratulation`)

})

myEmitter.emit("birthday","shakaet")