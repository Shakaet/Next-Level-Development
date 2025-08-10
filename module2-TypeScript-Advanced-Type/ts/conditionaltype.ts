





{
    type a=number

    type b=string


    type c= a extends string ?true: b extends boolean? boolean:any



    type sheik={
        name:string,
        roll:number
    }


    type checkvalue<T>=T extends keyof sheik ? true:false



    type res=checkvalue<"roll">


}
