const express = require('express');
const { 
    getAllVinyls, 
    getVinylById, 
    addVinyl, 
    updateVinyl, 
    deleteVinyl 
} = require('../controllers/vinylsController'); //richiamo i metodi creati nel controller e li associo

const router = express.Router(); //crro un router 

//associo a tutte le chiamate HTTP una rotta ed un metodo
router.get('/', getAllVinyls); 


router.get('/:id', getVinylById);


router.post('/', addVinyl);


router.put('/:id', updateVinyl);


router.delete('/:id', deleteVinyl);

module.exports = router; //esporto per essere visualizzato da file esterni (index.js)
