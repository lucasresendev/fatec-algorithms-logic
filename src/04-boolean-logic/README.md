<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # ⚡ Boolean Logic & Operators (`BooleanLogic.ts`)

</div>

---

## 🎯 Problem Statement

Evaluate and print the truth values of logical operations (AND, OR, NOT) using boolean variables in TypeScript.

---

## 💻 Source Code

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

## 🖥️ Terminal Output

```text
'a' and 'b' are true? false
'b' and 'c' are true? true
'a' or 'b' is true? true
If 'b' is inverted, 'a' or 'b' is true? false
```

---

## 💡 Key Concepts Applied

- **Static Typing (`boolean`):** Explicit declaration of boolean primitive variables (`true` or `false`).
- **Logical Conjunction (`&&` - AND):** Evaluates to `true` only if both expressions evaluate to `true`.
- **Logical Disjunction (`||` - OR):** Evaluates to `true` if at least one expression evaluates to `true`.
- **Logical Negation (`!` - NOT):** Inverts the truth value of a variable (`!b` inverts `true` to `false`).
- **Inline Expression Evaluation:** Computing boolean operations inside parentheses directly within `console.log()` output.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/04-boolean-logic/BooleanLogic.ts
```
