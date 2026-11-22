<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 📑 Consolidated Menu (`consolidated_menu.ts`)

</div>

> **Origin:** Classes 02 to 09 (Consolidated Coursework Collection)  
> **Topic:** Interactive Menu with `switch`/`case`, `do...while` Loop, and Modular Functions

---

## 🎯 Problem Statement

In this project, I brought together all 15 practical exercises I wrote across the semester into a single interactive terminal menu (`00-consolidated-menu`). The program runs inside a `do...while` loop so I can test any exercise and return to the menu until I choose `0` to exit.

---

## 💻 Source Code

The full implementation is available in [consolidated_menu.ts](consolidated_menu.ts).

---

## 🖥️ Menu Options

| Option | Exercise | Main Focus |
| :---: | :--- | :--- |
| `1` | **Student Grade Average** | Static typing (`number`), operator precedence, 3 fixed grades. |
| `2` | **Shopping Cart Final Value** | `interface` modeling, array traversal, price accumulator. |
| `3` | **Sum of Two Numbers** | 3-phase variable lifecycle (Declaration -> Initialization -> Assignment). |
| `4` | **Boolean Logic and Operators** | Truth evaluation with `&&`, `\|\|`, and `!`. |
| `5` | **Grade Approval Flow** | Compound `if`/`else` conditions, flowchart, and desk checking. |
| `6` | **Nested Grades Report** | Nested interfaces, 2D loops, and `.toFixed(2)` *(My prior self-study)*. |
| `7` | **Multiplication Table** | Counted `for` loop with interactive terminal input. |
| `8` | **Factorial Calculator** | Multiplicative accumulator (`n!`) initialized at `1`. |
| `9` | **Average of 4 Grades** | `for` loop with accumulator and single reused input variable. |
| `10` | **Password Check (3 Attempts)** | Early exit with `break` and boolean authentication flag. |
| `11` | **Array Indexing and Core Methods** | `pop()`, `unshift()`, `push()`, `shift()`, and `.length`. |
| `12` | **Dynamic Grades Average** | Storing `N` grades in a typed `number[]` array across two loops. |
| `13` | **Sales Extremes and Average** | Single-pass sum, average, highest, and lowest value scan. |
| `14` | **TypeScript Functions Practice** | Typed parameters, `number`, `void`, and `boolean` returns. |
| `15` | **Modular Grades Average** | Passing `number[]` to `averageGrade()` with empty-array guard clause. |
| `0` | **Exit** | Exits the menu loop cleanly. |

---

## 💡 Key Concepts Applied

- **Single Entry Point:** Instead of running 15 separate commands to demo coursework, I keep every exercise reachable from `npm start`.
- **Continuous Loop with `do...while`:** Displays the menu at least once and keeps prompting until `menuChoice === 0`.
- **Block Scoping Inside `switch`:** Wrapping every `case` in `{ ... }` prevents variable name collisions between exercises.

---

## 🚀 How to Run

```bash
# Run interactive menu from project root
npm start

# Or directly with tsx
npx tsx src/00-consolidated-menu/consolidated_menu.ts
```
