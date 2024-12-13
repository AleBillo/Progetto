const db = require('../db');  
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');  

const JWT_SECRET = 'foo';  


exports.registerUser = (req, res) => {
    const { email, nickname, password, nome, cognome } = req.body;

  
    if (!email || !nickname || !password || !nome || !cognome) {
        return res.status(400).json({ success: false, message: 'Tutti i campi sono obbligatori' });
    }

 
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => { 
        if (err) {
            console.error('Errore nella verifica dell\'email:', err);
            return res.status(500).json({ success: false, message: 'Errore nel server durante la verifica dell\'email' });
        }

        if (results.length > 0) {
            
            return res.status(400).json({ success: false, message: 'Email già registrata. Usa un\'altra email.' });
        }

        
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Errore durante l\'hashing della password:', err);
                return res.status(500).json({ success: false, message: 'Errore nel server durante la registrazione' });
            }

           
            db.query(
                'INSERT INTO users (email, nickname, password, name, surname) VALUES (?, ?, ?, ?, ?)',
                [email, nickname, hashedPassword, nome, cognome],
                (err, results) => {
                    if (err) {
                        console.error('Errore nella query di registrazione:', err);
                        return res.status(500).json({ success: false, message: 'Errore nel server durante la registrazione' });
                    }

                    
                    const token = jwt.sign(
                        { email, nickname },  
                        JWT_SECRET,         
                        { expiresIn: '1 day' } 
                    );

                 
                    res.cookie('authToken', token, {
                        httpOnly: true,  
                        secure: true,    
                        maxAge: 86400000 
                    });

                   
                    res.status(201).json({ 
                        success: true, 
                        message: 'Registrazione completata con successo!',
                        nickname,
                        token,  
                        payload: { email, nickname } 
                    });
                }
            );
        });
    });
};
