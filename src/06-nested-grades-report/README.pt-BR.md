<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 📑 Relatório de Notas Aninhadas (`NestedGradesReport.ts`)

</div>

> **Origem:** Aula 04 (Extensão de Estudo Próprio)  
> **Tópico:** Interfaces Aninhadas, Repetições `for` Aninhadas, `.toFixed(2)` e Template Strings

---

## 🎯 Enunciado do Problema

Neste exercício extra, montei um boletim para vários alunos e várias matérias usando interfaces aninhadas em TypeScript, repetições `for` dentro de `for`, formatação com `.toFixed(2)` e template strings de várias linhas.

> [!NOTE] 💡 Estudo Próprio
> Fiz esse exercício por conta própria com base no que eu já vinha estudando por fora. Nessa altura do semestre, o professor ainda não tinha apresentado interfaces, arrays tipados nem repetições aninhadas.

---

## 💻 Código-Fonte

O código completo está em [NestedGradesReport.ts](NestedGradesReport.ts).

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

## 💡 Principais Conceitos Aplicados

- **Interfaces Aninhadas:** Colocar `SubjectGrade[]` dentro da interface `Student` para que cada aluno carregue sua própria lista de matérias e notas.
- **Repetições `for` Aninhadas:** O `for` externo percorre cada aluno e os internos somam e listam as notas dele.
- **Formatação Decimal (`.toFixed(2)`):** Fixar duas casas decimais ao exibir a média final.
- **Template Strings:** Usar crases e `${variavel}` para montar textos de várias linhas sem concatenar tudo com `+`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```
