<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 📑 Relatório de Notas com Interfaces Aninhadas (`NestedGradesReport.ts`)

</div>

---

## 🎯 Enunciado do Problema

Modelar e gerar um relatório acadêmico para múltiplos alunos e suas respectivas disciplinas utilizando interfaces TypeScript aninhadas, laços de acumulação aninhados, formatação decimal e template literals em múltiplas linhas.

---

## 💻 Código Fonte

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

## 🖥️ Saída no Terminal

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

## 💡 Conceitos Principais Aplicados

- **Composição de Interfaces:** Aninhamento de um array `SubjectGrade[]` dentro do tipo `Student`, permitindo modelagem de dados estruturada e tipada.
- **Laços Aninhados (`for` duplo):** O laço externo percorre cada estudante, enquanto os laços internos acumulam notas e formatam linhas da tabela.
- **Formatação Numérica (`.toFixed(2)`):** Padronização de casas decimais para valores monetários ou notas escolares.
- **Template Literals (Interpolação com Crases `` ` ``):** Construção de textos complexos e legíveis com `${variavel}` e suporte nativo a quebra de linhas.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```
