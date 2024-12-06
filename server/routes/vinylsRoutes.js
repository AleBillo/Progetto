const express = require('express');
const { getAllVinyls } = require('../controllers/vinylsController');

const router = express.Router();

// Route per ottenere tutti i vinili
router.get('/', getAllVinyls);

module.exports = router;
