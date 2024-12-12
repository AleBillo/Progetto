const db = require('../db'); // Connessione al database
const bcrypt = require('bcrypt'); // Importa la libreria bcrypt
const jwt = require('jsonwebtoken'); // Importa la libreria jsonwebtoken

const JWT_SECRET = 'foo'; // Cambia con una chiave più sicura e usa variabili d'ambiente

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    // Controlla se l'email esiste nel database
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).json({ success: false, message: 'Errore del server' });
        }

        if (results.length === 0) {
            // Nessun utente trovato con questa email
            return res.status(401).json({ success: false, message: 'Email o password errati' });
        }

        const user = results[0];

        try {
            // Confronta la password
            const correctPassword = await bcrypt.compare(password, user.password);

            if (correctPassword) {
                // Crea un token JWT
                const token = jwt.sign(
                    { 
                        email: user.email, 
                        nickname: user.nickname,
                        role: user.amministratore ? 'admin' : 'utente' 
                    },
                    JWT_SECRET,
                    { expiresIn: '1 day' }
                );
                

                // Imposta un cookie con il token
                res.cookie('authToken', token, {
                    httpOnly: true,  // Rendilo accessibile solo via HTTP, non JavaScript
                    secure: true,    // Imposta come secure se in produzione
                    maxAge: 86400000 // Durata del cookie in millisecondi (1 giorno)
                });

                // Login riuscito, restituisci il token nella risposta
                res.json({
                    success: true,
                    message: 'Login effettuato con successo',
                    role: user.amministratore ? 'admin' : 'utente',
                    nickname: user.nickname,
                    token: token // Restituisci il token nella risposta
                });
            } else {
                // Password errata
                res.status(401).json({ success: false, message: 'Email o password errati' });
            }
        } catch (err) {
            console.error('Errore durante la verifica della password:', err);
            res.status(500).json({ success: false, message: 'Errore del server durante il login' });
        }
    });
};
