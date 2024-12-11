const db = require('../db');  // Importa la connessione al database

// Funzione che gestisce la logica del login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;  // Estrai email e password dalla richiesta

    // Query per cercare l'utente in base all'email
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).json({ success: false, message: 'Errore nel server' });
        }

        if (results.length === 0) {
            // Se non esiste l'utente con quella email, restituisci errore
            return res.status(401).json({ success: false, message: 'Email o password errati' });
        }

        const user = results[0];  // Ottieni il primo risultato (dato che l'email è unica)

        // Confronta la password in chiaro con quella nel database 
        if (password !== user.password) {
            return res.status(401).json({ success: false, message: 'Email o password errati' });
        }

        // Se il login è corretto, restituisci un messaggio di successo
        res.json({
            success: true,
            message: 'Login effettuato con successo',
            role: user.amministratore ? 'admin' : 'utente',
              // Restituisci il ruolo dell'utente
              nickname: user.nickname 
        });
    });
};
