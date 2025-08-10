"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let createPromise = () => {
    return new Promise((resolved, reject) => {
        let data = "hello Promise";
        if (data) {
            resolved(data);
        }
        else {
            reject("no data found");
        }
    });
};
let findData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield createPromise();
        return data;
    }
    catch (err) {
        if (typeof err === "string") {
            console.log("Error message: ", err);
        }
    }
});
let getData = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = yield result.json();
    return data;
});
getData().then(res => {
    console.log(res);
});
