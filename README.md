# 💊 API de Farmácia — CRUD de Categoria

## 📌 Descrição

Este projeto consiste na criação de uma API REST utilizando **NestJS**, **TypeORM**, **MySQL** e **Node.js**, com o objetivo de gerenciar categorias de produtos de uma farmácia.

A aplicação implementa um CRUD completo (Create, Read, Update e Delete) para a entidade **Categoria**, permitindo o gerenciamento de registros ativos e inativos.

---

## 🚀 Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* TypeORM
* MySQL

---

## 🗂️ Estrutura da Entidade

### Categoria

| Campo | Tipo    | Descrição                        |
| ----- | ------- | -------------------------------- |
| id    | number  | Identificador único              |
| nome  | string  | Nome da categoria                |
| ativo | boolean | Indica se a categoria está ativa |

---

## 🔧 Funcionalidades implementadas

* Criar categoria
* Listar categorias
* Buscar categoria por ID
* Atualizar categoria
* Deletar categoria
* Buscar categorias por status (ativa ou desativada)

---

## 📡 Endpoints da API

### Listar todas as categorias

GET

```http
/categoria
```

---

### Buscar categoria por ID

GET

```http
/categoria/:id
```

---

### Criar categoria

POST

```http
/categoria
```

Body:

```json
{
  "nome": "Medicamentos",
  "ativo": true
}
```

---

### Atualizar categoria

PUT

```http
/categoria/:id
```

---

### Deletar categoria

DELETE

```http
/categoria/:id
```

---

### Buscar categorias por status

GET

```http
/categoria/ativo/:status
```

Exemplo:

```http
/categoria/ativo/true
/categoria/ativo/false
```

---

## ▶️ Como executar o projeto

```bash
npm install
npm run start:dev
```

---

## 🧠 Objetivo educacional

Este projeto foi desenvolvido com foco em aprendizado de operações CRUD utilizando o framework NestJS e integração com banco de dados relacional utilizando TypeORM.
