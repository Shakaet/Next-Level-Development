"use strict";
// generics constrain with key
let Owner1 = "car";
let Owner2 = "car";
let getPropertyvalue = (key, val) => {
    return key[val];
};
let user = {
    name: "skt",
    roll: 2089
};
let result2 = getPropertyvalue(user, "name");
let result3 = getPropertyvalue(user, "name");
console.log(result2);
