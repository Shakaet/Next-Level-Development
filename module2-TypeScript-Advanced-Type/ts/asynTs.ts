




let createPromise=():Promise<string>=>{
   


    return new Promise<string> ((resolved,reject)=>{

       
        let data:string="hello Promise"

        if(data){
            resolved(data)
        }
        else{
            reject("no data found")
        }




    })
}




let findData=async():Promise<string | undefined>=>{

    try{
        let data:string=await createPromise()
    return data
    }catch(err){
        if(typeof err==="string"){
            console.log("Error message: ",err)
        }
    }
}

//    findData()
//    .then(res=>{
//     console.log(res)
//    })


// (async () => {
//   const result = await findData();
//   console.log("Final Result:", result);
// })();



type getdata={ 
    userId: number,
     id: number, 
     title: string, 
     completed: boolean
}


let getData=async(): Promise<getdata>=>{

    let result= await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let data=await result.json()

    return data



}

getData().then(res=>{
    console.log(res)
})


 