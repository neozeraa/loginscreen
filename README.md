<div align="center">

# 🔐 Login Screen 2.0

### Template moderno de Login e Cadastro, responsivo e com exemplo de Backend em Node.js

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

**Desenvolvido por [VERY SYSTEMS](https://github.com/neozeraa)**

</div>

---

## 📌 Sobre o Projeto

O **Login Screen 2.0** é uma solução completa para quem precisa de uma interface de autenticação bonita, rápida e pronta para integrar em seus projetos. Esta versão traz um design premium (fonte *Plus Jakarta Sans*), abas dinâmicas e um painel hero com gradiente.

Além do frontend completo, o repositório inclui um **template de Backend em Node.js com SQLite**, mostrando como transformar a tela estática em um sistema com banco de dados real.

---

## ✨ Principais Funcionalidades

### 🎨 Frontend (Interface)

- **3 abas integradas:** Entrar, Criar Conta e Recuperar Senha
- **Modo escuro automático:** adapta-se à preferência do sistema do usuário
- **Validação visual:** barra animada de força da senha e checklist de requisitos (letras, números, tamanho)
- **Simulação local segura:** funciona direto no navegador, com senhas protegidas por hash (PBKDF2) salvas no `localStorage`

### ⚙️ Backend (Exemplo incluso)

- **API REST pronta:** rotas `/api/cadastrar` e `/api/login`
- **Banco de dados real:** tabela de usuários criada automaticamente em SQLite
- **Segurança de dados:** hashes de senha com a biblioteca `bcrypt`

---

## 🚀 Como Instalar e Usar

### 1. Clonar o repositório

Abra o terminal (PC ou Termux) e baixe o projeto:

```bash
git clone https://github.com/neozeraa/loginscreen.git
cd loginscreen
```

### 2. Apenas Frontend (testar a tela visualmente)

Scripts executáveis para facilitar:

| Ação | Comando |
|------|---------|
| Mudar o nome da empresa | `./empresa NOME_DA_SUA_MARCA` |
| Rodar servidor de teste | `./teste` (depois acesse http://localhost:8080) |

> 💡 Se der erro de permissão (comum no Termux), rode:
> ```bash
> chmod +x empresa teste
> ```

### 3. Rodar o Backend com banco de dados (Node.js)

Para testar a API com um banco real, entre na pasta do backend:

```bash
cd backend_exemplo
npm init -y
npm install express sqlite3 bcrypt
node server.js
```

O servidor iniciará na porta **3000**.

---

## 📁 Estrutura de Arquivos

```
loginscreen/
├── index.html               # Tela principal (UI 2.0 completa)
├── empresa                  # Script rápido para alterar o nome da marca
├── teste                    # Script que sobe um servidor web local
├── backend_exemplo/         # Template de API real
│   ├── server.js            # Servidor Node.js + Express + SQLite
│   └── .gitignore           # Ignora o banco de dados local no GitHub
└── README.md                # Esta documentação
```

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Este é um projeto Open Source. Abra uma *issue* ou envie um *pull request*.

---

<div align="center">

**© 2026 — Desenvolvido por VERY SYSTEMS ([@neozeraa](https://github.com/neozeraa))**

</div>
