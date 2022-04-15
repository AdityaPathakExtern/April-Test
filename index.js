const mysql = require('mysql2');
const express = require('express');
var app = express();

app.use(express.json());
const config = require('./config');
const { db: { host, user, password, database, multipleStatements }, app: { port } } = config;

var connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    multipleStatements: multipleStatements
});

connection.connect((err) => {
    if (!err)
        console.log('Database connected successfully');
    else
        console.log('Database connection failed' + JSON.stringify(err, undefined, 2));
});

app.listen(port, () => console.log('Express server started at port no : ' + port));