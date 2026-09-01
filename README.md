<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🧠 Algorithms & Programming Logic | Fatec

  ### **Practical Exercises, Data Structures, and Fundamentals in TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

---

## 🎯 About

Coursework and practical coding exercises developed for the **Algorithms and Programming Logic** course in the **Systems Analysis and Development (ADS)** program at **Fatec Taubaté**.

All algorithms are implemented in **TypeScript** on the **Node.js** runtime, focusing on:
- **Static Typing & Safety**: Preventing runtime errors with strict type definitions.
- **Data Modeling**: Structuring domain models using `interfaces`.
- **Clean Code**: Readable, semantic, and maintainable logic.

---

## 📝 Exercises Index

| # | Exercise | Code & Documentation | Core Concepts |
| :-: | :--- | :--- | :--- |
| 01 | **Student Grade Average** | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Static typing (`number`), arithmetic operators, precedence. |
| 02 | **Shopping Cart Calculation** | [`src/02-cart-final-value/`](src/02-cart-final-value/) | Data modeling (`interface`), typed arrays (`Array`), `for` loop, accumulators. |
| 03 | **Sum of Two Numbers** | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/) | Variable lifecycle (Declaration, Initialization, Assignment), Clean Code. |
| 04 | **Boolean Logic & Operators** | [`src/04-boolean-logic/`](src/04-boolean-logic/) | Static typing (`boolean`), logical operators (`&&`, `\|\|`, `!`), inline evaluation. |
| 05 | **Grade Approval & Decision Flow** | [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/) | Control flow (`if`/`else`), ISO/ANSI flowchart, desk checking (RAM trace table), Clean Code. |
| 06 | **Nested Grades Report** | [`src/06-nested-grades-report/`](src/06-nested-grades-report/) | Nested `interfaces`, 2D `for` loops, `.toFixed(2)` precision, template literals. |

---

## 📂 Project Structure

```text
.
├── src/
│   ├── 01-average-student-grade/
│   │   ├── AverageStudentGrade.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   ├── 02-cart-final-value/
│   │   ├── CartFinalValue.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   ├── 03-two-numbers-sum/
│   │   ├── TwoNumbersSum.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   ├── 04-boolean-logic/
│   │   ├── BooleanLogic.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   ├── 05-grade-approval-flow/
│   │   ├── GradeApprovalFlow.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   └── 06-nested-grades-report/
│       ├── NestedGradesReport.ts
│       ├── README.md
│       └── README.pt-BR.md
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md           # English documentation
└── README.pt-BR.md     # Portuguese documentation
```

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed.

### Direct Execution with `tsx` (Recommended)
Run any exercise directly from the terminal without manual compilation:

```bash
# Exercise 1: Student Grade Average
npx tsx src/01-average-student-grade/AverageStudentGrade.ts

# Exercise 2: Shopping Cart
npx tsx src/02-cart-final-value/CartFinalValue.ts

# Exercise 3: Sum of Two Numbers
npx tsx src/03-two-numbers-sum/TwoNumbersSum.ts

# Exercise 4: Boolean Logic
npx tsx src/04-boolean-logic/BooleanLogic.ts

# Exercise 5: Grade Approval & Decision Flow
npx tsx src/05-grade-approval-flow/GradeApprovalFlow.ts

# Exercise 6: Nested Grades Report
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```

> 💡 **Traditional Compilation:** To compile all files to JavaScript, run `npx tsc` (output generated in the `dist/` directory).

---

## 🛠️ Technologies

- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Tooling:** `tsx` / `tsc`

---

<div align="center">
  Developed by <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>