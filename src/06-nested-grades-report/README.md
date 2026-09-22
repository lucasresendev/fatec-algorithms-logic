<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 📑 Academic Grades Report with Nested Interfaces (`NestedGradesReport.ts`)

</div>

---

## 🎯 Problem Statement

Model and generate an academic performance report for multiple students across multiple courses using nested TypeScript interfaces, dynamic accumulator loops, numeric decimal formatting, and multi-line template literals.

> [!NOTE] 💡 Personal Self-Study
> I developed this exercise on my own based on prior personal studies. In class, the professor hadn't introduced interfaces, typed arrays, or nested loops yet.

---

## 💻 Source Code

The implementation is available directly in [`NestedGradesReport.ts`](NestedGradesReport.ts).

---

## 🖥️ Terminal Output

```text
Name: John
Final Average: 8.75
Subjects and Grades:
 - Algorithms and Programming Logic: 10
 - Software Engineering I: 9
 - Database Systems: 8.5
 - Computer Architecture: 7.5
-----------------------------------
Name: Sarah
Final Average: 9.25
Subjects and Grades:
 - Algorithms and Programming Logic: 8.5
 - Software Engineering I: 10
 - Database Systems: 9
 - Data Structures: 9.5
-----------------------------------
```

---

## 💡 Key Concepts Applied

- **Interface Composition:** Nesting `SubjectGrade[]` within the `Student` interface for structured relational data modeling in TypeScript.
- **Nested `for` Loops:** Outer loop iterates over each student; inner loops traverse individual course grades for accumulation and formatting.
- **Decimal Precision (`.toFixed(2)`):** Formatting floating-point numbers to two decimal places for consistent academic reports.
- **Template Literals (Backticks `` ` ``):** Interpolating variables (`${variable}`) and formatting multi-line output cleanly without manual concatenation operators.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```
