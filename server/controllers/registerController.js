const db = require('../db');  // Connessione al database

// Funzione per registrare un nuovo utente
exports.registerUser = (req, res) => {
    const { email, nickname, password, nome, cognome } = req.body;

    // Verifica che non co siano campi vuoti
    if (!email || !nickname || !password || !nome || !cognome) {
        return res.status(400).json({ success: false, message: 'Tutti i campi sono obbligatori' });
    }

    // Inserisci i dati nel database
    db.query(
        'INSERT INTO users (email, nickname, password, name, surname) VALUES (?, ?, ?, ?, ?)',
        [email, nickname, password, nome, cognome],
        (err, results) => {
            if (err) {
                console.error('Errore nella query di registrazione:', err);
                return res.status(500).json({ success: false, message: 'Errore nel server' });
            }

            // Se la registrazione è andata a buon fine
            res.status(201).json({ success: true, message: 'Registrazione completata con successo!' });
        }
    );
};