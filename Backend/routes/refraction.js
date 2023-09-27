// routes/previousRXRoutes.js
const express = require('express');
const router = express.Router();
const refractionController = require('../controllers/newSightTest/refractionController');

// Define routes
router.get('/:patiendId', refractionController.getAllRefractions);
router.post('/', refractionController.createRefraction);

module.exports = router;
