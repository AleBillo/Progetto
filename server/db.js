const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambia se necessario
    password: '', // Cambia se necessario
    database: 'billo_vinils_sql'
});

db.connect(err => {
    if (err) {
        console.error('Errore di connessione al database:', err);
    } else {
        console.log('Connesso al database MySQL!');
    }
});

module.exports = db;
