

// generics constrain with key



type vehicle={
    bike:string,
    car:string,
    ship:string

}


type owner="bike" |"car" | "ship" //manually

type owner2=keyof vehicle


let Owner1:owner= "car"
let Owner2:owner2= "car"






 let getPropertyvalue=<X,Y extends keyof X>(key:X,val:Y)=>{

   return  key[val]

 }


type User={
    name:string,
    roll:number
}

let user:User={
    name:"skt",
    roll:2089
}


let result2=getPropertyvalue<User,"name">(user,"name")
let result3=getPropertyvalue(user,"name")
console.log(result2)

