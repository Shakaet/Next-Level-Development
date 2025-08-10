"use strict";
{
    class person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        getSleep(noOfHour) {
            console.log(`he sleep for ${noOfHour} hours`);
        }
    }
    class student extends person {
        constructor(name, email) {
            super(name, email);
        }
    }
    let student1 = new student("skt", "abd@");
    class teacher extends person {
        constructor(name, email, designation) {
            super(name, email);
            this.designation = designation;
        }
        gettakeClass(noOfHour) {
            console.log(`he take class for ${noOfHour} hours`);
        }
    }
    let teacher1 = new teacher("skt", "abd@", "chairman");
}
