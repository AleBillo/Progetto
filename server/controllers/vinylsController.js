const db = require('../db');

// Ottieni tutti i vinili
const getAllVinyls = (req, res) => {
    const query = 'SELECT * FROM vinyls';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else {
            res.json(results);
        }
    });
};

// Esporta i metodi
module.exports = {
    getAllVinyls
};
