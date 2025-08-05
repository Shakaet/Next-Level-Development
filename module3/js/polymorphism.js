"use strict";
{
    class person {
        getsleep() {
            console.log("he sleep 8 hours in a day");
        }
    }
    class developer extends person {
        getsleep() {
            console.log("he sleep 6 hours in a day");
        }
    }
    function getSleep(param) {
        param.getsleep();
    }
    let person1 = new person();
    let developer1 = new developer();
    getSleep(person1);
    getSleep(developer1);
}
