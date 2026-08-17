<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🎓 Média de Notas do Estudante (`AverageStudentGrade.ts`)

</div>

---

## 🎯 Enunciado

Calcular a média aritmética simples a partir de três notas de um estudante utilizando tipagem estática e operadores aritméticos.

---

## 💻 Código Fonte

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

## 🖥️ Saída no Terminal

```text
6.666666666666667
```

---

## 💡 Conceitos Aplicados

- **Tipagem Estática (`number`):** Declaração explícita de variáveis numéricas em TypeScript.
- **Precedência de Operadores:** Uso de parênteses `(firstGrade + secondGrade + thirdGrade)` para priorizar a soma antes da divisão por 3.
- **Saída de Dados:** Exibição do valor calculado no terminal via `console.log()`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/01-average-student-grade/AverageStudentGrade.ts
```
