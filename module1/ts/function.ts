

//normal function


function add(a:number,b:number):number{

    return a+b
    
}


// arrow function

let add2=(a:number,b:number=10):number=>{
    return a+b
}


// object er moddhe kono function lekhle take method bole


let per={

    name:"skt",
    val:10,
    addnum(val:number):number{

        return this.val+val

    }

}

console.log(per)



let arr3:number[]=[10,20,5]

let newArr=arr3.map((val:number):number=>val*val)

console.log(newArr)











