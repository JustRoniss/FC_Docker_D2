const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const configDb = {
    host: 'db',
    user: 'root',
    password: 'admin',
    database: 'db_desafio'
};

const pool = mysql.createPool(configDb);

const queryInsert = `INSERT INTO people(name) values('Ronaldo');`;
const querySelect = `SELECT * FROM people;`;


app.get('/', (req, res) => {


    pool.query(queryInsert, (err, results, fields) => {
        if(err){
            console.error("Erro ao inserir registro");
        }
        console.log('Registro inserido com sucesso: ', results.insertId);
    })

    pool.query(querySelect, (err, results) => {
        if(err){
            console.error("Erro ao consultar tabela");
            res.send("Erro ao consultar tabela");
            return;
        }

        let html = '<h1>Full Cycle Rocks!</h1> <br/> <h3>Você pode atualizar a página para criar um novo registro!<h3/> ';
        html += '<table border="1"><tr><th>ID</th><th>Nome</th></tr>';

        results.forEach(row => {
            html += `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
        });

        html += '</table>';
 
        res.send(html);
    })

});

app.listen(port, ()=>{
    console.log("Aplicação iniciada na porta: " + port);
});