/**
 * Exemplo de Backend - VERY SYSTEMS
 * Tecnologias: Node.js + Express + SQLite
 * 
 * Este arquivo serve como um ponto de partida para conectar a tela 
 * de login a um banco de dados real em vez do localStorage do navegador.
 * 
 * Para testar localmente:
 * 1. npm init -y
 * 2. npm install express sqlite3 bcrypt
 * 3. node server.js
 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

// Inicia o banco de dados local
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) console.error("Erro ao abrir banco:", err.message);
    else console.log("✅ Banco de dados SQLite conectado.");
});

// Cria a tabela de usuários se não existir
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// Rota de Cadastro
app.post('/api/cadastrar', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const hash = await bcrypt.hash(senha, 10);
        db.run(`INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)`, [nome, email, hash], function(err) {
            if (err) return res.status(400).json({ erro: "E-mail já cadastrado." });
            res.json({ sucesso: true, mensagem: "Conta criada com sucesso!" });
        });
    } catch (error) {
        res.status(500).json({ erro: "Erro interno no servidor." });
    }
});

// Rota de Login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    db.get(`SELECT * FROM usuarios WHERE email = ?`, [email], async (err, user) => {
        if (err || !user) return res.status(401).json({ erro: "E-mail ou senha incorretos." });
        
        const valida = await bcrypt.compare(senha, user.senha_hash);
        if (valida) res.json({ sucesso: true, token: "gerar-jwt-aqui", nome: user.nome });
        else res.status(401).json({ erro: "E-mail ou senha incorretos." });
    });
});

app.listen(3000, () => console.log('🚀 Servidor backend rodando em http://localhost:3000'));
