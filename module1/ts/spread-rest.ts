
{

    // 1. spread operator

// array spread

let arr1:string[]=["a","b","c","d"]
let arr2:string[]=["e","f","g","h"]


arr1.push(...arr2)

// console.log(arr1,arr2)


// object spread

let person1 : {
    name: string;
    email: string;
}={
    name:"skt",
    email:"skt@"
}

let person2 : {
    roll: string;
    code: string;
}={
    roll:"shabu",
    code:"sab@"

}

let newobj={
    ...person1,
    ...person2
}

// console.log(newobj)


//2. rest operator



function add(...friend:number[]){

    
   return friend.map((item:number)=>{
        return item
    })





}



console.log(add(1,2,3,4))













}