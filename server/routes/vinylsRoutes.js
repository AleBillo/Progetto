const express = require('express');
const { 
    getAllVinyls, 
    getVinylById, 
    addVinyl, 
    updateVinyl, 
    deleteVinyl 
} = require('../controllers/vinylsController');

const router = express.Router();


router.get('/', getAllVinyls);


router.get('/:id', getVinylById);


router.post('/', addVinyl);


router.put('/:id', updateVinyl);


router.delete('/:id', deleteVinyl);

module.exports = router;
