const express = require('express');
const router = express.Router();
const {
  createPatientInformation,
  getPatientInformation,
  updatePatientInformation,
  deletePatientInformation,
} = require('../controllers/newSightTest/patientInformationController');
const {
  createHistoryAndSymptoms,
  getHistoryAndSymptoms,
  updateHistoryAndSymptoms,
  deleteHistoryAndSymptoms,
} = require('../controllers/newSightTest/historyAndSymptomsController');
const {
  createOccularExamination,
  getOccularExamination,
  updateOccularExamination,
  deleteOccularExamination,
} = require('../controllers/newSightTest/occularExaminationController');
const {
  createAdditionalExaminations,
  getAdditionalExaminations,
  updateAdditionalExaminations,
  deleteAdditionalExaminations,
} = require('../controllers/newSightTest/additionalExaminationsController');

// Routes for PatientInformation
router.post('/patientInformation', createPatientInformation);
router.get('/patientInformation/:id', getPatientInformation);
router.put('/patientInformation/:id', updatePatientInformation);
router.delete('/patientInformation/:id', deletePatientInformation);

// Routes for HistoryAndSymptoms
router.post('/historyAndSymptoms/:patientID', createHistoryAndSymptoms);
router.get('/historyAndSymptoms/:id', getHistoryAndSymptoms);
router.put('/historyAndSymptoms/:id', updateHistoryAndSymptoms);
router.delete('/historyAndSymptoms/:id', deleteHistoryAndSymptoms);

// Routes for OccularExamination
router.post('/occularExamination', createOccularExamination);
router.get('/occularExamination/:id', getOccularExamination);
router.put('/occularExamination/:id', updateOccularExamination);
router.delete('/occularExamination/:id', deleteOccularExamination);

// Routes for AdditionalExaminations
router.post('/additionalExaminations', createAdditionalExaminations);
router.get('/additionalExaminations/:id', getAdditionalExaminations);
router.put('/additionalExaminations/:id', updateAdditionalExaminations);
router.delete('/additionalExaminations/:id', deleteAdditionalExaminations);

module.exports = router;
