const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const vinylsRoutes = require('./routes/vinylsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();
const PORT = 3000;
app.use('/images', express.static('images'));
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve i file statici dalla cartella 'public' (immagini, stili, script, ecc.)
app.use(express.static(path.join(__dirname, '../public')));

// Servi l'index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Route per i vinili
app.use('/api/vinyls', vinylsRoutes);
app.use('/api/categories', categoriesRoutes);  // route delle categorie
 
// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});