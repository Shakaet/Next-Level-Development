{




    // type guard by typeof operator

     type numeric=string|number

    let add=(param1:numeric,param2:numeric):numeric=>{

        if(typeof param1 === "number" && typeof param2 ==="number"){
            return param1+param2
        }
        else{
            return param1.toString()+param2.toString()
        }

    }
    let res1=add(2,3)
    let res2=add(2,"3")

    // console.log(res1)
    // console.log(res2)




    // in guard (object er khetre use hoy)




    type normalUser={
        name:string

    }

     type adminUser={
        name:string,
        role:string
        
    }


    let getUser=(user:normalUser|adminUser)=>{

        if("role" in user){
            console.log(`i am sure that it is ${user.role}`)
        }else{
            console.log("he is normal user")
        }

    }
    
    let normaluser:normalUser={
        name:"shakaet"
    }

    let admin:adminUser={
        name:"shakaet",
        role:"admin"
    }


    getUser(normaluser)
    
}


