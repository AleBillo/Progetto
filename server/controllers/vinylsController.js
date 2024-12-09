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


// Ottieni un singolo vinile per ID
const getVinylById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM vinyls WHERE id_vinyl = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Vinile non trovato' });
        } else {
            res.json(results[0]);
        }
    });
};

// Aggiungi un nuovo vinile
const addVinyl = (req, res) => {
    const { vinyl_name, artist, price, year, category_id, image_url } = req.body;
    const query = 'INSERT INTO vinyls (vinyl_name, artist, price, year, category_id, image_url) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [vinyl_name, artist, price, year, category_id, image_url], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else {
            res.status(201).json({
                id_vinyl: results.insertId,
                vinyl_name,
                artist,
                price,
                year,
                category_id,
                image_url
            });
        }
    });
};

// Modifica un vinile esistente
const updateVinyl = (req, res) => {
    const { id } = req.params;
    const { vinyl_name, artist, price, year, category_id, image_url } = req.body;
    const query = 'UPDATE vinyls SET vinyl_name = ?, artist = ?, price = ?, year = ?, category_id = ?, image_url = ? WHERE id_vinyl = ?';
    db.query(query, [vinyl_name, artist, price, year, category_id, image_url, id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Vinile non trovato' });
        } else {
            res.json({ message: 'Vinile aggiornato con successo' });
        }
    });
};

// Elimina un vinile
const deleteVinyl = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM vinyls WHERE id_vinyl = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            res.status(500).json({ error: 'Errore nel server' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Vinile non trovato' });
        } else {
            res.json({ message: 'Vinile eliminato con successo' });
        }
    });
};

// Esporta i metodi
module.exports = {
    getAllVinyls,
    getVinylById,
    addVinyl,
    updateVinyl,
    deleteVinyl
};