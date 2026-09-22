<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🛒 Cálculo do Carrinho de Compras (`CartFinalValue.ts`)

</div>

---

## 🎯 Enunciado

Calcular o valor final de um carrinho de compras de usuário único contendo múltiplos itens e taxa fixa de frete ($ 25,00), praticando modelagem de dados, iteração de arrays e boas práticas de Clean Code.

---

## 💻 Código Fonte

A implementação está disponível diretamente em [`CartFinalValue.ts`](CartFinalValue.ts).

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

## 💡 Conceitos Aplicados

- **Modelagem de Dados com `interface`:** Definição de `CartItem` para agrupar propriedades (`name: string` e `value: number`), similar a uma `struct` em C.
- **Vetores Tipados (`CartItem[]`):** Armazenamento de coleções de objetos tipados.
- **Iteração de Arrays (`for` + `.length`):** Processamento dinâmico baseado no tamanho do vetor.
- **Variáveis Acumuladoras:** Soma cumulativa de valores (`subtotalValue += item.value`) e concatenação de textos (`itemsNames`).
- **Lógica de Formatação:** Inserção condicional de vírgula (`i < singleUserCart.length - 1`) para evitar vírgula residual no último elemento.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/02-cart-final-value/CartFinalValue.ts
```
