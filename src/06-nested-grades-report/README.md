<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 📑 Academic Grades Report with Nested Interfaces (`NestedGradesReport.ts`)

</div>

---

## 🎯 Problem Statement

Model and generate an academic performance report for multiple students across multiple courses using nested TypeScript interfaces, dynamic accumulator loops, numeric decimal formatting, and multi-line template literals.

---

## 💻 Source Code

```typescript
// PROBLEM
// Generate an academic report for multiple students across multiple subjects using nested interfaces,
// calculating individual averages with toFixed(2) and displaying formatted results.

interface SubjectGrade {
    subject: string;
    grade: number;
}

interface Student {
    name: string;
    grades: SubjectGrade[];
}

const students: Student[] = [
    {
        name: "John",
        grades: [
            { subject: "Algorithms and Programming Logic", grade: 10 },
            { subject: "Software Engineering I", grade: 9 },
            { subject: "Database Systems", grade: 8.5 },
            { subject: "Computer Architecture", grade: 7.5 }
        ]
    },
    {
        name: "Sarah",
        grades: [
            { subject: "Algorithms and Programming Logic", grade: 8.5 },
            { subject: "Software Engineering I", grade: 10 },
            { subject: "Database Systems", grade: 9.0 },
            { subject: "Data Structures", grade: 9.5 }
        ]
    }
];

for (let i: number = 0; i < students.length; i++) {
    let totalPoints: number = 0;

    // 1. Sum grades for the current student
    for (let j: number = 0; j < students[i].grades.length; j++) {
        totalPoints += students[i].grades[j].grade;
    }

    // 2. Calculate average
    const average: number = totalPoints / students[i].grades.length;

    // 3. Assemble report header with template literals
    let report: string = `Name: ${students[i].name}\nFinal Average: ${average.toFixed(2)}\nSubjects and Grades:`;

    // 4. Append each subject grade
    for (let j: number = 0; j < students[i].grades.length; j++) {
        report += `\n - ${students[i].grades[j].subject}: ${students[i].grades[j].grade}`;
    }

    // 5. Output report
    console.log(report);
    console.log("-----------------------------------");
}
```

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
