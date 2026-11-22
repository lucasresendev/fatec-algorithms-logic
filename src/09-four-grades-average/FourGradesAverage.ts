/**
 * Problem Statement:
 * Calculate the arithmetic average of 4 grades using a for loop and an accumulator variable,
 * with an optional desk-check trace mode that prints variable states at every iteration.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// 1. Declaration
let inputNumber: number;
let numberSum: number;
let averageNumber: number;
let traceOption: number;
let showTrace: boolean;

// 2. Initialization
inputNumber = 0;
numberSum = 0;
averageNumber = 0;
traceOption = 0;
showTrace = false;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("           Average of 4 Grades (for)");
console.log("==================================================");
console.log("1 - Standard calculation");
console.log("2 - With desk-check trace in console");

traceOption = Number(prompt("Choose an option (1 or 2): "));
showTrace = traceOption === 2;

for (let i: number = 0; i < 4; i++) {
    if (showTrace) {
        console.log(
            "Step " + (i + 1) +
            " -> Average: " + averageNumber +
            "; Sum: " + numberSum +
            "; Last grade: " + inputNumber
        );
    }

    inputNumber = Number(prompt("Enter grade " + (i + 1) + ": "));
    numberSum += inputNumber;
}

averageNumber = numberSum / 4;

console.log("\nTotal sum: " + numberSum);
console.log("The average is: " + averageNumber.toFixed(2));
console.log("==================================================\n");
