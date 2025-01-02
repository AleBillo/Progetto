const express = require('express');
const { getAllCategories } = require('../controllers/categoriesController');

const router = express.Router();


router.get('/', getAllCategories);

module.exports = router;
