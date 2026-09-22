<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🧠 Algorithms & Programming Logic | Fatec

  ### **Practical Coursework, Data Structures, and Algorithmic Foundations in TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Fatec Taubaté](https://img.shields.io/badge/Fatec-Taubaté-B22222?style=for-the-badge)](https://fatectaubate.edu.br/)
  [![Centro Paula Souza](https://img.shields.io/badge/CEETEPS-CPS-003366?style=for-the-badge)](https://www.cps.sp.gov.br/)

</div>

---

## 🎯 About the Course

In this repository, I organize my practical exercises, programming logic coursework, and computational thinking for the **Algorithms and Programming Logic (ALP)** course in the **Systems Analysis and Development (ADS)** degree at **Fatec Taubaté (CEETEPS)**, taught by **Prof. Robson Dagmar Zanato Pedroso**.

- **Workload:** 80 hours total (20 weekly sessions).
- **Core Technology:** [TypeScript](https://www.typescriptlang.org/) on the [Node.js](https://nodejs.org/) runtime.
- **Objective:** Solve programming logic problems with mathematical discipline, ISO/ANSI flowchart modeling, and RAM desk checking.

### Core Focus Areas
- **The 3-Phase Variable Lifecycle:** Enforcing clear separation between Declaration, Initialization, and Assignment/Processing.
- **Static Typing & Safety:** Eliminating runtime errors with strict TypeScript compiler checks and zero `any`.
- **Flowchart Modeling & Desk Checking:** Mapping algorithm branching into ISO/ANSI diagrams and simulating step-by-step RAM memory transitions.
- **Modular Code & Clean Code:** Building readable, maintainable logic with descriptive naming.

---

## 🗺️ Course Roadmap & Syllabus

| Class | Topic | Status | Repository Module |
| :---: | :--- | :---: | :--- |
| 01 | Foundations of algorithms, logic, and computational thinking | ✅ Done | Foundations |
| 02 | Algorithmic representation: narrative, pseudocode, and flowcharts | ✅ Done | [`src/01-average-student-grade/`](src/01-average-student-grade/) |
| 03 | Data types, variables, constants, and basic I/O | ✅ Done | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/), [`src/04-boolean-logic/`](src/04-boolean-logic/) |
| 04 | Operators, expressions, and sequential algorithms | ✅ Done | [`src/02-cart-final-value/`](src/02-cart-final-value/), [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/), [`src/06-nested-grades-report/`](src/06-nested-grades-report/) |
| 05 | Decision structures & repetition with `for` loop | ✅ Done | [`src/07-multiplication-table/`](src/07-multiplication-table/), [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) |
| 06 | Application of conditional structures and boundary validation | ⏳ Upcoming | Scheduled |
| 07 | Chained decisions, multiple alternatives, and input validation | ⏳ Upcoming | Scheduled |
| 08 | General Review for P1 Assessment | ⏳ Upcoming | Scheduled |
| 09 | 1ª Avaliação Presencial (P1) | ⏳ Upcoming | Scheduled |
| 10 | Foundations of repetition structures (`while`, accumulators) | ⏳ Upcoming | Scheduled |
| 11 | Conditioned repetition loops | ⏳ Upcoming | Scheduled |
| 12 | Counted repetition and iterative structure selection | ⏳ Upcoming | Scheduled |
| 13 | Integration of control flow structures | ⏳ Upcoming | Scheduled |
| 14 | Functions, procedures, and program modularization | ⏳ Upcoming | Scheduled |
| 15 | Practical application of functions and procedures | ⏳ Upcoming | Scheduled |
| 16 | Introduction to recursion | ⏳ Upcoming | Scheduled |
| 17 | Algorithm debugging, testing, and validation | ⏳ Upcoming | Scheduled |
| 18 | General Review for P2 Assessment | ⏳ Upcoming | Scheduled |
| 19 | 2ª Avaliação Presencial (P2) | ⏳ Upcoming | Scheduled |
| 20 | Course wrap-up and final grades | ⏳ Upcoming | Scheduled |

> [!NOTE] 💡 Asynchronous Makeup Material (EAD)
> Complementary study modules provided by the professor in asynchronous format.

---

## 📝 Exercises Index

| # | Exercise | Code & Documentation | Core Concepts |
| :-: | :--- | :--- | :--- |
| 00 | **Consolidated Menu** | [`src/00-consolidated-menu/`](src/00-consolidated-menu/) | Interactive console menu uniting all coursework exercises into a single program. |
| 01 | **Student Grade Average** | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Static typing (`number`), arithmetic operators, precedence parentheses. |
| 02 | **Shopping Cart Calculation** | [`src/02-cart-final-value/`](src/02-cart-final-value/) | Data modeling (`interface`), typed arrays (`Array`), accumulator variables. |
| 03 | **Sum of Two Numbers** | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/) | Variable lifecycle in 3 phases (Declaration $\rightarrow$ Initialization $\rightarrow$ Assignment). |
| 04 | **Boolean Logic & Operators** | [`src/04-boolean-logic/`](src/04-boolean-logic/) | Boolean truth evaluation, short-circuit operators (`&&`, `\|\|`, `!`). |
| 05 | **Grade Approval Flow** | [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/) | Compound conditionals (`if`/`else`), ISO/ANSI flowcharts, RAM desk checking. |
| 06 | **Nested Grades Report** | [`src/06-nested-grades-report/`](src/06-nested-grades-report/) | Nested `interfaces`, 2D loops, `.toFixed(2)` formatting *(My prior self-study)*. |
| 07 | **Multiplication Table** | [`src/07-multiplication-table/`](src/07-multiplication-table/) | Counted `for` loop, terminal input, comparing professor's direct calculation with my intermediate variable approach. |
| 08 | **Factorial Calculator** | [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) | Multiplicative accumulator ($n!$), comparing the professor's descending method with my two approaches developed in class. |

---

## 📂 Project Structure

```text
.
├── .agent/
│   └── skills/
│       ├── fatec-alp-coursework/     # Skill for processing ALP coursework notes and audit
│       │   ├── SKILL.md
│       │   ├── scripts/              # recon_alp_class.py and validate_alp_coursework.py
│       │   └── references/           # Syllabus and coursework coding standards
│       └── fatec-alp-commits/        # Skill for semantic Conventional Commits validation
│           ├── SKILL.md
│           └── scripts/              # validate_alp_commit.py
│
├── src/
│   ├── utils/                        # Shared utilities (safe interactive terminal input)
│   ├── 00-consolidated-menu/         # Interactive coursework CLI runner
│   ├── 01-average-student-grade/
│   ├── 02-cart-final-value/
│   ├── 03-two-numbers-sum/
│   ├── 04-boolean-logic/
│   ├── 05-grade-approval-flow/
│   ├── 06-nested-grades-report/
│   ├── 07-multiplication-table/
│   └── 08-factorial-accumulator/
│
├── package.json
├── tsconfig.json
├── README.md                         # English documentation
└── README.pt-BR.md                   # Portuguese documentation
```

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended).

### Interactive Consolidated Menu (Recommended)
Run all coursework algorithms interactively from a single terminal interface:

```bash
npm start
```

### Direct Execution with `tsx`
Run any individual exercise directly:

```bash
# Exercise 07: Multiplication Table
npx tsx src/07-multiplication-table/MultiplicationTable.ts

# Exercise 08: Factorial Calculator
npx tsx src/08-factorial-accumulator/FactorialAccumulator.ts
```

### Code Quality & Verification

```bash
# Run strict TypeScript typechecking
npm run typecheck

# Run coursework audit
npm run audit
```

---

<div align="center">
  Developed by <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>