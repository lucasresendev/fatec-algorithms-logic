/**
 * Consolidated Menu: Coursework Exercises
 * Brings together all coursework exercises developed across the semester into one interactive CLI menu.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

function sumTwoNumbers(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

function doubleNumber(enteredNumber: number): number {
    return enteredNumber * 2;
}

function showGreeting(enteredName: string): void {
    console.log("Hello, " + enteredName + "!");
}

function isEvenNumber(enteredNumber: number): boolean {
    return enteredNumber % 2 === 0;
}

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
let menuChoice: number;

// 2. Initialization
menuChoice = 0;

// 3. Assignment and Processing
do {
    console.log("\n================================================================");
    console.log("      Algorithms and Programming Logic | Consolidated Menu      ");
    console.log("================================================================");
    console.log(" 1 - Student Grade Average (3 Fixed Grades)");
    console.log(" 2 - Shopping Cart Final Value (Interface and Accumulator)");
    console.log(" 3 - Sum of Two Numbers (3-Phase Variable Lifecycle)");
    console.log(" 4 - Boolean Logic and Operators (AND, OR, NOT)");
    console.log(" 5 - Grade Approval Flow (Conditionals and Flowchart)");
    console.log(" 6 - Nested Grades Report (2D Interfaces - Self-Study)");
    console.log(" 7 - Multiplication Table (Counted for Loop)");
    console.log(" 8 - Factorial Calculator (Multiplicative Accumulator)");
    console.log(" 9 - Average of 4 Grades (for Loop and Console Trace)");
    console.log("10 - Password Check (3 Attempts with break and Flag)");
    console.log("11 - Array Indexing and Core Methods (push/pop/shift/unshift)");
    console.log("12 - Dynamic Grades Average (Typed Array)");
    console.log("13 - Sales Extremes and Average (Highest and Lowest Scan)");
    console.log("14 - TypeScript Functions Practice (number, void, boolean)");
    console.log("15 - Modular Grades Average (Array Parameter and Guard Clause)");
    console.log(" 0 - Exit Program");
    console.log("================================================================\n");

    menuChoice = Number(prompt("Select an option (0-15): "));

    switch (menuChoice) {
        case 1: {
            console.log("\n--- [01] Student Grade Average ---");
            let firstGrade: number = 7;
            let secondGrade: number = 8;
            let thirdGrade: number = 5;
            let avg: number = (firstGrade + secondGrade + thirdGrade) / 3;
            console.log(`Grades: ${firstGrade}, ${secondGrade}, ${thirdGrade}`);
            console.log(`Calculated Average: ${avg.toFixed(2)}`);
            break;
        }
        case 2: {
            console.log("\n--- [02] Shopping Cart Final Value ---");
            interface CartItem {
                name: string;
                value: number;
            }
            const cart: CartItem[] = [
                { name: "Apple", value: 2 },
                { name: "Strawberry", value: 4 }
            ];
            const shipping: number = 25;
            let subtotal: number = 0;
            let names: string = "";

            for (let i: number = 0; i < cart.length; i++) {
                subtotal += cart[i].value;
                names += cart[i].name + (i < cart.length - 1 ? ", " : "");
            }
            const total: number = subtotal + shipping;
            console.log(`Items: ${names}`);
            console.log(`Subtotal: $ ${subtotal} | Shipping: $ ${shipping} | Total: $ ${total}`);
            break;
        }
        case 3: {
            console.log("\n--- [03] Sum of Two Numbers (3-Phase Lifecycle) ---");
            let firstNumber: number;
            let secondNumber: number;
            let sumResult: number;

            firstNumber = 0;
            secondNumber = 0;
            sumResult = 0;

            firstNumber = 7;
            secondNumber = 9;
            sumResult = firstNumber + secondNumber;
            console.log(`Calculation: ${firstNumber} + ${secondNumber} = ${sumResult}`);
            break;
        }
        case 4: {
            console.log("\n--- [04] Boolean Logic and Operators ---");
            let firstFlag: boolean = false;
            let secondFlag: boolean = true;
            let thirdFlag: boolean = true;

            console.log(`a = ${firstFlag}, b = ${secondFlag}, c = ${thirdFlag}`);
            console.log(`'a' && 'b' = ${firstFlag && secondFlag}`);
            console.log(`'b' && 'c' = ${secondFlag && thirdFlag}`);
            console.log(`'a' || 'b' = ${firstFlag || secondFlag}`);
            console.log(`'a' || '!b' = ${firstFlag || !secondFlag}`);
            break;
        }
        case 5: {
            console.log("\n--- [05] Grade Approval Flow ---");
            let score1: number = 10;
            let score2: number = 9;
            let score3: number = 8;
            let mean: number = (score1 + score2 + score3) / 3;
            let isApproved: boolean = false;
            let isOnProbation: boolean = false;

            if (mean >= 5) {
                isApproved = true;
                isOnProbation = mean < 6;
            } else {
                isApproved = false;
                isOnProbation = false;
            }

            console.log(`Mean: ${mean.toFixed(2)}`);
            console.log(`Approved: ${isApproved} | Academic Probation: ${isOnProbation}`);
            break;
        }
        case 6: {
            console.log("\n--- [06] Nested Grades Report ---");
            interface CourseGrade {
                subject: string;
                grade: number;
            }
            interface StudentReport {
                name: string;
                grades: CourseGrade[];
            }

            const data: StudentReport[] = [
                {
                    name: "John",
                    grades: [
                        { subject: "Algorithms and Logic", grade: 10 },
                        { subject: "Software Engineering", grade: 9 }
                    ]
                },
                {
                    name: "Sarah",
                    grades: [
                        { subject: "Algorithms and Logic", grade: 8.5 },
                        { subject: "Software Engineering", grade: 10 }
                    ]
                }
            ];

            for (let i: number = 0; i < data.length; i++) {
                let sumScore: number = 0;
                for (let j: number = 0; j < data[i].grades.length; j++) {
                    sumScore += data[i].grades[j].grade;
                }
                const finalAvg: number = sumScore / data[i].grades.length;
                console.log(`Student: ${data[i].name} | Average: ${finalAvg.toFixed(2)}`);
            }
            break;
        }
        case 7: {
            console.log("\n--- [07] Multiplication Table ---");
            let base: number = Number(prompt("Enter a number for the multiplication table: "));
            console.log(`Table for ${base}:`);
            for (let i: number = 0; i <= 10; i++) {
                console.log(`${base} * ${i} = ${base * i}`);
            }
            break;
        }
        case 8: {
            console.log("\n--- [08] Factorial Calculator ---");
            let target: number = Number(prompt("Enter a non-negative integer: "));
            let factResult: number = 1;
            for (let i: number = target; i > 0; i--) {
                factResult *= i;
            }
            console.log(`Factorial of ${target}! = ${factResult}`);
            break;
        }
        case 9: {
            console.log("\n--- [09] Average of 4 Grades (for) ---");
            let inputGrade: number = 0;
            let gradeSum: number = 0;
            for (let i: number = 0; i < 4; i++) {
                inputGrade = Number(prompt(`Enter grade ${i + 1}: `));
                gradeSum += inputGrade;
            }
            console.log(`Sum: ${gradeSum} | Average: ${(gradeSum / 4).toFixed(2)}`);
            break;
        }
        case 10: {
            console.log("\n--- [10] Password Check (3 Attempts) ---");
            const storedPassword: number = 123456;
            let isAuthenticated: boolean = false;
            for (let i: number = 1; i <= 3; i++) {
                const attempt: number = Number(prompt("Enter the password (hint: 123456): "));
                if (attempt === storedPassword) {
                    isAuthenticated = true;
                    console.log("Correct password! Access granted.");
                    break;
                }
                if (3 - i > 0) {
                    console.log(`Incorrect password! You have ${3 - i} attempt(s) left.`);
                }
            }
            if (!isAuthenticated) {
                console.log("You have been suspended from the system.");
            }
            break;
        }
        case 11: {
            console.log("\n--- [11] Array Indexing and Core Methods ---");
            let movies: string[] = ["The Lord of the Rings", "A Clockwork Orange", "The Matrix", "Gandhi"];
            console.log("Initial:", movies);
            const removedLast: string = movies.pop()!;
            console.log("pop():", removedLast, "->", movies);
            movies.unshift("Gandhi");
            console.log("unshift('Gandhi'):", movies);
            movies.push("Interstellar");
            console.log("push('Interstellar'):", movies);
            movies.shift();
            console.log("shift():", movies);
            break;
        }
        case 12: {
            console.log("\n--- [12] Dynamic Grades Average (Typed Array) ---");
            const totalSubjects: number = Number(prompt("Number of subjects: "));
            if (totalSubjects <= 0) {
                console.log("Please enter at least 1 subject.");
                break;
            }
            let grades: number[] = [];
            let sum: number = 0;
            for (let i: number = 0; i < totalSubjects; i++) {
                grades[i] = Number(prompt(`Grade ${i + 1}: `));
            }
            for (let i: number = 0; i < grades.length; i++) {
                sum += grades[i];
            }
            console.log("Grades:", grades);
            console.log(`Average: ${(sum / grades.length).toFixed(2)}`);
            break;
        }
        case 13: {
            console.log("\n--- [13] Sales Extremes and Average ---");
            const count: number = Number(prompt("How many sales values? (0 for default 7 values): "));
            let sales: number[] = [];
            if (count === 0) {
                sales = [10, 30, 50, 5, 100, 200, 350];
            } else {
                for (let i: number = 0; i < count; i++) {
                    sales[i] = Number(prompt(`Value ${i + 1}: `));
                }
            }
            if (sales.length === 0) {
                console.log("No sales values entered.");
                break;
            }
            let sumSales: number = 0;
            let highestSale: number = sales[0];
            let lowestSale: number = sales[0];
            for (let i: number = 0; i < sales.length; i++) {
                sumSales += sales[i];
                if (sales[i] > highestSale) {
                    highestSale = sales[i];
                }
                if (sales[i] < lowestSale) {
                    lowestSale = sales[i];
                }
            }
            console.log("Sales:", sales);
            console.log(
                `Count: ${sales.length} | Highest: ${highestSale} | Lowest: ${lowestSale} | Sum: ${sumSales} | Average: ${(sumSales / sales.length).toFixed(2)}`
            );
            break;
        }
        case 14: {
            console.log("\n--- [14] TypeScript Functions Practice ---");
            console.log("1 - Sum two numbers | 2 - Double a number | 3 - Greeting (void) | 4 - Even or odd (boolean)");
            const subOption: number = Number(prompt("Choose (1-4): "));
            if (subOption === 1) {
                const first: number = Number(prompt("First number: "));
                const second: number = Number(prompt("Second number: "));
                console.log("Sum:", sumTwoNumbers(first, second));
            } else if (subOption === 2) {
                const value: number = Number(prompt("Number to double: "));
                console.log("Double:", doubleNumber(value));
            } else if (subOption === 3) {
                const userName: string = String(prompt("Your name: "));
                showGreeting(userName);
            } else if (subOption === 4) {
                const value: number = Number(prompt("Number to check: "));
                console.log(isEvenNumber(value) ? "Even." : "Odd.");
            } else {
                console.log("Invalid sub-option.");
            }
            break;
        }
        case 15: {
            console.log("\n--- [15] Modular Grades Average (Function + Array) ---");
            const total: number = Number(prompt("How many grades do you want to enter? "));
            let gradeList: number[] = [];
            for (let i: number = 0; i < total; i++) {
                gradeList[i] = Number(prompt(`Grade ${i + 1}: `));
            }
            console.log("Grades:", gradeList);
            console.log(`Average: ${averageGrade(gradeList).toFixed(2)}`);
            break;
        }
        case 0: {
            console.log("\nExiting Consolidated Menu. Goodbye!\n");
            break;
        }
        default: {
            console.log("\nInvalid option. Please choose a number between 0 and 15.\n");
            break;
        }
    }
} while (menuChoice !== 0);
