 

// ternary
 let age:number=16;


 let result:string=age >18 ?"boro":"choto"
 console.log({result})

 // nullish

//  nullish use hoy jokhon undifined or null hobe


let isautheticated=null

let res= isautheticated ?? "guest"
console.log(res)


//optional chaining


type Person={
    name:string,
    roll:number,
    tiffin?:boolean
}



let person:Person={
    name:"skt",
    roll:2089

}

console.log(person?.tiffin ?? "no tiffin")




