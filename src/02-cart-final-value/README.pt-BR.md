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

```typescript
// PROBLEMA
// Calcular o valor final de um carrinho de compras com 2 itens e um frete fixo de $ 25.00.
// Explicar passo a passo e seguir princípios de Clean Code.

// Criação de encapsulamento de dados para associar nome do item ao preço
// Usado PascalCase por se tratar de um tipo / interface
interface CartItem {
    name: string;
    value: number;
}

// Declarando a variável do carrinho do usuário usando o tipo criado acima
let singleUserCart: CartItem[];
// Valor de frete predefinido
const shippingCost: number = 25;
// Inicializando variáveis para evitar NULL/undefined e permitir o operador "+="
let subtotalValue: number = 0;
let itemsNames: string = "";
// Variável do total final
let totalValue: number;

// Definição dos nomes e valores para os itens no carrinho
singleUserCart = [
    {name: "Apple", value: 2},
    {name: "Strawberry", value: 4}
];

// Laço para extrair cada valor do vetor e acumular em variáveis dedicadas
// Uso de ".length" para capturar dinamicamente a quantidade de itens no vetor
for (let i: number = 0; i < singleUserCart.length; i++) {
    subtotalValue += singleUserCart[i].value;
    itemsNames += singleUserCart[i].name;

    // Para adicionar a vírgula, compara "i" com (total de itens - 1) para não colocar no último
    if (i < singleUserCart.length - 1) {
        itemsNames += ", ";
    }
}

// Cálculo do valor total
totalValue = subtotalValue + shippingCost;

// Exibição final
console.log("\n=========================" + "\n      Shopping Cart" + "\n=========================\n");
console.log("Items:    " + itemsNames + ";\nSubtotal: $ " + subtotalValue + ";\nShipping: $ " + shippingCost + ";\nTotal:    $ " + totalValue + ".\n");
```

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
