const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Porta dinâmica para o Heroku

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Servir arquivos estáticos

// Ativando o CORS
app.use(cors());

// Configuração do Banco de Dados
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marthec"
});

// Rota para salvar dados no banco de dados
app.post("/lead", (req, res) => {
    const { nome, email, mensagem } = req.body;

    const query = "INSERT INTO leed (nome, email, mensagem) VALUES (?, ?, ?)";
    connection.query(query, [nome, email, mensagem], (err, result) => {
        if (err) {
            res.status(500).send("Erro ao salvar os dados.");
            console.error(err);
            return;
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "marcelo.igrejadacidade@gmail.com",
                pass: "zlma ptbc miod rhne"
            }
        });
        transporter.verify((error, success) => {
            if (error) {
                console.error("Erro na configuração do transporte:", error);
            } else {
                console.log("Transporte de e-mail está pronto!");
            }
        });

        const mailOptions = {
            from: "dev.marcelojs@gmail.com",
            to: email,
            subject: "Obrigado pelo contato!",
            text: "Obrigado por entrar em contato, em breve um de nossos consultores te retornará."
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                res.status(500).send("Erro ao enviar o e-mail.");
            } else {
                res.send("Dados salvos e e-mail enviado com sucesso!");
            }
        });
    });
});


// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
