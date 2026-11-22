/**
 * Problem Statement:
 * Store a fixed password and give the user up to 3 attempts using a for loop and break.
 * Print "Correct password!" on a match, or lock access after 3 failed attempts.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// 1. Declaration
const storedPassword: number = 123456;
const maxAttempts: number = 3;
let passwordInput: number;
let remainingAttempts: number;
let isAuthenticated: boolean;

// 2. Initialization
passwordInput = 0;
remainingAttempts = maxAttempts;
isAuthenticated = false;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("          Password Check (3 Attempts)");
console.log("==================================================");

for (let i: number = 1; i <= maxAttempts; i++) {
    passwordInput = Number(prompt("Enter the password: "));

    if (passwordInput === storedPassword) {
        isAuthenticated = true;
        console.log("\nCorrect password! Access granted.");
        break;
    }

    remainingAttempts = maxAttempts - i;

    if (remainingAttempts > 0) {
        console.log(
            `Incorrect password! You have ${remainingAttempts} attempt(s) left.\n`
        );
    }
}

if (!isAuthenticated) {
    console.log("\nYou have been suspended from the system after 3 failed attempts.");
}

console.log("==================================================\n");
