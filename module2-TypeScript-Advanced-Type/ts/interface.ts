

// type diye jemon type specify kora jay thik temon interface er diyeo type define kora jay

// tahole kkn konta use korbo,jehetu interface object akare lekha hoy tai primitive type er khetre type use korbo object er khetre interface




type Use1={
    name:string,
    roll:number,
}


let user1:Use1={
    name:"skt",
    roll:2089
}


interface User2{
    name:string,
    roll:number
}

let user2:User2={
    name:"skt",
    roll:2089,
}




type user3={
    name:string
}

type p=user3 & {roll:number}

let user4:p={
    name:"skt",
    roll:2089,
}


interface user5{
    name:"skt"
}


interface user6 extends  user5{
    roll:number
}


let user7:user6={
    name:"skt",
    roll:2089

}



type a={
    name:string
    university:string
}

interface b{
    roll:number
}


interface c extends a{
    roll:2089
}


let b:c={
    name:"skt",
    roll:2089,
    university:"2089"


}





type arr=number[]


let ar:arr=[1,2,3]



interface arrr{
    [index:number]:number
}

let a:arrr=[1,2,5]





type Add=(num1:number,num2:number)=>number

let add:Add=(num1,num2)=>{
    return num1+num2

}



interface Add2{
    (num1:string,num2:string):string
}

let addd:Add2=(num1,num2)=>{
    return num1

}




