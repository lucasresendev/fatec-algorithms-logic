<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🧠 Algoritmos & Lógica de Programação | Fatec

  ### **Exercícios Práticos, Estruturas de Dados e Fundamentos Algorítmicos em TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Fatec Taubaté](https://img.shields.io/badge/Fatec-Taubaté-B22222?style=for-the-badge)](https://fatectaubate.edu.br/)
  [![Centro Paula Souza](https://img.shields.io/badge/CEETEPS-CPS-003366?style=for-the-badge)](https://www.cps.sp.gov.br/)

</div>

---

## 🎯 Sobre a Matéria

Neste repositório organizo meus exercícios práticos e o desenvolvimento do raciocínio lógico para a disciplina de **Algoritmos e Lógica de Programação (ALP)** no curso superior de **Análise e Desenvolvimento de Sistemas (ADS)** da **Fatec Taubaté (CEETEPS)**, ministrada pelo **Prof. Robson Dagmar Zanato Pedroso**.

- **Carga Horária:** 80 horas no total (20 encontros semanais).
- **Tecnologia Principal:** [TypeScript](https://www.typescriptlang.org/) sobre o runtime [Node.js](https://nodejs.org/).
- **Objetivo:** Praticar lógica de programação e resolução de problemas com disciplina matemática, modelagem em fluxogramas ISO/ANSI e testes de mesa na memória RAM.

### Eixos Centrais de Aprendizado
- **Ciclo de Variáveis em 3 Fases:** Separação clara entre Declaração, Inicialização e Atribuição/Processamento.
- **Tipagem Estática e Segurança:** Prevenção de falhas com tipagem estrita no compilador e proibição de `any`.
- **Modelagem de Fluxogramas e Teste de Mesa:** Rastreamento do fluxo decisório em diagramas formais e simulação do estado das variáveis na RAM.
- **Código Modular e Clean Code:** Construção de código limpo, legível e com nomenclatura semântica descritiva.

---

## 🗺️ Plano de Ensino Oficial & Cronograma

| Aula | Tópico Oficial | Status | Módulo no Repositório |
| :---: | :--- | :---: | :--- |
| 01 | Fundamentos de algoritmos, lógica e pensamento computacional | ✅ Concluído | Conceitos iniciais |
| 02 | Representação de algoritmos: narrativa, pseudocódigo e fluxogramas | ✅ Concluído | [`src/01-average-student-grade/`](src/01-average-student-grade/) |
| 03 | Tipos de dados, variáveis, constantes e entrada/saída | ✅ Concluído | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/), [`src/04-boolean-logic/`](src/04-boolean-logic/) |
| 04 | Operadores, expressões e algoritmos sequenciais | ✅ Concluído | [`src/02-cart-final-value/`](src/02-cart-final-value/), [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/), [`src/06-nested-grades-report/`](src/06-nested-grades-report/) |
| 05 | Estruturas de decisão & introdução prática a repetições (`for`) | ✅ Concluído | [`src/07-multiplication-table/`](src/07-multiplication-table/), [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) |
| 06 | Aplicação de estruturas condicionais e valores-limite | ⏳ Previsto | Em cronograma |
| 07 | Decisões encadeadas, múltiplas alternativas e validação | ⏳ Previsto | Em cronograma |
| 08 | Revisão Geral para a P1 | ⏳ Previsto | Em cronograma |
| 09 | 1ª Avaliação Presencial (P1) | ⏳ Previsto | Em cronograma |
| 10 | Fundamentos das estruturas de repetição (`while`, acumuladores) | ⏳ Previsto | Em cronograma |
| 11 | Repetição condicionada | ⏳ Previsto | Em cronograma |
| 12 | Repetição contada e escolha da estrutura iterativa | ⏳ Previsto | Em cronograma |
| 13 | Integração das estruturas de controle de fluxo | ⏳ Previsto | Em cronograma |
| 14 | Funções, procedimentos e modularização de programas | ⏳ Previsto | Em cronograma |
| 15 | Aplicação de funções e procedimentos | ⏳ Previsto | Em cronograma |
| 16 | Introdução à recursividade | ⏳ Previsto | Em cronograma |
| 17 | Depuração, testes e validação de algoritmos | ⏳ Previsto | Em cronograma |
| 18 | Revisão Geral para a P2 | ⏳ Previsto | Em cronograma |
| 19 | 2ª Avaliação Presencial (P2) | ⏳ Previsto | Em cronograma |
| 20 | Encerramento do semestre e notas finais | ⏳ Previsto | Em cronograma |

> [!NOTE] 💡 Aulas de Reposição EAD
> Materiais de estudo complementares disponibilizados pelo professor em formato assíncrono.

---

## 📝 Índice de Exercícios

| # | Exercício | Código e Documentação | Conceitos Principais |
| :-: | :--- | :--- | :--- |
| 00 | **Menu Consolidado** | [`src/00-consolidated-menu/`](src/00-consolidated-menu/) | Menu interativo via console reunindo todos os algoritmos desenvolvidos em um único ponto de entrada. |
| 01 | **Média de Notas do Estudante** | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Tipagem estática (`number`), operadores aritméticos, precedência com parênteses. |
| 02 | **Cálculo do Carrinho de Compras** | [`src/02-cart-final-value/`](src/02-cart-final-value/) | Modelagem com `interface`, vetores tipados (`Array`), variáveis acumuladoras. |
| 03 | **Soma de Dois Números** | [`src/03-two-numbers-sum/`](src/03-two-numbers-sum/) | Ciclo de vida em 3 fases (Declaração $\rightarrow$ Inicialização $\rightarrow$ Atribuição). |
| 04 | **Lógica Booleana & Operadores** | [`src/04-boolean-logic/`](src/04-boolean-logic/) | Avaliação lógica booleana, curto-circuito (`&&`, `\|\|`, `!`). |
| 05 | **Fluxo Decisório de Aprovação** | [`src/05-grade-approval-flow/`](src/05-grade-approval-flow/) | Condicionais compostas (`if`/`else`), fluxogramas ISO/ANSI, teste de mesa na RAM. |
| 06 | **Relatório de Notas Aninhadas** | [`src/06-nested-grades-report/`](src/06-nested-grades-report/) | Interfaces aninhadas, repetições bidimensionais, formatação com `.toFixed(2)` *(Meu estudo prévio)*. |
| 07 | **Tabuada com for** | [`src/07-multiplication-table/`](src/07-multiplication-table/) | Estrutura de repetição `for`, entrada no terminal, comparação entre o cálculo direto do professor e meu jeito com variável intermediária. |
| 08 | **Cálculo de Fatorial** | [`src/08-factorial-accumulator/`](src/08-factorial-accumulator/) | Acumulador multiplicativo ($n!$), comparando o método decrescente do professor com meus dois modelos desenvolvidos em aula. |

---

## 📂 Estrutura do Projeto

```text
.
├── .agent/
│   └── skills/
│       ├── fatec-alp-coursework/     # Skill para curadoria de notas e auditoria de ALP
│       │   ├── SKILL.md
│       │   ├── scripts/              # recon_alp_class.py e validate_alp_coursework.py
│       │   └── references/           # Ementa oficial e padrões de código da disciplina
│       └── fatec-alp-commits/        # Skill para validação de commits semânticos
│           ├── SKILL.md
│           └── scripts/              # validate_alp_commit.py
│
├── src/
│   ├── utils/                        # Utilitários compartilhados (leitura segura de terminal)
│   ├── 00-consolidated-menu/         # Menu interativo consolidado em CLI
│   ├── 01-average-student-grade/
│   ├── 02-cart-final-value/
│   ├── 03-two-numbers-sum/
│   ├── 04-boolean-logic/
│   ├── 05-grade-approval-flow/
│   ├── 06-nested-grades-report/
│   ├── 07-multiplication-table/
│   └── 08-factorial-accumulator/
│
├── package.json
├── tsconfig.json
├── README.md                         # Documentação em inglês
└── README.pt-BR.md                   # Documentação em português
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (recomendado v20+).

### Menu Consolidado Interativo (Recomendado)
Execute todos os algoritmos interativamente a partir de um único comando:

```bash
npm start
```

### Execução Individual com `tsx`
Execute qualquer exercício isoladamente:

```bash
# Exercício 07: Tabuada
npx tsx src/07-multiplication-table/MultiplicationTable.ts

# Exercício 08: Fatorial
npx tsx src/08-factorial-accumulator/FactorialAccumulator.ts
```

### Verificação de Código & Tipos

```bash
# Executar checagem estrita de tipos no TypeScript
npm run typecheck

# Executar auditoria do repositório
npm run audit
```

---

<div align="center">
  Desenvolvido por <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>
