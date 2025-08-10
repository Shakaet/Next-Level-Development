// user ke just function/method gulo show korano, actual implementation hide kora


// abstraction 2 vabe kora hoy, 1.interface er maddhome, 2.abstract class use kore


// interface use kore

interface vehicle1{

    sound():void
    startEngine():void
    stopEngine():void
}


class Vehicle1 implements vehicle1{
    sound(): void {
        console.log("hello sound")
    }

    startEngine(): void {
        console.log("hello startEngin")
    }

    stopEngine(): void {
        console.log("hello stopEngin")
    }



}

 let v=new Vehicle1()
 v.startEngine()
 v.stopEngine()



 /// abstract class


 abstract class vehicles2{
    abstract sound():void
    abstract startEngine():void
    abstract stopEngine():void

 }

 class Vehicles2 extends vehicles2{

    sound(): void {
        console.log("hello sound")
    }

    startEngine(): void {
        console.log("hello startEngin")
    }

    stopEngine(): void {
        console.log("hello stopEngin")
    }


 }
