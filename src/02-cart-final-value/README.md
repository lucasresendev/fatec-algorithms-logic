<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🛒 Shopping Cart Calculation (`CartFinalValue.ts`)

</div>

---

## 🎯 Problem Statement

Calculate the final total of a single-user shopping cart with multiple items and a fixed shipping fee ($25.00), practicing data modeling, array traversal, and Clean Code principles.

---

## 💻 Source Code

The implementation is available directly in [`CartFinalValue.ts`](CartFinalValue.ts).

---

## 🖥️ Terminal Output

```text
=========================
      Shopping Cart
=========================

Items:    Apple, Strawberry;
Subtotal: $ 6;
Shipping: $ 25;
Total:    $ 31.
```

---

## 💡 Key Concepts Applied

- **Data Modeling with `interface`:** Defining `CartItem` to encapsulate properties (`name: string` and `value: number`), similar to a `struct` in C.
- **Typed Arrays (`CartItem[]`):** Storing a collection of structured objects.
- **Array Iteration (`for` + `.length`):** Dynamically processing elements based on array length.
- **Accumulator Variables:** Adding item prices (`subtotalValue += item.value`) and joining strings (`itemsNames`).
- **Formatting Logic:** Conditional comma appending (`i < singleUserCart.length - 1`) to format item lists cleanly without a trailing comma.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/02-cart-final-value/CartFinalValue.ts
```
