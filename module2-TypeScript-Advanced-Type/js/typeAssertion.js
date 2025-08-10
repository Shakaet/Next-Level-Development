"use strict";
{
    let n;
    n = 20.0005;
    console.log(n.toFixed(2));
    let kgTogm = (val) => {
        if (typeof val === "string") {
            let result = parseFloat(val) * 1000;
            return `the string value is ${result}`;
        }
        if (typeof val === "number") {
            return val * 1000;
        }
    };
    let result1 = kgTogm("1000");
    let result2 = kgTogm(1000);
    console.log(result1);
    console.log(result2);
    try {
    }
    catch (err) {
        console.log(err.message);
    }
    let obj = {
        name: "skt",
        roll: 2089
    };
    console.log(obj.roll);
}
