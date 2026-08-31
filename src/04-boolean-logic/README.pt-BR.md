<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # ⚡ Lógica Booleana & Operadores (`BooleanLogic.ts`)

</div>

---

## 🎯 Enunciado

Avaliar e exibir os resultados de operações lógicas fundamentais (E, OU, NÃO) utilizando variáveis booleanas com tipagem estática em TypeScript.

---

## 💻 Código Fonte

```typescript
// PROBLEM
// Demonstrate boolean algebra and logical operators (AND, OR, NOT) using boolean variables.

let a: boolean;
let b: boolean;
let c: boolean;

a = false;
b = true;
c = true;

console.log("'a' and 'b' are true? " + (a && b));
console.log("'b' and 'c' are true? " + (b && c));
console.log("'a' or 'b' is true? " + (a || b));
console.log("If 'b' is inverted, 'a' or 'b' is true? " + (a || !b));
```

---

## 🖥️ Saída no Terminal

```text
'a' and 'b' are true? false
'b' and 'c' are true? true
'a' or 'b' is true? true
If 'b' is inverted, 'a' or 'b' is true? false
```

---

## 💡 Conceitos Aplicados

- **Tipagem Estática (`boolean`):** Declaração explícita de variáveis lógicas primitivas (`true` ou `false`).
- **Operador de Conjunção (`&&` / E):** Retorna `true` apenas se ambas as expressões forem verdadeiras.
- **Operador de Disjunção (`||` / OU):** Retorna `true` se pelo menos uma das expressões for verdadeira.
- **Operador de Negação (`!` / NÃO):** Inverte o valor lógico da variável (`!b` inverte de `true` para `false`).
- **Avaliação de Expressões em Saída:** Execução de operações lógicas entre parênteses diretamente na concatenação do `console.log()`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/04-boolean-logic/BooleanLogic.ts
```
