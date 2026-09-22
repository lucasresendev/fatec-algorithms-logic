/**
 * Problem Statement:
 * Calculate the factorial of a number comparing descending, ascending, and subtraction approaches.
 */

import promptSync from "prompt-sync";

const prompt = promptSync();

// 1. Declaration
let inputNumber: number;
let factorialResult: number;
let optionChoice: number;

// 2. Initialization
inputNumber = 0;
factorialResult = 1;
optionChoice = 0;

// 3. Assignment & Processing
console.log("\n==================================================");
console.log("              Factorial Calculator");
console.log("==================================================");
console.log("1 - Descending repetition (Professor's approach)");
console.log("2 - Ascending repetition (My first approach)");
console.log("3 - Subtraction iteration (My second approach)");

optionChoice = Number(prompt("Choose an option (1, 2, or 3): "));
inputNumber = Number(prompt("Enter a number: "));

console.log("\nProcessing " + inputNumber + "!:");

if (optionChoice === 2) {
    // My first approach in class: ascending from 1 up to inputNumber
    for (let i: number = 1; i <= inputNumber; i++) {
        factorialResult *= i;
        console.log(factorialResult);
    }
} else if (optionChoice === 3) {
    // My second approach in class: multiplying by (inputNumber - i) starting at i = 0
    for (let i: number = 0; i < inputNumber; i++) {
        factorialResult *= (inputNumber - i);
        console.log(factorialResult);
    }
} else {
    // Professor's approach: descending from inputNumber down to 1
    for (let i: number = inputNumber; i > 0; i--) {
        factorialResult *= i;
        console.log(factorialResult);
    }
}

console.log("\nFinal result of " + inputNumber + "! = " + factorialResult);
console.log("==================================================\n");
