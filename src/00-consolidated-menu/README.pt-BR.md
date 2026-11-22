<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 📑 Menu Consolidado (`consolidated_menu.ts`)

</div>

> **Origem:** Aulas 02 a 09 (Coleção Consolidada de Exercícios)  
> **Tópico:** Menu Interativo com `switch`/`case`, Repetição `do...while` e Funções

---

## 🎯 Enunciado do Problema

Neste arquivo, reuni os 15 exercícios práticos que escrevi ao longo do semestre em um único menu interativo de terminal (`00-consolidated-menu`). O programa roda dentro de uma repetição `do...while` para que eu consiga testar qualquer exercício e voltar ao menu até escolher `0` para sair.

---

## 💻 Código-Fonte

O código completo está em [consolidated_menu.ts](consolidated_menu.ts).

---

## 🖥️ Opções do Menu

| Opção | Exercício | Foco Principal |
| :---: | :--- | :--- |
| `1` | **Média de Notas do Estudante** | Tipagem estática (`number`), precedência de operadores, 3 notas fixas. |
| `2` | **Cálculo do Carrinho de Compras** | Modelagem com `interface`, leitura de array, acumulador de preços. |
| `3` | **Soma de Dois Números** | Ciclo de vida em 3 fases (Declaração -> Inicialização -> Atribuição). |
| `4` | **Lógica Booleana e Operadores** | Avaliação lógica com `&&`, `\|\|` e `!`. |
| `5` | **Fluxo Decisório de Aprovação** | Condicionais `if`/`else`, fluxograma e teste de mesa. |
| `6` | **Relatório de Notas Aninhadas** | Interfaces aninhadas, repetições 2D e `.toFixed(2)` *(Meu estudo prévio)*. |
| `7` | **Tabuada com `for`** | Repetição contada com entrada interativa no terminal. |
| `8` | **Cálculo de Fatorial** | Acumulador multiplicativo (`n!`) inicializado com `1`. |
| `9` | **Média de 4 Notas** | Repetição `for` com acumulador e uma única variável de entrada reutilizada. |
| `10` | **Verificação de Senha (3 Tentativas)** | Parada antecipada com `break` e flag booleana de autenticação. |
| `11` | **Indexação e Métodos de Arrays** | `pop()`, `unshift()`, `push()`, `shift()` e `.length`. |
| `12` | **Média Dinâmica de Notas** | Armazenar `N` notas em `number[]` separando leitura e soma. |
| `13` | **Análise de Vendas e Extremos** | Soma, média, maior e menor valor em uma única passagem. |
| `14` | **Prática de Funções em TypeScript** | Parâmetros tipados e retornos `number`, `void` e `boolean`. |
| `15` | **Média Modular de Notas** | Passar `number[]` para `averageGrade()` com cláusula de guarda. |
| `0` | **Sair** | Encerra a repetição do menu. |

---

## 💡 Principais Conceitos Aplicados

- **Ponto Único de Entrada:** Em vez de rodar 15 comandos separados para testar os exercícios, consigo abrir tudo direto pelo `npm start`.
- **Repetição Contínua com `do...while`:** Mostra o menu pelo menos uma vez e continua executando até `menuChoice === 0`.
- **Escopo por Bloco no `switch`:** Usar chaves `{ ... }` em cada `case` evita conflitos de nomes de variáveis entre exercícios.

---

## 🚀 Como Executar

```bash
# Executar o menu interativo pela raiz do projeto
npm start

# Ou diretamente com tsx
npx tsx src/00-consolidated-menu/consolidated_menu.ts
```
