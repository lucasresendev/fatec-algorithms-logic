/**
 * Problem Statement:
 * Practice typed functions in TypeScript with parameters, return types, local vs. global scope,
 * void functions, and boolean predicates (sum, double, greeting, and even-or-odd check).
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

function sumTwoNumbers(firstNumber: number, secondNumber: number): number {
    let result: number = 0;
    result = firstNumber + secondNumber;
    return result;
}

function doubleNumber(enteredNumber: number): number {
    let result: number = 0;
    result = enteredNumber * 2;
    return result;
}

function showMessage(enteredName: string): void {
    console.log("Hello, " + enteredName + "!");
}

function isEven(enteredNumber: number): boolean {
    let remainder: number = 0;
    let isEvenNumber: boolean = false;

    remainder = enteredNumber % 2;
    if (remainder === 0) {
        isEvenNumber = true;
    } else {
        isEvenNumber = false;
    }
    return isEvenNumber;
}

// 1. Declaration
let selectedOption: number;
let firstInput: number;
let secondInput: number;
let numberToProcess: number;
let personName: string;
let isEvenResult: boolean;

// 2. Initialization
selectedOption = 0;
firstInput = 0;
secondInput = 0;
numberToProcess = 0;
personName = "";
isEvenResult = false;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("         TypeScript Functions Practice");
console.log("==================================================");
console.log("1 - Sum two numbers (number return)");
console.log("2 - Double a number (number return)");
console.log("3 - Display greeting (void return)");
console.log("4 - Check even or odd (boolean return)");

selectedOption = Number(prompt("Choose an exercise (1-4): "));

if (selectedOption === 1) {
    firstInput = Number(prompt("Enter the first number: "));
    secondInput = Number(prompt("Enter the second number: "));
    console.log("Sum: " + sumTwoNumbers(firstInput, secondInput));
} else if (selectedOption === 2) {
    numberToProcess = Number(prompt("Enter the number you want to double: "));
    console.log("Double: " + doubleNumber(numberToProcess));
} else if (selectedOption === 3) {
    personName = String(prompt("What is your name? "));
    showMessage(personName);
} else if (selectedOption === 4) {
    numberToProcess = Number(prompt("Enter a number to check if it is even or odd: "));
    isEvenResult = isEven(numberToProcess);
    if (isEvenResult) {
        console.log("Even.");
    } else {
        console.log("Odd.");
    }
} else {
    console.log("Invalid option.");
}

console.log("==================================================\n");
