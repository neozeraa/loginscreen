<div align="center">

# 🔐 Login Screen

### Tela de login e cadastro moderna, responsiva e pronta para o seu projeto

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-pronto%20para%20uso-brightgreen?style=for-the-badge)

**Por [VERY SYSTEMS](https://github.com/neozeraa)**

</div>

---

## ✨ Funcionalidades

- 🔑 **Três abas completas:** Entrar, Criar Conta e Recuperar Senha
- 🛡️ **Proteção de senha simulada:** hash com PBKDF2, armazenado via `localStorage`
- 🌗 **Tema claro e escuro:** adapta-se automaticamente ao sistema do usuário
- 📱 **Totalmente responsiva:** funciona bem no celular, tablet e computador
- ⚡ **Comandos de terminal:** `empresa` e `teste` para editar e visualizar rapidamente

> ⚠️ **Aviso:** a autenticação é **simulada** e roda 100% no navegador. É ideal para protótipos e demonstrações. Em produção, utilize um back-end real com validação no servidor.

---

## 📦 Instalação

```bash
git clone https://github.com/neozeraa/loginscreen.git
cd loginscreen
```

---

## 🖥️ Comandos do Terminal

### 1. 🏷️ Personalizar a marca

Altera instantaneamente o nome da empresa na tela.

```bash
./empresa NOME_DESEJADO
```

**Exemplo:**

```bash
./empresa NOVADEV
```

### 2. 👀 Visualizar o projeto

Sobe um servidor local para testar a interface.

```bash
./teste
```

Depois, acesse: **http://localhost:8080**

> 💡 Se aparecer "permission denied", libere a execução com:
> `chmod +x empresa teste`

---

## 📁 Estrutura do projeto

```
loginscreen/
├── index.html   # Tela de login (interface + lógica)
├── empresa      # Script para trocar o nome da marca
├── teste        # Script que inicia o servidor local
└── README.md    # Documentação
```

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Abra uma *issue* ou envie um *pull request*.

---

<div align="center">

**© 2026 — Desenvolvido por VERY SYSTEMS ([@neozeraa](https://github.com/neozeraa))**

</div>
