"use strict";
var _a;
// ternary
let age = 16;
let result = age > 18 ? "boro" : "choto";
console.log({ result });
// nullish
//  nullish use hoy jokhon undifined or null hobe
let isautheticated = null;
let res = isautheticated !== null && isautheticated !== void 0 ? isautheticated : "guest";
console.log(res);
let person = {
    name: "skt",
    roll: 2089
};
console.log((_a = person === null || person === void 0 ? void 0 : person.tiffin) !== null && _a !== void 0 ? _a : "no tiffin");
