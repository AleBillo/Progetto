const express = require('express');
const cors = require('cors'); //middleware
const bodyParser = require('body-parser');
const path = require('path');
const vinylsRoutes = require('./routes/vinylsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');

const app = express();
const PORT = 3000;

app.use('/images', express.static('images'));

//creazione del middleware
app.use(cors());
app.use(bodyParser.json()); //richieste come json


app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.use('/api/vinyls', vinylsRoutes);
app.use('/api/categories', categoriesRoutes);  
app.use('/api', loginRoutes);  
app.use('/api', registerRoutes); //api/user

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});