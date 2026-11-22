/**
 * Problem Statement:
 * Calculate the average of N student grades using a typed array and for loops.
 * In class the prompt asked for 5 grades; I expanded it so the user decides how many grades to enter.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// 1. Declaration
let totalGrades: number;
let grades: number[];
let gradesSum: number;
let gradesAverage: number;

// 2. Initialization
totalGrades = 0;
grades = [];
gradesSum = 0;
gradesAverage = 0;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("        Dynamic Grades Average with Array");
console.log("==================================================");

totalGrades = Number(prompt("Number of subjects: "));

if (totalGrades <= 0) {
    console.log("Please enter at least 1 subject.");
} else {
    // First loop: collect all grades into the array
    for (let i: number = 0; i < totalGrades; i++) {
        grades[i] = Number(prompt("Grade " + (i + 1) + ": "));
    }

    // Second loop: accumulate all stored grades
    for (let i: number = 0; i < grades.length; i++) {
        gradesSum += grades[i];
    }

    gradesAverage = gradesSum / grades.length;

    console.log("\nRecorded grades:", grades);
    console.log("Total sum: " + gradesSum);
    console.log("The average is: " + gradesAverage.toFixed(2));
}

console.log("==================================================\n");
