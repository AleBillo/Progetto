const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');  // Importa il controller

// Definisci la rotta per il login
router.post('/login', loginController.loginUser);  // La logica di login è nel controller

module.exports = router;
