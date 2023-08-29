// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);
//router.get('/patients/search', patientController.searchPatients);

module.exports = router;
