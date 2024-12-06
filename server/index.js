const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const vinylsRoutes = require('./routes/vinylsRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static('images'));


// Route per i vinili
app.use('/api/vinyls', vinylsRoutes);

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});
