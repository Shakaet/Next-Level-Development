

//local module (we create)

let {a,add} = require("./local.js")
let {a:A,add:Add} = require("./local2.js")

// import add from "./local.mjs";



// console.log(add(2,3))
// console.log(a)

// console.log(Add(2,3,5))
// console.log(A)



// build in module


let path=require("path")

// console.log(path.dirname("C:/Users/hotspot/Documents/ph-level-2/Next-level/module6-Node-Express/NodeJs/index.js"))
// console.log(path.parse("C:/Users/hotspot/Documents/ph-level-2/Next-level/module6-Node-Express/NodeJs/index.js"))
console.log(path.join("C:/Users/hotspot/Documents/ph-level-2/Next-level/module6-Node-Express/NodeJs/","local.js"))
