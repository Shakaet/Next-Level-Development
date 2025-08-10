"use strict";
{
    /// instanceof use for oop
    class animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        getSound() {
            console.log("i am animal");
        }
    }
    class dog extends animal {
        constructor(name, species) {
            super(name, species);
        }
        getDogSound() {
            console.log("gew gew");
        }
    }
    class cat extends animal {
        constructor(name, species) {
            super(name, species);
        }
        getCatSound() {
            console.log("mew mew");
        }
    }
    //  2 vabe kora jay 
    //smart way
    // let isDog=(animal:animal):animal is dog=>{
    //     return animal instanceof dog
    // }
    //  let isCat=(animal:animal):animal is cat=>{
    //     return animal instanceof cat
    // }
    //  let  getAnimal=(animal:animal)=>{
    //     if(isDog(animal)){
    //         animal.getDogSound()
    //     }
    //     if(isCat(animal)){
    //         animal.getCatSound()
    //     }
    //     else{
    //         animal.getSound()
    //     }
    // }
    // not bad way
    let getAnimal = (animal) => {
        if (animal instanceof dog) {
            animal.getDogSound();
        }
        if (animal instanceof cat) {
            animal.getCatSound();
        }
        else {
            animal.getSound();
        }
    };
    let catN = new cat("cat", "parsian");
    let dogN = new cat("dogN", "American");
    getAnimal(catN);
}
