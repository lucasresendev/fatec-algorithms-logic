/**
 * Problem Statement:
 * Analyze an array of sales values (using a default 7-item dataset or user-entered values)
 * to calculate total sales count, accumulated sum, average value, highest sale, and lowest sale.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// 1. Declaration
let totalValues: number;
let values: number[];
let valuesSum: number;
let averageValue: number;
let highestValue: number;
let lowestValue: number;

// 2. Initialization
totalValues = 0;
values = [];
valuesSum = 0;
averageValue = 0;
highestValue = 0;
lowestValue = 0;

// 3. Assignment and Processing
console.log("\n==================================================");
console.log("         Sales Extremes and Average");
console.log("==================================================");

totalValues = Number(
    prompt("How many sales values do you want to enter? (Enter 0 to use the 7 default values): ")
);

if (totalValues === 0) {
    values = [10, 30, 50, 5, 100, 200, 350];
} else {
    for (let i: number = 0; i < totalValues; i++) {
        values[i] = Number(prompt("Value " + (i + 1) + ": "));
    }
}

if (values.length === 0) {
    console.log("No sales values provided.");
} else {
    for (let i: number = 0; i < values.length; i++) {
        valuesSum += values[i];

        if (i === 0) {
            highestValue = values[0];
            lowestValue = values[0];
        } else {
            if (values[i] > highestValue) {
                highestValue = values[i];
            }
            if (values[i] < lowestValue) {
                lowestValue = values[i];
            }
        }
    }

    averageValue = valuesSum / values.length;

    console.log("\nSales dataset:", values);
    console.log("Total sales count: " + values.length);
    console.log("Highest sale: " + highestValue);
    console.log("Lowest sale: " + lowestValue);
    console.log("Sum of sales: " + valuesSum);
    console.log("Average sale: " + averageValue.toFixed(2));
}

console.log("==================================================\n");
