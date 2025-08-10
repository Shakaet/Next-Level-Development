{






    let makearray=(params:string):string[]=>{

        return [params]

    }

    let result=makearray("skt")
    // console.log(result)




    // jokhon type ki sent korbo ta sure na,kokhono string,boolean, tokhon


    let makeArray=<T>(params:T):T[]=>{


        return [params]

    }

    let result2=makeArray<string>("hello")
    let result3=makeArray<{name:string;roll:number}>({name:"skt",roll:2089})
    
    // console.log(result2,result3)



     let makeTuple=<T,Q> (params1:T,params2:Q):[T,Q]=>{


        return [params1,params2]

    }


    let res=makeTuple<string,string>("skt","2089")

    let res2=makeTuple<string,{name:string,roll:number}>("skt",{name:"skt",roll:2089})





    let addcoursetostudent=<T>(student:T)=>{


        let course="Next Level Developer"

        return{
            ...student,
            course
        }

    }


    let resultStudent=addcoursetostudent<{name:string,roll:number}>({name:"skt",roll:2089})

    console.log(resultStudent)
}
