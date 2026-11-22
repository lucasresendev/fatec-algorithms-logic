<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # ❗ Cálculo de Fatorial (`FactorialAccumulator.ts`)

</div>

> **Origem:** Aula 05 (Repetição com `for`, Entrada de Dados e Introdução a Funções)  
> **Tópico:** Acumulador Multiplicativo (`n!`) e Comparação de Três Formas de Percorrer o `for`

---

## 🎯 Enunciado do Problema

Neste exercício, escrevi uma calculadora de fatorial (`n!`) comparando três jeitos de montar o `for`: a contagem decrescente que o professor mostrou (`n` até `1`), a contagem crescente que fiz primeiro (`1` até `n`) e uma segunda alternativa que testei em sala multiplicando por `(inputNumber - i)` a partir de `i = 0`.

---

## 📊 Fluxograma (Norma ISO / ANSI)

```mermaid
flowchart TD
    A([Início]) --> B[/"inputNumber, factorialResult = 1"/]
    B --> C{"inputNumber <= 1"}
    C -- Sim --> D("factorialResult = 1")
    C -- Não --> E("i = inputNumber")
    E --> F{"i > 0"}
    F -- Sim --> G("factorialResult = factorialResult * i")
    G --> H("i = i - 1")
    H --> F
    F -- Não --> I[/"Imprimir: inputNumber! = factorialResult"/]
    D --> I
    I --> J([Fim])
```

---

## 🧪 Teste de Mesa (Rastreamento na Memória RAM)

Simulação para a entrada `inputNumber = 4` (Opção 1 - Abordagem Decrescente):

| Iteração `i` | `inputNumber` | Condição (`i > 0`) | `factorialResult` (Acumulado) |
| :---: | :---: | :---: | :---: |
| **Início** | `4` | - | `1` |
| **`i = 4`** | `4` | `true` | `1 * 4 = 4` |
| **`i = 3`** | `4` | `true` | `4 * 3 = 12` |
| **`i = 2`** | `4` | `true` | `12 * 2 = 24` |
| **`i = 1`** | `4` | `true` | `24 * 1 = 24` |
| **`i = 0`** | `4` | `false` | *(Repetição encerra com resultado 24)* |

---

## 💻 Código-Fonte

O código completo está em [FactorialAccumulator.ts](FactorialAccumulator.ts).

---

## 🖥️ Saída no Terminal

```text
==================================================
              Factorial Calculator
==================================================
1 - Descending repetition (Professor's approach)
2 - Ascending repetition (My first approach)
3 - Subtraction iteration (My second approach)

Processing 5!:
5
20
60
120
120

Final result of 5! = 120
==================================================
```

---

## 💡 Principais Conceitos Aplicados

- **Começar em `1`:** O acumulador de multiplicação precisa iniciar em `1` (se começasse em `0`, o produto ficaria zerado até o fim).
- **Três Estratégias no `for`:**
  - **1 - Decrescente (Professor):** Vai de `inputNumber` até `1` usando `i--`.
  - **2 - Crescente (Meu 1º jeito):** Vai de `1` até `inputNumber` usando `i++`.
  - **3 - Com Subtração (Meu 2º jeito):** Vai de `0` até `< inputNumber`, multiplicando por `(inputNumber - i)`.

---

## 🚀 Como Executar

```bash
# Execução direta via tsx
npx tsx src/08-factorial-accumulator/FactorialAccumulator.ts
```
