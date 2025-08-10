"use strict";
///
///  access modifier = public,private.protected,readonly
// readonly dile kono change pr write kora jayna
//public by default public thake, shob jayga theke access kora jay
//private korle class er vitor ei access kora jay,baire access kora jayna,baire theke changed korte hole class er vitor method declard kore changed korte hobe
//protected jodi amra chai class er baire theke changed korte parbena,but jara extend korbe tara changed korte parbe tahole tokhon protected use korbo
class person {
    constructor(name, _age, salary) {
        this.name = name;
        this._age = _age;
        this._salary = salary;
    }
    getSalary() {
        return this._salary;
    }
    addSalary(amount) {
        return this._salary + amount;
    }
}
class teacher extends person {
    tech() {
    }
}
let student = new person("skt", 20, 20);
let res1 = student.getSalary();
let res2 = student.addSalary(20);
console.log(res1, res2);
