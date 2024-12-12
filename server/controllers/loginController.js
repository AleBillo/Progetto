const db = require('../db');  // Connessione al database

const bcrypt = require('bcrypt');

exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    // Controlla se l'email esiste nel database
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).json({ success: false, message: 'Errore del server' });
        }
        if (results.length === 0) {
            // Nessun utente trovato con questa email
            return res.status(401).json({ success: false, message: 'Email o password errati' });
        }

        const user = results[0];

        const correctPassword = bcrypt.compare(password, user.password)
      

        if(correctPassword){
        // Login riuscito
        res.json({
            success: true,
            message: 'Login effettuato con successo',
            role: user.amministratore ? 'admin' : 'utente',
            nickname: user.nickname
        })}
         else{
            res.json({
                success: false,
                message: 'Login non effettuato con successo',
                role: user.amministratore ? 'admin' : 'utente',
                nickname: user.nickname
            });
        }

    });
 
};
