const db = require('../db'); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

const JWT_SECRET = 'foo'; 
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

 
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Errore nella query:', err);
            return res.status(500).json({ success: false, message: 'Errore del server' });
        }

        if (results.length === 0) {
            
            return res.status(401).json({ success: false, message: 'Email o password errati' });
        }

        const user = results[0];

        try {
            
            const correctPassword = await bcrypt.compare(password, user.password);

            if (correctPassword) {
                
                const token = jwt.sign(
                    { 
                        email: user.email, 
                        nickname: user.nickname,
                        role: user.amministratore ? 'admin' : 'utente' 
                    },
                    JWT_SECRET,
                    { expiresIn: '1 day' }
                );
                

               
                res.cookie('authToken', token, {
                    httpOnly: true,  
                    secure: true,   
                    maxAge: 86400000 
                });

                
                res.json({
                    success: true,
                    message: 'Login effettuato con successo',
                    role: user.amministratore ? 'admin' : 'utente',
                    nickname: user.nickname,
                    token: token 
                });
            } else {
       
                res.status(401).json({ success: false, message: 'Email o password errati' });
            }
        } catch (err) {
            console.error('Errore durante la verifica della password:', err);
            res.status(500).json({ success: false, message: 'Errore del server durante il login' });
        }
    });
};
