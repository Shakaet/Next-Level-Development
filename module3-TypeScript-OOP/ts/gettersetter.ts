{
    class person{
    //  readonly name:string
    // private _age:number
    // protected salary:number
     name:string
     _age:number
     private _salary:number

    constructor(name:string,_age:number,salary:number){
        this.name=name
        this._age=_age
        this._salary=salary
    }



    get deposite(){    //its a getter

        return this._salary
    }



    getSalary(){
        return this._salary
    }




    set deposite(amount:number){

        this._salary= this._salary+amount

    }




    addSalary(amount:number){

        return this._salary+amount

    }




}






let student=new person("skt",20,20)

   let res1 =student.getSalary()    // function call kore
   let res2 =student.addSalary(20) // function call kore


 
    student.deposite=100  // property er value set er moto kore 
    let res3=student.deposite // property er value get er moto kore access

     console.log(res3)
}