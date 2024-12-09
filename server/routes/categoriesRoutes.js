const express = require('express');
const { getAllCategories } = require('../controllers/categoriesController');

const router = express.Router();

// Route per ottenere tutte le categorie
router.get('/', getAllCategories);

module.exports = router;
