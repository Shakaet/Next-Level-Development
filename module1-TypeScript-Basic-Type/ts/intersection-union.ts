

type developer="frontend"|"backend"


let fullstack:developer="frontend"



type frontend1={
    name:string,
    designation1:"frontend developer"
}

type backend={
    name:string,
    designation2:"backend developer"
}


type developer2=frontend1 & backend

let original:developer2={
    name:"frontend",
    designation1:"frontend developer",
    designation2:"backend developer"

    
}




