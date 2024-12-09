const express = require('express');
const { 
    getAllVinyls, 
    getVinylById, 
    addVinyl, 
    updateVinyl, 
    deleteVinyl 
} = require('../controllers/vinylsController');

const router = express.Router();

// Route per ottenere tutti i vinili
router.get('/', getAllVinyls);

// Route per ottenere un vinile per ID
router.get('/:id', getVinylById);

// Route per aggiungere un nuovo vinile
router.post('/', addVinyl);

// Route per aggiornare un vinile
router.put('/:id', updateVinyl);

// Route per eliminare un vinile
router.delete('/:id', deleteVinyl);

module.exports = router;
