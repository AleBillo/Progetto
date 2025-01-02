const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');


router.post('/users', registerController.registerUser);

module.exports = router;