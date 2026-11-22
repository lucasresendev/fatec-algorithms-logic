<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # ✖️ Tabuada com `for` (`MultiplicationTable.ts`)

</div>

> **Origem:** Aula 05 (Repetição com `for`, Entrada de Dados e Introdução a Funções)  
> **Tópico:** Repetição Contada com `for`, Entrada com `prompt-sync` e Cálculo Direto vs. Variável Intermediária

---

## 🎯 Enunciado do Problema

Neste exercício, li um número inteiro pelo terminal e imprimi a tabuada dele de 0 a 10 usando `for`. Mantive as duas formas que vimos em aula: a opção 1 faz a conta direto no `console.log()` como o professor mostrou, e a opção 2 guarda o resultado em uma variável intermediária antes de exibir, que foi o jeito que fiz na minha primeira tentativa em sala.

---

## 📊 Fluxograma (Norma ISO / ANSI)

```mermaid
flowchart TD
    A([Início]) --> B[/"inputNumber, i = 0"/]
    B --> C{"i <= 10"}
    C -- Sim --> D("Imprimir: inputNumber * i")
    D --> E("i = i + 1")
    E --> C
    C -- Não --> F([Fim])
```

---

## 🧪 Teste de Mesa (Rastreamento na Memória RAM)

Simulação para a entrada `inputNumber = 7` (Opção 1 - Cálculo Direto):

| Iteração `i` | `inputNumber` | Condição (`i <= 10`) | Operação | Saída no Terminal |
| :---: | :---: | :---: | :---: | :--- |
| **0** | `7` | `true` | `7 * 0` | `7 * 0 = 0` |
| **1** | `7` | `true` | `7 * 1` | `7 * 1 = 7` |
| **2** | `7` | `true` | `7 * 2` | `7 * 2 = 14` |
| **...** | `7` | `true` | `...` | `...` |
| **10** | `7` | `true` | `7 * 10` | `7 * 10 = 70` |
| **11** | `7` | `false` | - | *(Repetição encerra)* |

---

## 💻 Código-Fonte

O código completo está em [MultiplicationTable.ts](MultiplicationTable.ts).

---

## 🖥️ Saída no Terminal

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

## 💡 Principais Conceitos Aplicados

- **Repetição Contada (`for`):** Reunir inicialização (`i = 0`), condição de parada (`i <= 10`) e incremento (`i++`) no mesmo cabeçalho.
- **Comparação de Abordagens:** Calcular `inputNumber * i` direto no `console.log()` versus guardar antes em `intermediateResult`.
- **Entrada no Terminal (`prompt-sync`):** Ler texto digitado no teclado e converter para número com `Number()`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/07-multiplication-table/MultiplicationTable.ts
```
