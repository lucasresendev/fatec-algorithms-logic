<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🧠 Algoritmos e Lógica de Programação | Fatec

  ### **Meus Exercícios de Aula, Práticas e Algoritmos em TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Fatec Taubaté](https://img.shields.io/badge/Fatec-Taubaté-B22222?style=for-the-badge)](https://fatectaubate.edu.br/)
  [![Centro Paula Souza](https://img.shields.io/badge/CEETEPS-CPS-003366?style=for-the-badge)](https://www.cps.sp.gov.br/)

</div>

---

## 🎯 Sobre Este Repositório

Aqui estão todos os programas e exercícios em TypeScript que escrevi durante a disciplina de **Algoritmos e Lógica de Programação** no meu 1º semestre de **Análise e Desenvolvimento de Sistemas (ADS)** na **Fatec Taubaté (CEETEPS)**.

Ao longo do semestre, usei esses arquivos tanto para praticar os exercícios das aulas semanais (fluxogramas, teste de mesa, condicionais, repetições `for`, arrays tipados e funções) quanto para testar ideias extras por conta própria (como interfaces aninhadas e entradas dinâmicas pelo usuário). Escrevo o código, os prompts e os comentários em inglês (`README.md`) e mantenho a tradução completa em português (`README.pt-BR.md`) para cada exercício.

- **Disciplina:** Algoritmos e Lógica de Programação (1º Semestre, ADS).
- **Professor:** Robson Dagmar Zanato Pedroso.
- **Carga Horária:** 80 horas no total (encontros semanais às segundas-feiras à noite).
- **Tecnologias:** [TypeScript](https://www.typescriptlang.org/) no [Node.js](https://nodejs.org/) com `prompt-sync` para entrada no terminal.

---

## 🗺️ Cronograma das Aulas e Exercícios

| Aula | Tema da Aula | Status | Exercícios no Repositório |
| :---: | :--- | :---: | :--- |
| 01 | Fundamentos de algoritmos, lógica e pensamento computacional | ✅ Concluído | Conceitos iniciais |
| 02 | Representação de algoritmos: descrição narrativa, pseudocódigo e fluxogramas | ✅ Concluído | [`src/01-average-student-grade/`](src/01-average-student-grade/) |
| 03 | Tipos de dados, variáveis, ciclo de vida em 3 fases e operadores booleanos | ✅ Concluído | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/), [`src/04-boolean-logic/`](src/04-boolean-logic/) |
| 04 | Estruturas condicionais (`if`/`else`), fluxogramas ISO/ANSI e teste de mesa | ✅ Concluído | [`src/02-cart-final-value/`](src/02-cart-final-value/), [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/), [`src/06-nested-grades-report/`](src/06-nested-grades-report/) |
| 05 | Repetição com `for`, entrada no terminal (`prompt-sync`) e introdução a funções | ✅ Concluído | [`src/07-multiplication-table/`](src/07-multiplication-table/), [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) |
| 06 | Prática de `for`, operador módulo (`%`), escopo de variáveis e `break` | ✅ Concluído | [`src/09-four-grades-average/`](src/09-four-grades-average/), [`src/10-password-attempts/`](src/10-password-attempts/) |
| P1 | **1ª Avaliação (P1):** Lógica sequencial, condicionais, fluxogramas e `for` (05/10/2026) | ✅ Concluído | Prova presencial |
| 07 | Vetores, matrizes e métodos de arrays (`push`, `pop`, `shift`, `unshift`, `.length`) | ✅ Concluído | [`src/11-array-methods-demo/`](src/11-array-methods-demo/), [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/) |
| 08 | Manipulação de matrizes e busca linear de maior e menor valor | ✅ Concluído | [`src/13-sales-extremes-analysis/`](src/13-sales-extremes-analysis/) |
| 09 | Funções, parâmetros tipados, tipos de retorno (`void`, `boolean`), escopo e arrays | ✅ Concluído | [`src/14-functions-practice/`](src/14-functions-practice/), [`src/15-modular-grades-average/`](src/15-modular-grades-average/) |
| 10+ | Próximos temas, revisão e **2ª Avaliação (P2)** (14/12/2026) | ⏳ Previsto | Em andamento |

> [!NOTE] 💡 Atividades de Reposição Assíncronas
> Em feriados e faltas ao longo do semestre, o professor também enviou apostilas de reposição cobrindo representação de algoritmos, condicionais, repetição (`while`) e vetores.

---

## 🔄 Como os Exercícios Evoluíram ao Longo das Aulas

Ao longo das aulas, o professor voltou várias vezes ao problema da **Média de Notas do Estudante** para reescrevermos a mesma ideia usando o assunto novo da semana:

### Evolução da Média de Notas
- **Aula 02 (Variáveis Fixas):** Começou com três notas fixas (`firstGrade`, `secondGrade`, `thirdGrade`) em [`src/01-average-student-grade/`](src/01-average-student-grade/).
- **Aula 04 (Condicionais e Fluxograma):** Ganhou regras `if`/`else` de aprovação, recuperação e reprovação com fluxograma ISO/ANSI e teste de mesa em [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/).
- **Aula 06 (Repetição `for` e Acumulador):** Substituiu várias variáveis isoladas por uma só entrada reutilizada e um acumulador (`numberSum += inputNumber`), com modo de teste de mesa no console em [`src/09-four-grades-average/`](src/09-four-grades-average/).
- **Aula 07 (Array Tipado Dinâmico):** Passou a guardar `N` notas escolhidas pelo usuário em `grades: number[]`, separando leitura e soma em dois `for` em [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/).
- **Aula 09 (Função Modular):** Isolou o cálculo em uma função tipada `averageGrade(gradesList: number[]): number` com cláusula de guarda para array vazio em [`src/15-modular-grades-average/`](src/15-modular-grades-average/).

---

## 📝 Índice de Exercícios

| # | Exercício | Aula | Código e Documentação | Conceitos Principais |
| :-: | :--- | :---: | :--- | :--- |
| 00 | **Menu Consolidado** | 02 a 09 | [`src/00-consolidated-menu/`](src/00-consolidated-menu/) | Menu interativo no terminal reunindo os 15 exercícios dentro de um `do...while`. |
| 01 | **Média de Notas do Estudante** | Aula 02 | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Tipagem explícita (`number`), parênteses de precedência, `console.log()`. |
| 02 | **Cálculo do Carrinho de Compras** | Aula 04 | [`src/02-cart-final-value/`](src/02-cart-final-value/) | Modelagem com `interface`, array tipado (`CartItem[]`), acumulador de preços. |
| 03 | **Soma de Dois Números** | Aula 03 | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/) | Ciclo de vida em 3 fases (Declaração -> Inicialização -> Atribuição). |
| 04 | **Lógica Booleana e Operadores** | Aula 03 | [`src/04-boolean-logic/`](src/04-boolean-logic/) | Valores `boolean` e avaliação lógica com `&&`, `\|\|` e `!`. |
| 05 | **Fluxo Decisório de Aprovação** | Aula 04 | [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/) | Condicionais compostas `if`/`else`, fluxograma ISO/ANSI, teste de mesa. |
| 06 | **Relatório de Notas Aninhadas** | Aula 04 | [`src/06-nested-grades-report/`](src/06-nested-grades-report/) | Interfaces aninhadas, repetições 2D, `.toFixed(2)`, template strings *(Meu estudo próprio)*. |
| 07 | **Tabuada com `for`** | Aula 05 | [`src/07-multiplication-table/`](src/07-multiplication-table/) | Repetição contada com `for`, entrada com `prompt-sync`, cálculo direto vs. variável intermediária. |
| 08 | **Cálculo de Fatorial** | Aula 05 | [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) | Acumulador multiplicativo (`n!`), comparando contagens decrescente, crescente e com subtração. |
| 09 | **Média de 4 Notas** | Aula 06 | [`src/09-four-grades-average/`](src/09-four-grades-average/) | Acumulador no `for`, escopo de bloco vs. externo, modo de teste de mesa no console. |
| 10 | **Verificação de Senha (3 Tentativas)** | Aula 06 | [`src/10-password-attempts/`](src/10-password-attempts/) | Saída antecipada com `break`, contagem regressiva de chances, flag `isAuthenticated`. |
| 11 | **Indexação e Métodos de Arrays** | Aula 07 | [`src/11-array-methods-demo/`](src/11-array-methods-demo/) | Índice base 0, `.length`, `pop()`, `unshift()`, `push()`, `shift()`, repetição agnóstica. |
| 12 | **Média Dinâmica de Notas** | Aula 07 | [`src/12-dynamic-grades-average/`](src/12-dynamic-grades-average/) | Array `number[]` dimensionado pelo usuário, leitura e soma separadas. |
| 13 | **Análise de Vendas e Extremos** | Aula 08 | [`src/13-sales-extremes-analysis/`](src/13-sales-extremes-analysis/) | Conjunto padrão de 7 vendas ou entrada livre, soma, média, maior e menor valor em passagem única. |
| 14 | **Prática de Funções em TypeScript** | Aula 09 | [`src/14-functions-practice/`](src/14-functions-practice/) | Assinaturas tipadas, escopo local vs. global, parada do `return`, retornos `void` e `boolean`. |
| 15 | **Média Modular de Notas** | Aula 09 | [`src/15-modular-grades-average/`](src/15-modular-grades-average/) | Passagem de `number[]` para `averageGrade()`, cláusula de guarda contra `NaN`. |

---

## 📂 Estrutura do Projeto

```text
.
├── src/
│   ├── 00-consolidated-menu/
│   │   ├── consolidated_menu.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 01-average-student-grade/
│   │   ├── AverageStudentGrade.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 02-cart-final-value/
│   │   ├── CartFinalValue.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 03-two-numbers-sum/
│   │   ├── TwoNumbersSum.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 04-boolean-logic/
│   │   ├── BooleanLogic.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 05-grade-approval-flow/
│   │   ├── GradeApprovalFlow.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 06-nested-grades-report/
│   │   ├── NestedGradesReport.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 07-multiplication-table/
│   │   ├── MultiplicationTable.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 08-factorial-accumulator/
│   │   ├── FactorialAccumulator.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 09-four-grades-average/
│   │   ├── FourGradesAverage.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 10-password-attempts/
│   │   ├── PasswordAttempts.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 11-array-methods-demo/
│   │   ├── ArrayMethodsDemo.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 12-dynamic-grades-average/
│   │   ├── DynamicGradesAverage.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 13-sales-extremes-analysis/
│   │   ├── SalesExtremesAnalysis.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   ├── 14-functions-practice/
│   │   ├── FunctionsPractice.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   └── 15-modular-grades-average/
│       ├── ModularGradesAverage.ts
│       ├── README.md
│       └── README.pt-BR.md
│
├── package.json
├── tsconfig.json
├── README.md           # Documentação em Inglês
└── README.pt-BR.md     # Documentação em Português
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (recomendado v20+).

### Instalação e Menu Interativo (Recomendado)
Instale as dependências uma vez e abra o menu consolidado pela raiz do projeto:

```bash
npm install
npm start
```

### Executando Exercícios Individuais com `tsx`

```bash
# Exercício 01: Média de Notas do Estudante
npx tsx src/01-average-student-grade/AverageStudentGrade.ts

# Exercício 02: Cálculo do Carrinho de Compras
npx tsx src/02-cart-final-value/CartFinalValue.ts

# Exercício 03: Soma de Dois Números
npx tsx src/03-two-numbers-sum/TwoNumbersSum.ts

# Exercício 04: Lógica Booleana e Operadores
npx tsx src/04-boolean-logic/BooleanLogic.ts

# Exercício 05: Fluxo Decisório de Aprovação
npx tsx src/05-grade-approval-flow/GradeApprovalFlow.ts

# Exercício 06: Relatório de Notas Aninhadas
npx tsx src/06-nested-grades-report/NestedGradesReport.ts

# Exercício 07: Tabuada com for
npx tsx src/07-multiplication-table/MultiplicationTable.ts

# Exercício 08: Cálculo de Fatorial
npx tsx src/08-factorial-accumulator/FactorialAccumulator.ts

# Exercício 09: Média de 4 Notas
npx tsx src/09-four-grades-average/FourGradesAverage.ts

# Exercício 10: Verificação de Senha (3 Tentativas)
npx tsx src/10-password-attempts/PasswordAttempts.ts

# Exercício 11: Indexação e Métodos de Arrays
npx tsx src/11-array-methods-demo/ArrayMethodsDemo.ts

# Exercício 12: Média Dinâmica de Notas
npx tsx src/12-dynamic-grades-average/DynamicGradesAverage.ts

# Exercício 13: Análise de Vendas e Extremos
npx tsx src/13-sales-extremes-analysis/SalesExtremesAnalysis.ts

# Exercício 14: Prática de Funções em TypeScript
npx tsx src/14-functions-practice/FunctionsPractice.ts

# Exercício 15: Média Modular de Notas
npx tsx src/15-modular-grades-average/ModularGradesAverage.ts
```

### Verificação de Tipos

```bash
npm run typecheck
```

---

<div align="center">
  Desenvolvido por <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>
