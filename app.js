const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const bd = "marthec"

// ==>> BANCO DE DADOS (189.4.234.108)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: bd
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// ==>> SERVIDOR
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });

// ==>> BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ==>> CORS
app.use(cors());

// ==>> EXPRESS

// === ROTAS === ROTAS === ROTAS === ROTAS === ROTAS === 

// === ROTAS DE PÁGINAS

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
  });
app.post('/visitantes', (req,res) => {
    const { nome, idade } = req.body;
    const query = `INSERT INTO visitante (nome, idade) VALUES (?, ?)`;
    db.query(query, [nome, idade], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao inserir dados no banco de dados');
        }
        res.sendFile(__dirname+'/index.html');
    });
})

// === ROTAS DE ARQUIVOS

app.get('/css',(req,res) => {
  res.sendFile(__dirname+'/src/styles/style.css')
})
app.get('/js',(req,res) => {
  res.sendFile(__dirname+'/src/scripts/script.js')
})

// === ROTAS DE ELEMENTOS

const logo = "logo_branca.svg";
app.get('/imgLogo',(req,res) => {
  res.sendFile(__dirname+`/img/${logo}`)
})

const bg_img = "fundo_section.jpg";
app.get('/bgSection',(req,res) => {
    res.sendFile(__dirname+`/img/${bg_img}`)
  })