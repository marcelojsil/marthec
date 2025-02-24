// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 5000;

// Configuração do middleware
app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: "198.45.114.194",
    user: "root",
    password: "M@rthe88",
    database: "marthecw_marthec",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Conectado ao banco de dados MySQL");
});

// Rota para processar o formulário
app.post("/api/form", (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: "Dados inseridos com sucesso!" });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
