"use strict";
{
    // 1. spread operator
    // array spread
    let arr1 = ["a", "b", "c", "d"];
    let arr2 = ["e", "f", "g", "h"];
    arr1.push(...arr2);
    // console.log(arr1,arr2)
    // object spread
    let person1 = {
        name: "skt",
        email: "skt@"
    };
    let person2 = {
        roll: "shabu",
        code: "sab@"
    };
    let newobj = Object.assign(Object.assign({}, person1), person2);
    // console.log(newobj)
    //2. rest operator
    function add(...friend) {
        return friend.map((item) => {
            return item;
        });
    }
    console.log(add(1, 2, 3, 4));
}
