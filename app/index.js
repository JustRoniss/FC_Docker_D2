const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const configDb = {
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'db_desafio'
};

const connection = mysql.createConnection(configDb);
const query = `INSERT INTO people(name) values('Ronaldo');`;
connection.query(query);
connection.end();

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle - Docker: Desafio 2</h1>');
});

app.listen(port, ()=>{
    console.log("Aplicação iniciada na porta: " + port);
});