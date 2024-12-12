const db = require('../db');  // Connessione al database
const bcrypt = require('bcrypt');  // Importa la libreria bcrypt

// Funzione per registrare un nuovo utente
exports.registerUser = (req, res) => {
    const { email, nickname, password, nome, cognome } = req.body;

    // Verifica che non ci siano campi vuoti
    if (!email || !nickname || !password || !nome || !cognome) {
        return res.status(400).json({ success: false, message: 'Tutti i campi sono obbligatori' });
    }

    // Controlla se l'email esiste già nel database
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => { 
        if (err) {
            console.error('Errore nella verifica dell\'email:', err);
            return res.status(500).json({ success: false, message: 'Errore nel server durante la verifica dell\'email' });
        }

        if (results.length > 0) {
            // L'email è già registrata
            return res.status(400).json({ success: false, message: 'Email già registrata. Usa un\'altra email.' });
        }

        // Hasha la password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Errore durante l\'hashing della password:', err);
                return res.status(500).json({ success: false, message: 'Errore nel server durante la registrazione' });
            }

            // Inserisci i dati nel database con la password hashata
            db.query(
                'INSERT INTO users (email, nickname, password, name, surname) VALUES (?, ?, ?, ?, ?)',
                [email, nickname, hashedPassword, nome, cognome],
                (err, results) => {
                    if (err) {
                        console.error('Errore nella query di registrazione:', err);
                        return res.status(500).json({ success: false, message: 'Errore nel server durante la registrazione' });
                    }

                    // Se la registrazione è andata a buon fine
                    res.status(201).json({ success: true, message: 'Registrazione completata con successo!' });
                }
            );
        });
    });
};
