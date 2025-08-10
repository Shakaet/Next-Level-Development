

{

     class person{
        name:string
        email:string



        constructor(name:string,email:string){
            this.name=name
            this.email=email
        }


        getSleep(noOfHour:number){
            console.log(`he sleep for ${noOfHour} hours`)

        }



    }




    class student extends person{
      



        constructor(name:string,email:string){
            super(name,email)
        }





    }
    let student1=new student("skt","abd@")



     class teacher extends person{
      
        designation:string



        constructor(name:string,email:string,designation:string){
            super(name,email)
            this.designation=designation
        }


       
        gettakeClass(noOfHour:number){
            console.log(`he take class for ${noOfHour} hours`)

        }
        


    }


    let teacher1=new teacher("skt","abd@","chairman")

    
}