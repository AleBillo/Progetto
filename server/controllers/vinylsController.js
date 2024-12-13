const db = require('../db');


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


module.exports = {
    getAllVinyls,
    getVinylById,
    addVinyl,
    updateVinyl,
    deleteVinyl
};