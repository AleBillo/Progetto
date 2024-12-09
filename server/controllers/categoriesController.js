const db = require('../db');

// Ottieni tutte le categorie
const getAllCategories = (req, res) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getAllCategories
};
