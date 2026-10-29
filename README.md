<div align="center">

# 🔐 Login Screen 2.0

### Template moderno de Login e Cadastro, responsivo e com exemplo de Backend em Node.js

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

**Desenvolvido por [VERY SYSTEMS](https://github.com/neozeraa)**

</div>

---

## 📌 Sobre o Projeto

O **Login Screen 2.0** é uma solução completa para quem precisa de uma interface de autenticação bonita, rápida e pronta para integrar em seus projetos. A versão atualizada traz um design premium (utilizando a fonte *Plus Jakarta Sans*), abas dinâmicas e um painel hero com gradiente. 

Além do frontend super completo, o repositório agora inclui um **template de Backend em Node.js com SQLite**, mostrando exatamente como transformar a tela estática em um sistema com banco de dados real.

---

## ✨ Principais Funcionalidades

### 🎨 Frontend (Interface)
- **3 Abas Integradas:** Entrar, Criar Conta e Recuperar Senha.
- **Modo Escuro Automático:** Adapta-se instantaneamente à preferência do sistema do usuário.
- **Validação Visual:** Barra animada de força de senha e checklist de requisitos (letras, números, tamanho).
- **Simulação Local Segura:** O código base funciona direto no navegador com senhas protegidas por hash (PBKDF2) salvas no `localStorage`.

### ⚙️ Backend (Exemplo Incluso)
- **API REST Pronta:** Rotas estruturadas para `/api/cadastrar` e `/api/login`.
- **Banco de Dados Real:** Tabela de usuários gerada automaticamente em SQLite.
- **Segurança de Dados:** Hashes de senha utilizando a famosa biblioteca `bcrypt`.

---

## 🚀 Como Instalar e Usar

### 1. Clonar o repositório
Abra seu terminal (PC ou Termux) e faça o download do projeto:
```bash
git clone [https://github.com/neozeraa/loginscreen.git](https://github.com/neozeraa/loginscreen.git)
cd loginscreen
2. Apenas Frontend (Testar a Tela Visualmente)
​Você tem scripts executáveis criados para facilitar sua vida:
​Mudar o Nome da Empresa: ./empresa NOME_DA_SUA_MARCA
​Rodar Servidor de Teste: ./teste (Depois, acesse http://localhost:8080)
​(Nota: Caso dê erro de permissão no Termux, rode chmod +x empresa teste)
​3. Rodar o Backend com Banco de Dados (Node.js)
​Se você quer testar a API com um banco real, entre na pasta do backend:
cd backend_exemplo
npm init -y
npm install express sqlite3 bcrypt
node server.js
O servidor iniciará na porta 3000
​📁 Estrutura de Arquivos
loginscreen/
├── index.html               # Tela principal (UI 2.0 completa)
├── empresa                  # Script rápido para alterar o nome da marca na tela
├── teste                    # Script que sobe um servidor web local
├── backend_exemplo/         # Template de API Real
│   ├── server.js            # Servidor Node.js + Express + SQLite
│   └── .gitignore           # Ignora o banco de dados local no GitHub
└── README.md                # Esta documentação
🤝 Contribuindo
​Sugestões e melhorias são bem-vindas! Este é um projeto Open Source. Sinta-se à vontade para abrir uma issue ou enviar um pull request.
​<div align="center">
​© 2026 — Desenvolvido por VERY SYSTEMS (@neozeraa)
​</div>
