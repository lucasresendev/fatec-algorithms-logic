<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 📑 Relatório de Notas com Interfaces Aninhadas (`NestedGradesReport.ts`)

</div>

---

## 🎯 Enunciado do Problema

Modelar e gerar um relatório acadêmico para múltiplos alunos e suas respectivas disciplinas utilizando interfaces TypeScript aninhadas, repetições de acumulação aninhadas, formatação decimal e template literals em múltiplas linhas.

> [!NOTE] 💡 Meu Estudo Prévio (Prática Pessoal)
> Desenvolvi este exercício por conta própria usando conhecimentos prévios. Em aula, o professor ainda não tinha passado interfaces, arrays ou repetições aninhadas.

---

## 💻 Código Fonte

A implementação está disponível diretamente em [`NestedGradesReport.ts`](NestedGradesReport.ts).

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
- **Repetições Aninhadas (`for` duplo):** O loop externo percorre cada estudante, enquanto as repetições internas acumulam notas e formatam linhas da tabela.
- **Formatação Numérica (`.toFixed(2)`):** Padronização de casas decimais para valores monetários ou notas escolares.
- **Template Literals (Interpolação com Crases `` ` ``):** Construção de textos complexos e legíveis com `${variavel}` e suporte nativo a quebra de linhas.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/06-nested-grades-report/NestedGradesReport.ts
```
