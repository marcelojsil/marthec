// server.js
const express = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'marthec',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marcelo.igrejadacidade@gmail.com',
    pass: 'giopau2011',
  },
});

app.post('/api/submit', (req, res) => {
  const { nome, email, whatsapp } = req.body;

  // Insere os dados na tabela leed do banco de dados
  const query = 'INSERT INTO leed (nome, email, whatsapp) VALUES (?, ?, ?)';
  db.query(query, [nome, email, whatsapp], (err, result) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).json({ success: false, message: 'Erro ao inserir os dados' });
    } else {
      console.log('Dados inseridos com sucesso');

      // Envia o email para o administrador
      const mailOptionsAdmin = {
        from: 'noreplay@gmail.com',
        to: 'dev.marcelojs@gmail.com',
        subject: 'Novo Lead',
        text: `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}`,
      };

      // Envia o email para o usuário
      const mailOptionsUser = {
        from: 'seu_email@gmail.com',
        to: email,
        subject: 'Obrigado por se inscrever!',
        text: `Olá ${nome},\n\nObrigado por se inscrever! Entraremos em contato em breve.\n\nAtenciosamente,\nEquipe Marthec`,
      };

      transporter.sendMail(mailOptionsAdmin, (error, info) => {
        if (error) {
          console.error('Erro ao enviar email para o administrador:', error);
        } else {
          console.log('Email enviado para o administrador:', info.response);
        }
      });

      transporter.sendMail(mailOptionsUser, (error, info) => {
        if (error) {
          console.error('Erro ao enviar email para o usuário:', error);
        } else {
          console.log('Email enviado para o usuário:', info.response);
        }
      });

      res.status(200).json({ success: true, message: 'Formulário enviado com sucesso' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
