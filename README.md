<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🧠 Algorithms and Programming Logic | Fatec

  ### **My Coursework, Class Exercises, and Algorithms in TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Fatec Taubaté](https://img.shields.io/badge/Fatec-Taubaté-B22222?style=for-the-badge)](https://fatectaubate.edu.br/)
  [![Centro Paula Souza](https://img.shields.io/badge/CEETEPS-CPS-003366?style=for-the-badge)](https://www.cps.sp.gov.br/)

</div>

---

## 🎯 About This Repository

This repository holds all the TypeScript programs and practical exercises I wrote during the **Algorithms and Programming Logic** course in my 1st semester of **Systems Analysis and Development (ADS)** at **Fatec Taubaté (CEETEPS)**.

Throughout the semester, I used these files both to practice the exercises from our weekly classes (flowcharts, desk checking, conditionals, `for` loops, typed arrays, and functions) and to test extra ideas on my own (like nested interfaces and dynamic user input). I write all source code, prompts, and comments in English (`README.md`) and keep full Portuguese translations (`README.pt-BR.md`) alongside every exercise.

- **Course:** Algorithms and Programming Logic (1st Semester, ADS).
- **Professor:** Robson Dagmar Zanato Pedroso.
- **Workload:** 80 hours total (weekly Monday night sessions).
- **Core Stack:** [TypeScript](https://www.typescriptlang.org/) on [Node.js](https://nodejs.org/) with `prompt-sync` for terminal input.

---

## 🗺️ Course Syllabus and Class Roadmap

| Class | Topic Covered in Class | Status | Exercises in This Repo |
| :---: | :--- | :---: | :--- |
| 01 | Foundations of algorithms, logic, and computational thinking | ✅ Done | Initial concepts |
| 02 | Algorithmic representation: narrative, pseudocode, and flowcharts | ✅ Done | [`src/01-average-student-grade/`](src/01-average-student-grade/) |
| 03 | Data types, variables, 3-phase lifecycle, and boolean operators | ✅ Done | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/), [`src/04-boolean-logic/`](src/04-boolean-logic/) |
| 04 | Conditional structures (`if`/`else`), ISO/ANSI flowcharts, and desk checking | ✅ Done | [`src/02-cart-final-value/`](src/02-cart-final-value/), [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/), [`src/06-nested-grades-report/`](src/06-nested-grades-report/) |
| 05 | `for` loops, terminal input (`prompt-sync`), and intro to functions | ✅ Done | [`src/07-multiplication-table/`](src/07-multiplication-table/), [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) |
| 06 | `for` loop practice, modulo (`%`), variable scope, and `break` | ✅ Done | [`src/09-four-grades-average/`](src/09-four-grades-average/), [`src/10-password-attempts/`](src/10-password-attempts/) |
| P1 | **1st Assessment (P1):** Sequential logic, conditionals, flowcharts, and `for` loops (05/10/2026) | ✅ Done | In-class exam |
| 07 | Vectors, matrices, and array methods (`push`, `pop`, `shift`, `unshift`, `.length`) | ✅ Done | [`src/11-array-methods-demo/`](src/11-array-methods-demo/), [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/) |
| 08 | Array manipulation and linear search for highest and lowest values | ✅ Done | [`src/13-sales-extremes-analysis/`](src/13-sales-extremes-analysis/) |
| 09 | Functions, typed parameters, return types (`void`, `boolean`), scope, and arrays | ✅ Done | [`src/14-functions-practice/`](src/14-functions-practice/), [`src/15-modular-grades-average/`](src/15-modular-grades-average/) |
| 10+ | Remaining topics, review, and **2nd Assessment (P2)** (14/12/2026) | ⏳ Upcoming | In progress |

> [!NOTE] 💡 Asynchronous Makeup Activities
> On holidays and professor absences during the semester, we also received asynchronous makeup handouts covering algorithmic representation, conditionals, repetition (`while`), and 1D arrays.

---

## 🔄 How Exercises Evolved Across Classes

Just like in other programming courses, the professor kept bringing back the **Student Grade Average** problem so we could rewrite it with each new concept we learned:

### Student Grade Average Progression
- **Class 02 (Fixed Variables):** Started with three hardcoded variables (`firstGrade`, `secondGrade`, `thirdGrade`) in [`src/01-average-student-grade/`](src/01-average-student-grade/).
- **Class 04 (Conditionals and Flowchart):** Added `if`/`else` rules for approval, probation, and failure with a full ISO/ANSI flowchart and desk check in [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/).
- **Class 06 (`for` Loop and Accumulator):** Replaced separate grade variables with one reused input variable and an accumulator (`numberSum += inputNumber`) plus console desk-check output in [`src/09-four-grades-average/`](src/09-four-grades-average/).
- **Class 07 (Dynamic Typed Array):** Stored `N` grades chosen by the user in `grades: number[]`, splitting reading and summing into two separate `for` loops in [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/).
- **Class 09 (Modular Function):** Moved the calculation into a reusable typed function `averageGrade(gradesList: number[]): number` with an empty-array guard clause in [`src/15-modular-grades-average/`](src/15-modular-grades-average/).

---

## 📝 Exercises Index

| # | Exercise | Class | Code and Documentation | Key Concepts |
| :-: | :--- | :---: | :--- | :--- |
| 00 | **Consolidated Menu** | 02 to 09 | [`src/00-consolidated-menu/`](src/00-consolidated-menu/) | Interactive CLI menu bringing all 15 coursework exercises into one `do...while` loop. |
| 01 | **Student Grade Average** | Class 02 | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Explicit `number` typing, arithmetic precedence parentheses, `console.log()`. |
| 02 | **Shopping Cart Calculation** | Class 04 | [`src/02-cart-final-value/`](src/02-cart-final-value/) | `interface` modeling, typed object array (`CartItem[]`), price accumulator. |
| 03 | **Sum of Two Numbers** | Class 03 | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/) | 3-phase variable lifecycle (Declaration -> Initialization -> Assignment). |
| 04 | **Boolean Logic and Operators** | Class 03 | [`src/04-boolean-logic/`](src/04-boolean-logic/) | `boolean` values and truth evaluation with `&&`, `\|\|`, and `!`. |
| 05 | **Grade Approval Flow** | Class 04 | [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/) | Compound `if`/`else` branches, ISO/ANSI flowchart, RAM desk checking. |
| 06 | **Nested Grades Report** | Class 04 | [`src/06-nested-grades-report/`](src/06-nested-grades-report/) | Nested interfaces, 2D `for` loops, `.toFixed(2)`, template strings *(My self-study)*. |
| 07 | **Multiplication Table** | Class 05 | [`src/07-multiplication-table/`](src/07-multiplication-table/) | Counted `for` loop, `prompt-sync` input, direct calculation vs. intermediate variable. |
| 08 | **Factorial Calculator** | Class 05 | [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) | Multiplicative accumulator (`n!`), comparing descending, ascending, and offset `for` loops. |
| 09 | **Average of 4 Grades** | Class 06 | [`src/09-four-grades-average/`](src/09-four-grades-average/) | `for` loop accumulator, block vs. outer scope, optional console desk-check mode. |
| 10 | **Password Check (3 Attempts)** | Class 06 | [`src/10-password-attempts/`](src/10-password-attempts/) | Early loop exit with `break`, countdown of remaining attempts, `isAuthenticated` flag. |
| 11 | **Array Indexing and Methods** | Class 07 | [`src/11-array-methods-demo/`](src/11-array-methods-demo/) | Zero-based indexing, `.length`, `pop()`, `unshift()`, `push()`, `shift()`, size-agnostic loop. |
| 12 | **Dynamic Grades Average** | Class 07 | [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/) | Typed `number[]` array sized by user input, separated collection and sum loops. |
| 13 | **Sales Extremes and Average** | Class 08 | [`src/13-sales-extremes-analysis/`](src/13-sales-extremes-analysis/) | Default 7-sale dataset or custom input, single-pass sum, average, highest, and lowest scan. |
| 14 | **TypeScript Functions Practice** | Class 09 | [`src/14-functions-practice/`](src/14-functions-practice/) | Typed signatures, local vs. global scope, `return` exit, `void` and `boolean` functions. |
| 15 | **Modular Grades Average** | Class 09 | [`src/15-modular-grades-average/`](src/15-modular-grades-average/) | Passing `number[]` to `averageGrade()`, empty-array guard clause against `NaN`. |

---

## 📂 Project Structure

```text
.
├── src/
│   ├── 00-consolidated-menu/
│   │   ├── consolidated_menu.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 01-average-student-grade/
│   │   ├── AverageStudentGrade.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 02-cart-final-value/
│   │   ├── CartFinalValue.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 03-two-numbers-sum/
│   │   ├── TwoNumbersSum.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 04-boolean-logic/
│   │   ├── BooleanLogic.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 05-grade-approval-flow/
│   │   ├── GradeApprovalFlow.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 06-nested-grades-report/
│   │   ├── NestedGradesReport.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 07-multiplication-table/
│   │   ├── MultiplicationTable.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 08-factorial-accumulator/
│   │   ├── FactorialAccumulator.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 09-four-grades-average/
│   │   ├── FourGradesAverage.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 10-password-attempts/
│   │   ├── PasswordAttempts.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 11-array-methods-demo/
│   │   ├── ArrayMethodsDemo.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 12-dynamic-grades-average/
│   │   ├── DynamicGradesAverage.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 13-sales-extremes-analysis/
│   │   ├── SalesExtremesAnalysis.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 14-functions-practice/
│   │   ├── FunctionsPractice.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   └── 15-modular-grades-average/
│       ├── ModularGradesAverage.ts
│       ├── README.md
│       └── README.pt-BR.md
│
├── package.json
├── tsconfig.json
├── README.md           # English documentation
└── README.pt-BR.md     # Portuguese documentation
```

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v20+ recommended).

### Setup and Interactive Menu (Recommended)
Install dependencies once and run the consolidated menu from the root folder:

```bash
npm install
npm start
```

### Running Individual Exercises with `tsx`

```bash
# Exercise 01: Student Grade Average
npx tsx src/01-average-student-grade/AverageStudentGrade.ts

# Exercise 02: Shopping Cart Calculation
npx tsx src/02-cart-final-value/CartFinalValue.ts

# Exercise 03: Sum of Two Numbers
npx tsx src/03-two-numbers-sum/TwoNumbersSum.ts

# Exercise 04: Boolean Logic and Operators
npx tsx src/04-boolean-logic/BooleanLogic.ts

# Exercise 05: Grade Approval Flow
npx tsx src/05-grade-approval-flow/GradeApprovalFlow.ts

# Exercise 06: Nested Grades Report
npx tsx src/06-nested-grades-report/NestedGradesReport.ts

# Exercise 07: Multiplication Table
npx tsx src/07-multiplication-table/MultiplicationTable.ts

# Exercise 08: Factorial Calculator
npx tsx src/08-factorial-accumulator/FactorialAccumulator.ts

# Exercise 09: Average of 4 Grades
npx tsx src/09-four-grades-average/FourGradesAverage.ts

# Exercise 10: Password Check (3 Attempts)
npx tsx src/10-password-attempts/PasswordAttempts.ts

# Exercise 11: Array Indexing and Core Methods
npx tsx src/11-array-methods-demo/ArrayMethodsDemo.ts

# Exercise 12: Dynamic Grades Average
npx tsx src/12-dynamic-grades-average/DynamicGradesAverage.ts

# Exercise 13: Sales Extremes and Average
npx tsx src/13-sales-extremes-analysis/SalesExtremesAnalysis.ts

# Exercise 14: TypeScript Functions Practice
npx tsx src/14-functions-practice/FunctionsPractice.ts

# Exercise 15: Modular Grades Average
npx tsx src/15-modular-grades-average/ModularGradesAverage.ts
```

### Type Checking

```bash
npm run typecheck
```

---

<div align="center">
  Developed by <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>
