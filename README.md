# 🍞 Gerador de Receitas

Aplicação web simples que gera receitas aleatórias a partir de uma API externa. Ao clicar no botão, o usuário recebe uma nova receita automaticamente, tornando a experiência dinâmica e interativa.

---

## 🚀 Funcionalidades

* 🎲 Geração de receitas aleatórias
* 🌐 Consumo de API externa
* ⚡ Interface simples e rápida
* 📄 Exibição dinâmica de conteúdo com JavaScript

---

## 🔗 API Utilizada

* TheMealDB (receitas aleatórias)

Endpoint usado:

```bash
https://www.themealdb.com/api/json/v1/1/random.php
```

---

## 🌍 Deploy

O projeto está hospedado na plataforma **Netlify**:

🔗 [https://appmaispao.netlify.app](https://appmaispao.netlify.app)

---

## 📂 Estrutura de Pastas

```bash
CODING/
│
├── .vscode/
│   └── settings.json
│
├── css/
│   └── style.css
│
├── js/
│   └── javascript.js
│
└── index.html
```

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* API REST (TheMealDB)
* Netlify (Deploy)

---

## ⚙️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/kallynemelo/Gerador-de-Receitas.git
```

2. Acesse a pasta:

```bash
cd Gerador-de-Receitas
```

3. Abra o arquivo `index.html` no navegador

---

## 📌 Como Funciona

* O botão **"Sortear receita"** executa uma função JavaScript (`getReceita()`)
* Essa função faz uma requisição `fetch` para a API:

```javascript
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
```

* A resposta retorna uma receita aleatória em JSON
* Os dados são exibidos dinamicamente na página

---

## 💡 Melhorias Futuras

* 🖼️ Exibir imagem da receita
* 🔎 Filtro por categoria (ex: sobremesas, carnes, vegano)
* ❤️ Sistema de favoritos
* 📱 Layout responsivo (mobile)
* 🌍 Tradução das receitas

---

## 👩‍💻 Autora

Desenvolvido por **Kallyne Victória Gomes de Melo**
