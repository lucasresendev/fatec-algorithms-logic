/**
 * Consolidated Menu: Coursework Exercises
 * Unites all coursework algorithms across the semester into a single interactive console program.
 */

import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// 1. Declaration
let menuChoice: number;

// 2. Initialization
menuChoice = 0;

// 3. Assignment & Processing
do {
        console.log("\n================================================================");
        console.log("       Algorithms & Programming Logic | Consolidated Menu       ");
        console.log("================================================================");
        console.log("1 - Student Grade Average (Arithmetic Precedence)");
        console.log("2 - Shopping Cart Final Value (Interface & Accumulator)");
        console.log("3 - Sum of Two Numbers (Variable Lifecycle: 3 Phases)");
        console.log("4 - Boolean Logic & Operators (AND, OR, NOT)");
        console.log("5 - Grade Approval Flow (ISO/ANSI Flowchart & Decisions)");
        console.log("6 - Nested Grades Report (2D Interface & Accumulation)");
        console.log("7 - Multiplication Table (Counted for Loop)");
        console.log("8 - Factorial Calculator (Multiplicative Accumulator)");
        console.log("0 - Exit Program");
        console.log("================================================================\n");

        menuChoice = Number(prompt("Select an option (0-8): "));

        switch (menuChoice) {
            case 1: {
                console.log("\n--- [01] Student Grade Average ---");
                // 1. Declaration -> 2. Initialization -> 3. Assignment
                let g1: number = 0;
                let g2: number = 0;
                let g3: number = 0;
                let avg: number = 0;

                g1 = 7;
                g2 = 8;
                g3 = 5;
                avg = (g1 + g2 + g3) / 3;
                console.log(`Grades: ${g1}, ${g2}, ${g3}`);
                console.log(`Calculated Average: ${avg}`);
                break;
            }
            case 2: {
                console.log("\n--- [02] Shopping Cart Final Value ---");
                interface Item { name: string; value: number; }
                const cart: Item[] = [
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
                // 1. Declaration
                let n1: number;
                let n2: number;
                let sum: number;

                // 2. Initialization
                n1 = 0;
                n2 = 0;
                sum = 0;

                // 3. Assignment & Processing
                n1 = 7;
                n2 = 9;
                sum = n1 + n2;
                console.log(`Calculation: ${n1} + ${n2} = ${sum}`);
                break;
            }
            case 4: {
                console.log("\n--- [04] Boolean Logic & Operators ---");
                let a: boolean = false;
                let b: boolean = true;
                let c: boolean = true;

                console.log(`a = ${a}, b = ${b}, c = ${c}`);
                console.log(`'a' && 'b' = ${a && b}`);
                console.log(`'b' && 'c' = ${b && c}`);
                console.log(`'a' || 'b' = ${a || b}`);
                console.log(`'a' || '!b' = ${a || !b}`);
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
                interface CourseGrade { subject: string; grade: number; }
                interface StudentReport { name: string; grades: CourseGrade[]; }

                const data: StudentReport[] = [
                    {
                        name: "John",
                        grades: [
                            { subject: "Algorithms & Logic", grade: 10 },
                            { subject: "Software Engineering", grade: 9 }
                        ]
                    },
                    {
                        name: "Sarah",
                        grades: [
                            { subject: "Algorithms & Logic", grade: 8.5 },
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
                console.log("\n--- [07] Multiplication Table (Counted for Loop) ---");
                let base: number = 7;
                console.log(`Table for ${base}:`);
                for (let i: number = 0; i <= 10; i++) {
                    console.log(`${base} * ${i} = ${base * i}`);
                }
                break;
            }
            case 8: {
                console.log("\n--- [08] Factorial Calculator (Multiplicative Accumulator) ---");
                let target: number = 5;
                let factResult: number = 1;
                for (let i: number = target; i > 0; i--) {
                    factResult *= i;
                }
                console.log(`Factorial of ${target}! = ${factResult}`);
                break;
            }
            case 0: {
                console.log("\nExiting Consolidated Menu. Goodbye!\n");
                break;
            }
            default: {
                console.log("\nInvalid option. Please choose a number between 0 and 8.\n");
                break;
            }
        }
    } while (menuChoice !== 0);
