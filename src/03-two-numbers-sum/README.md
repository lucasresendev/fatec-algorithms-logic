<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # ➕ Sum of Two Numbers (`TwoNumbersSum.ts`)

</div>

---

## 🎯 Problem Statement

Demonstrate the three stages of the variable lifecycle (Declaration, Initialization, and Assignment) and the application of Clean Code naming conventions while calculating the sum of two numbers in TypeScript.

---

## 💻 Source Code

```typescript
// PROBLEM
// Demonstrate the variable lifecycle (Declaration, Initialization, Assignment) and Clean Code naming with a two-number sum.

let firstNumber: number;
let secondNumber: number;
let sumResult: number; // Declaration

firstNumber = 0;
secondNumber = 0;
sumResult = 0; // Initialization

firstNumber = 7;
secondNumber = 9; // Assignment
sumResult = firstNumber + secondNumber; // Calculation

console.log(sumResult); // Output
```

---

## 🖥️ Terminal Output

```text
16
```

---

## 💡 Key Concepts Applied

- **Variable Lifecycle:**
  - **Declaration:** Defining the variable identifier and static type (`number`).
  - **Initialization:** Setting a default initial value (`0`) to avoid undefined states in memory.
  - **Assignment:** Assigning values to be calculated (`7` and `9`).
- **Semantic Naming (Clean Code):** Using clear, descriptive variable names (`firstNumber`, `secondNumber`, `sumResult`) instead of cryptic shorthands (`n1`, `n2`, `n3`).
- **Arithmetic Operation & Output:** Computing the addition using the `+` operator and printing the result with `console.log()`.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/03-two-numbers-sum/TwoNumbersSum.ts
```
