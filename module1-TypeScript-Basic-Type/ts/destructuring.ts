
{




    // object destructuring


    let obj={

        name:"skt",
        edu:{
            ssc:"collegiate",
            hsc:{
                clg1:"islamia",
                clg2:"port"
            }
        },
        year:2025
    }


    // let {edu:{ssc:f}}=obj
    // let {edu:{hsc:{clg1}}}=obj


    // console.log(clg1)


    // array destructuring


    let arr:string[]=["a","b","c","d"]

    let [a,...rest]=arr
    
    console.log(rest)











}