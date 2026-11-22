/**
 * Problem Statement:
 * Calculate the average of N grades stored in an array by passing the array to a dedicated function,
 * using only if and for structures and guarding against division by zero on an empty array.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

function averageGrade(gradesList: number[]): number {
    if (gradesList.length === 0) {
        return 0;
    }

    let gradesSum: number = 0;
    for (let i: number = 0; i < gradesList.length; i++) {
        gradesSum += gradesList[i];
    }

    return gradesSum / gradesList.length;
}

// 1. Declaration
let totalGrades: number;
let grades: number[];
let calculatedAverage: number;

// 2. Initialization
totalGrades = 0;
grades = [];
calculatedAverage = 0;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("       Modular Grades Average with Function");
console.log("==================================================");

totalGrades = Number(prompt("How many grades do you want to enter? "));

for (let i: number = 0; i < totalGrades; i++) {
    grades[i] = Number(prompt("Grade " + (i + 1) + ": "));
}

calculatedAverage = averageGrade(grades);

console.log("\nRecorded grades:", grades);
console.log("Average: " + calculatedAverage.toFixed(2));
console.log("==================================================\n");
