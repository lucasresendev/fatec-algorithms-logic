<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🛒 Cálculo do Carrinho de Compras (`CartFinalValue.ts`)

</div>

> **Origem:** Aula 04 (Operadores, Expressões e Algoritmos Sequenciais)  
> **Tópico:** Objetos com `interface`, Array Tipado (`CartItem[]`) e Acumulador de Preços

---

## 🎯 Enunciado do Problema

Neste exercício, modelei um carrinho de compras simples com vários produtos e um frete fixo de `$25.00`. Percorri os itens para somar o subtotal, juntei os nomes sem deixar vírgula sobrando no final e exibi o valor total.

---

## 💻 Código-Fonte

O código completo está em [CartFinalValue.ts](CartFinalValue.ts).

---

## 🖥️ Saída no Terminal

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

## 💡 Principais Conceitos Aplicados

- **Modelagem com `interface`:** Criar o tipo `CartItem` (`name: string` e `value: number`), parecido com uma `struct` em C.
- **Arrays Tipados (`CartItem[]`):** Guardar todos os produtos do carrinho em uma única lista tipada.
- **Variáveis Acumuladoras:** Somar os preços (`subtotalValue += item.value`) e montar o texto com os nomes dos itens na mesma repetição.
- **Formatação de Vírgulas:** Checar `i < singleUserCart.length - 1` para não sobrar vírgula depois do último produto.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/02-cart-final-value/CartFinalValue.ts
```
