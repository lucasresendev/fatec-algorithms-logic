<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # ➕ Soma de Dois Números (`TwoNumbersSum.ts`)

</div>

---

## 🎯 Enunciado

Demonstrar as três etapas do ciclo de vida de variáveis (Declaração, Inicialização e Atribuição) e a aplicação de boas práticas de Clean Code no cálculo da soma entre dois números em TypeScript.

---

## 💻 Código Fonte

```typescript
// PROBLEM
// Demonstrate the variable lifecycle (Declaration, Initialization, Assignment) and Clean Code naming with a two-number sum.

let firstNumber: number;
let secondNumber: number;
let sumResult: number; // Declaration

firstNumber = 0;
secondNumber = 0;
sumResult = 0; // Initialization

firstNumber = 7;
secondNumber = 9; // Assignment
sumResult = firstNumber + secondNumber; // Calculation

console.log(sumResult); // Output
```

---

## 🖥️ Saída no Terminal

```text
16
```

---

## 💡 Conceitos Aplicados

- **Ciclo de Vida das Variáveis:**
  - **Declaração:** Definição do identificador e do tipo estático (`number`).
  - **Inicialização:** Atribuição de valor inicial padrão (`0`) para evitar estados indefinidos em memória.
  - **Atribuição:** Carga dos valores a serem processados (`7` e `9`).
- **Nomenclatura Semântica (Clean Code):** Uso de nomes claros e descritivos (`firstNumber`, `secondNumber`, `sumResult`) em substituição a siglas genéricas (`n1`, `n2`, `n3`).
- **Operação Aritmética e Saída:** Soma dos valores com o operador `+` e exibição do resultado no terminal via `console.log()`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/03-two-numbers-sum/TwoNumbersSum.ts
```
