# 🧱 Barreira Zero – API de Acessibilidade

A **Barreira Zero** é uma API utilitária que promove **inclusão digital** para pessoas surdas e cegas. Com foco em acessibilidade real, ela fornece recursos que facilitam a integração com sistemas escolares, e-commerces, aplicativos de saúde e plataformas digitais diversas.

---

## 🚀 Funcionalidades

| Rota                          | Método | Descrição                                                                 |
|-------------------------------|--------|--------------------------------------------------------------------------|
| `/traduz?texto=...`           | GET    | Retorna a descrição da frase em LIBRAS e um link simulado para o vídeo. |
| `/traduz/educacional`         | GET    | Lista frases básicas para uso educacional traduzidas para LIBRAS.       |
| `/audios/descricao?audio_url=...` | GET    | Transcreve uma descrição fictícia de um áudio enviado via URL.         |
| `/botao-acessivel`            | GET    | Retorna um botão HTML acessível com atributos ARIA.                     |

---

## 📦 Instalação

```bash
git clone https://github.com/matheeusshn/barreira-zero-api.git
cd barreira-zero-api
npm install
npm run dev
```

---

## 🔍 Exemplos de uso

### 📘 Traduzir para LIBRAS

```http
GET /traduz?texto=Olá, tudo bem?
```

### 🎧 Transcrição de áudio

```http
GET /audios/descricao?audio_url=https://exemplo.com/audio.mp3
```

### 🧩 Botão acessível

```http
GET /botao-acessivel
```

### 📁 Estrutura do Projeto

```pgsql
barreira-zero-api/
├── controllers/
│   ├── acessibilidadeController.js
│   ├── audioController.js
│   └── librasController.js
├── routes/
│   ├── acessibilidade.route.js
│   ├── audio.route.js
│   └── libras.route.js
├── index.js
├── server.js
├── package.json
└── README.md
```