

// class er moddhe kono function lekhle ta method
{



    // class animal{
    //     name:string;
    //     species:string;
    //     sound:string


    //     constructor(name: string,species:string,sound:string){
    //         this.name=name;
    //         this.species=species,
    //         this.sound=sound

    //     }

    //     makeSound(){

    //         console.log(`hello ${this.sound}`)



    //     }
    // }

    class animal{
        // name:string;
        // species:string;
        // sound:string

        //   using parameter property for simplify(eta korle 2 bar declard korte hoyna)
        constructor( public name: string,public species:string, public sound:string){
            // this.name=name;
            // this.species=species,
            // this.sound=sound

        }

        makeSound(){

            console.log(`hello ${this.sound}`)



        }
    }


    let dog=new animal("jj","kj","gew gew")
     let cat=new animal("jj","kj","meo meo")

     cat.makeSound()

    
}