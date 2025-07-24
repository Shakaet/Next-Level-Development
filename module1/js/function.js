"use strict";
{
    //normal function
    function add(a, b) {
        return a + b;
    }
    // arrow function
    let add2 = (a, b = 10) => {
        return a + b;
    };
    // object er moddhe kono function lekhle take method bole
    let per = {
        name: "skt",
        val: 10,
        addnum(val) {
            return this.val + val;
        }
    };
    console.log(per);
    let arr3 = [10, 20, 5];
    let newArr = arr3.map((val) => val * val);
    console.log(newArr);
}
