const db = require('../db');  // Connessione al database
const bcrypt = require('bcrypt');  // Importa la libreria bcrypt
const jwt = require('jsonwebtoken');  // Importa la libreria jsonwebtoken

const JWT_SECRET = 'foo';  

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

                    // Crea il token JWT
                    const token = jwt.sign(
                        { email, nickname },  // Payload del token
                        JWT_SECRET,            // Chiave segreta
                        { expiresIn: '1 day' } // Scadenza del token
                    );

                    // Imposta il token come cookie
                    res.cookie('authToken', token, {
                        httpOnly: true,  // Solo HTTP, non accessibile da JavaScript
                        secure: true,    // Imposta come secure se in produzione
                        maxAge: 86400000 // Durata del cookie in millisecondi (1 giorno)
                    });

                    // Risposta di successo con il token e il payload
                    res.status(201).json({ 
                        success: true, 
                        message: 'Registrazione completata con successo!',
                        nickname,
                        token,  // Restituisci il token JWT
                        payload: { email, nickname } // Restituisci il payload
                    });
                }
            );
        });
    });
};
