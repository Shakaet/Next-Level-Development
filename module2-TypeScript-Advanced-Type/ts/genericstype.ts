



// generics Type


type generics<T>= Array<T>

// let arrN:number[]=[1,2,3,4,5]

// let arrStr:string[]=["s","k","t"]
// let arrB:boolean[]=[true,false]

let arrN:generics<number>=[1,2,3,4,5]

let arrStr:generics<string>=["s","k","t"]

let arrB:generics<boolean>=[true,false]






let arrObj:generics<{name:string,roll:number}>=[
    {
        name:"skt",
        roll:2089
    },
    {
        name:"hb",
        roll:2078
    }

]



type user= {name:string,roll:number}

let arrObj2:generics<user>=[
    {
        name:"skt",
        roll:2089
    },
    {
        name:"hb",
        roll:2078
    }

]


//tuple


type genericsTuple<x,y>=[x,y]

let tuple:genericsTuple<number,string>=[1,"t"]


let tupleHard:[number,{name:string,university:string}] =[2,{name:"skt",university:"puc"}]

let tupleHard2:genericsTuple<number,{name:string,university:string}> =[2,{name:"skt",university:"puc"}]



