<div align="center">

  🇧🇷 **[Versão em Português](README.pt-BR.md)**
  <br>

  # 🛒 Shopping Cart Calculation (`CartFinalValue.ts`)

</div>

> **Origin:** Class 04 (Operators, Expressions, and Sequential Logic)  
> **Topic:** `interface` Objects, Typed Arrays (`CartItem[]`), and Price Accumulator

---

## 🎯 Problem Statement

In this exercise, I modeled a small shopping cart with multiple items and a fixed `$25.00` shipping fee. I looped through the items to accumulate the subtotal, joined their names cleanly without a trailing comma, and printed the final total.

---

## 💻 Source Code

The full implementation is available in [CartFinalValue.ts](CartFinalValue.ts).

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

- **Modeling Data with `interface`:** Creating a `CartItem` type (`name: string` and `value: number`), similar to a `struct` in C.
- **Typed Arrays (`CartItem[]`):** Keeping all cart items together in one typed list.
- **Accumulator Variables:** Adding item prices (`subtotalValue += item.value`) and building the formatted item names string in one loop.
- **Comma Formatting:** Checking `i < singleUserCart.length - 1` so there is no extra comma after the last item.

---

## 🚀 How to Run

```bash
# Direct execution via tsx
npx tsx src/02-cart-final-value/CartFinalValue.ts
```
