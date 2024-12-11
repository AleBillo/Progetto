const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Rotta per registrare un nuovo utente
router.post('/users', registerController.registerUser);

module.exports = router;