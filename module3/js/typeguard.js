"use strict";
{
    let add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    let res1 = add(2, 3);
    let res2 = add(2, "3");
    let getUser = (user) => {
        if ("role" in user) {
            console.log(`i am sure that it is ${user.role}`);
        }
        else {
            console.log("he is normal user");
        }
    };
    let normaluser = {
        name: "shakaet"
    };
    let admin = {
        name: "shakaet",
        role: "admin"
    };
    getUser(normaluser);
}
