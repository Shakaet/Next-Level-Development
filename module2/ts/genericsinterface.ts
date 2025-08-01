{





    interface appleWatch<T,X=null>{
        name:string,
        brand:string,
        property:{
            model:string

        }
        extra:T,
        additional?:X
    }




    let apple:appleWatch<{
            processor:string
        }>={
        name:"macbook",
        brand:"apple",
         property:{
            model:"2016"

        },
        extra:{
            processor:"joss"
        }

        

    }


    interface appleW {
            processor:string,
            ram:number
        }


        type additional=string

    let apple2:appleWatch<appleW,additional>={
        name:"macbook",
        brand:"apple",
         property:{
            model:"2016"

        },
        extra:{
            processor:"joss",
            ram:16
        },
        additional:"best"


       

        

    }

     console.log(apple,apple2)









}