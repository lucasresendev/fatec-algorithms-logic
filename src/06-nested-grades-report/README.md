<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 📑 Nested Grades Report (`NestedGradesReport.ts`)

</div>

> **Origin:** Class 04 (Personal Self-Study Extension)  
> **Topic:** Nested `interface` Types, 2D `for` Loops, `.toFixed(2)`, and Template Literals

---

## 🎯 Problem Statement

In this extra exercise, I built a student report covering multiple students and multiple subjects using nested TypeScript interfaces, nested `for` loops, `.toFixed(2)` formatting, and multi-line template strings.

> [!NOTE] 💡 Personal Self-Study
> I wrote this exercise on my own based on things I had already been studying outside class. At this point in the semester, the professor had not introduced interfaces, typed arrays, or nested loops yet.

---

## 💻 Source Code

The full implementation is available in [NestedGradesReport.ts](NestedGradesReport.ts).

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

- **Nested Interfaces:** Putting `SubjectGrade[]` inside the `Student` interface so every student carries their own list of subjects and grades.
- **Nested `for` Loops:** The outer loop walks through each student while the inner loops sum and print that student's grades.
- **Decimal Formatting (`.toFixed(2)`):** Rounding averages to two decimal places for clean terminal output.
- **Template Literals:** Using backticks and `${variable}` to build multi-line text without long `+` chains.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```
