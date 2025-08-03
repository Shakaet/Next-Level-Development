

// constrain mane holo specific vabe bole dewa 

let info=<T extends {id:number,name:string,email:string}>(student:T):{id:number,name:string,email:string}=>{


    return student

}


let result=info<{id:number,name:string,email:string}>({id:2,name:"skt",email:"abdshakaet"})

console.log(result)