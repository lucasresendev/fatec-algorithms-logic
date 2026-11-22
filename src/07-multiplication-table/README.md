<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # ✖️ Multiplication Table with `for` (`MultiplicationTable.ts`)

</div>

> **Origin:** Class 05 (`for` Loop, Terminal Input, and Functions Intro)  
> **Topic:** Counted `for` Loop, `prompt-sync` Input, and Direct vs. Intermediate Calculation

---

## 🎯 Problem Statement

In this exercise, I read an integer from the terminal and printed its multiplication table from 0 to 10 using a `for` loop. I kept both ways we saw in class: option 1 multiplies inline inside `console.log()` like the professor did, and option 2 stores the product in an intermediate variable first, which was my first attempt in class.

---

## 📊 Flowchart (ISO / ANSI)

```mermaid
flowchart TD
    A([Start]) --> B[/"inputNumber, i = 0"/]
    B --> C{"i <= 10"}
    C -- Yes --> D("Print: inputNumber * i")
    D --> E("i = i + 1")
    E --> C
    C -- No --> F([End])
```

---

## 🧪 Desk Checking (RAM Memory Trace)

Simulation for input `inputNumber = 7` (Option 1 - Direct Calculation):

| Iteration `i` | `inputNumber` | Condition (`i <= 10`) | Operation | Output Printed |
| :---: | :---: | :---: | :---: | :--- |
| **0** | `7` | `true` | `7 * 0` | `7 * 0 = 0` |
| **1** | `7` | `true` | `7 * 1` | `7 * 1 = 7` |
| **2** | `7` | `true` | `7 * 2` | `7 * 2 = 14` |
| **...** | `7` | `true` | `...` | `...` |
| **10** | `7` | `true` | `7 * 10` | `7 * 10 = 70` |
| **11** | `7` | `false` | - | *(Loop terminates)* |

---

## 💻 Source Code

The full implementation is available in [MultiplicationTable.ts](MultiplicationTable.ts).

---

## 🖥️ Terminal Output

```text
========================================
     Multiplication Table with for
========================================
1 - Direct calculation (Professor's approach)
2 - With intermediate variable (My approach in class)

Table of 7:
7 * 0 = 0
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
========================================
```

---

## 💡 Key Concepts Applied

- **Counted `for` Loop:** Putting initialization (`i = 0`), stop condition (`i <= 10`), and step (`i++`) in one header.
- **Comparing Two Approaches:** Computing `inputNumber * i` directly inside `console.log()` vs. saving it in `intermediateResult` first.
- **Terminal Input (`prompt-sync`):** Reading keyboard input as text and converting it with `Number()`.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/07-multiplication-table/MultiplicationTable.ts
```
