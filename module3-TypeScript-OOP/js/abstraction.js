"use strict";
// user ke just function/method gulo show korano, actual implementation hide kora
class Vehicle1 {
    sound() {
        console.log("hello sound");
    }
    startEngine() {
        console.log("hello startEngin");
    }
    stopEngine() {
        console.log("hello stopEngin");
    }
}
let v = new Vehicle1();
v.startEngine();
v.stopEngine();
