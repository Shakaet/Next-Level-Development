"use strict";
{
    let calculateAverageGrade = (student1) => {
        let gradesA = student1.grades;
        let sum = gradesA.reduce((i, acc) => i + acc, 0);
        return sum / gradesA.length;
    };
    const student1 = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    let result = calculateAverageGrade(student1);
    console.log(result);
}
