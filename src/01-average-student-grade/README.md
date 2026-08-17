<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🎓 Student Grade Average (`AverageStudentGrade.ts`)

</div>

---

## 🎯 Problem Statement

Calculate the simple arithmetic average from three student exam grades using static typing and arithmetic operators.

---

## 💻 Source Code

```typescript
let firstGrade: number;
let secondGrade: number;
let thirdGrade: number;
let averageStudentGrade: number;

firstGrade = 7;
secondGrade = 8;
thirdGrade = 5;
averageStudentGrade = (firstGrade + secondGrade + thirdGrade) / 3;

console.log(averageStudentGrade);
```

---

## 🖥️ Terminal Output

```text
6.666666666666667
```

---

## 💡 Key Concepts Applied

- **Static Typing (`number`):** Explicit declaration of numerical variables in TypeScript.
- **Operator Precedence:** Using parentheses `(firstGrade + secondGrade + thirdGrade)` to force addition before the division by 3.
- **Output:** Printing calculated values to the terminal with `console.log()`.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/01-average-student-grade/AverageStudentGrade.ts
```
