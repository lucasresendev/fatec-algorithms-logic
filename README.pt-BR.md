<div align="center">

  🇺🇸 **[English Version](README.md)**
  <br>

  # 🧠 Algoritmos & Lógica de Programação — Fatec

  ### **Práticas, Estruturas de Dados e Fundamentos de Computação com TypeScript**

  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

---

## 🎯 Sobre o Repositório

Repositório dedicado ao registro de estudos, práticas e resolução de exercícios da disciplina de **Algoritmos e Lógica de Programação** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** na **Fatec Taubaté**.

Os algoritmos são desenvolvidos em **TypeScript** sobre o ecossistema **Node.js**, com foco em:
- **Tipagem Estática e Segurança**: Prevenção de erros com definições de tipo estritas.
- **Modelagem de Dados**: Estruturação de dados com `interfaces`.
- **Clean Code**: Lógica legível, semântica e de fácil manutenção.

---

## 📝 Índice de Exercícios

| # | Exercício | Código & Documentação | Conceitos Principais |
| :-: | :--- | :--- | :--- |
| 01 | **Média de Notas** | [`src/01-average-student-grade/`](src/01-average-student-grade/) | Tipagem estática (`number`), operadores aritméticos, precedência. |
| 02 | **Carrinho de Compras** | [`src/02-cart-final-value/`](src/02-cart-final-value/) | Modelagem de dados (`interface`), vetores (`Array`), laço `for`, acumuladores. |

---

## 📂 Estrutura do Projeto

```text
.
├── src/
│   ├── 01-average-student-grade/
│   │   ├── AverageStudentGrade.ts
│   │   ├── README.md
│   │   └── README.pt-BR.md
│   │
│   └── 02-cart-final-value/
│       ├── CartFinalValue.ts
│       ├── README.md
│       └── README.pt-BR.md
│
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md           # Documentação em Inglês
└── README.pt-BR.md     # Documentação em Português
```

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.

### Execução Direta via `tsx` (Recomendado)
Execute qualquer exercício diretamente pelo terminal sem compilação prévia:

```bash
# Exercício 1: Média de Notas
npx tsx src/01-average-student-grade/AverageStudentGrade.ts

# Exercício 2: Carrinho de Compras
npx tsx src/02-cart-final-value/CartFinalValue.ts
```

> 💡 **Compilação Tradicional:** Para compilar todos os arquivos para JavaScript, execute `npx tsc` (os arquivos serão gerados na pasta `dist/`).

---

## 🛠️ Tecnologias

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Ambiente:** [Node.js](https://nodejs.org/)
- **Ferramentas:** `tsx` / `tsc`

---

<div align="center">
  Desenvolvido por <b><a href="https://github.com/lucasresendev">Lucas Resende</a></b> 🚀
</div>
