"use strict";
{
    let makearray = (params) => {
        return [params];
    };
    let result = makearray("skt");
    // console.log(result)
    // jokhon type ki sent korbo ta sure na,kokhono string,boolean, tokhon
    let makeArray = (params) => {
        return [params];
    };
    let result2 = makeArray("hello");
    let result3 = makeArray({ name: "skt", roll: 2089 });
    // console.log(result2,result3)
    let makeTuple = (params1, params2) => {
        return [params1, params2];
    };
    let res = makeTuple("skt", "2089");
    let res2 = makeTuple("skt", { name: "skt", roll: 2089 });
    let addcoursetostudent = (student) => {
        let course = "Next Level Developer";
        return Object.assign(Object.assign({}, student), { course });
    };
    let resultStudent = addcoursetostudent({ name: "skt", roll: 2089 });
    console.log(resultStudent);
}
