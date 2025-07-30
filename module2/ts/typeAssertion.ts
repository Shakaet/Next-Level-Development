
{

let n:any;

 n=20.0005;

console.log((n as number).toFixed(2))





let kgTogm=(val:string|number):number|string|undefined=>{


    if(typeof val==="string"){

        let result=parseFloat(val)*1000
        return `the string value is ${result}`
    }
    if(typeof val=== "number"){

        return val*1000
    }


}


let result1=kgTogm("1000") as string
let result2=kgTogm(1000) as number
console.log(result1)
console.log(result2)



type customType={
    message:"string"
}
try{

}catch(err){
    console.log((err as customType).message)
}



type N={
    name:string;
    roll:number
}



let obj:N={
    name:"skt",
    roll:2089
}


console.log((obj as N).roll)








}
