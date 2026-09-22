/**
 * Problem Statement:
 * Prompt the user for an integer and print its multiplication table from 0 to 10 using a for loop.
 */

import promptSync from "prompt-sync";

const prompt = promptSync();

// 1. Declaration
let inputNumber: number;
let optionChoice: number;
let intermediateResult: number;

// 2. Initialization
inputNumber = 0;
optionChoice = 0;
intermediateResult = 0;

// 3. Assignment & Processing
console.log("\n========================================");
console.log("     Multiplication Table with for");
console.log("========================================");
console.log("1 - Direct calculation (Professor's approach)");
console.log("2 - With intermediate variable (My approach in class)");

optionChoice = Number(prompt("Choose an option (1 or 2): "));
inputNumber = Number(prompt("Enter a number: "));

console.log("\nTable of " + inputNumber + ":");

if (optionChoice === 2) {
    // My approach in class: storing result in an intermediate variable
    for (let i: number = 0; i <= 10; i++) {
        intermediateResult = inputNumber * i;
        console.log(inputNumber + " * " + i + " = " + intermediateResult);
    }
} else {
    // Professor's approach: direct calculation inside console.log
    for (let i: number = 0; i <= 10; i++) {
        console.log(inputNumber + " * " + i + " = " + (inputNumber * i));
    }
}

console.log("========================================\n");
