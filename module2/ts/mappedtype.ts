
// type change by map

let arrofNumber:number[]=[1,2,3,4,5]



let arrofStr:string[]=arrofNumber.map((num)=>num.toString())

console.log(arrofStr)



type AreaofNumber={
    height:number,
    width:number
}


// type AreatofStr={
//     [key in "height"|"width"]:string
// }


// keyof AreaofNumber="height"|"width"

type AreatofStr={
    [key in keyof AreaofNumber]:string   // its a mapped type 
}


type Height=AreaofNumber["height"] //look up type


type AreaStr<T>={

    [key in keyof T]:T[key]   
}


let area1:AreaStr<{name:string,roll:number}>={name:"skt",roll:2089}