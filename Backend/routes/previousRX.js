// routes/previousRXRoutes.js
const express = require('express');
const router = express.Router();
const previousRXController = require('../controllers/newSightTest/previousRX');

// Define routes
router.get('/:patiendId', previousRXController.getAllPreviousRX);
router.post('/', previousRXController.createPreviousRX);

module.exports = router;
