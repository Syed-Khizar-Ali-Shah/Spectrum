// doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Create a new doctor
router.post('/', doctorController.createDoctor);

// Get all doctors
router.get('/', doctorController.getAllDoctors);

router.get('/:doctorId/available-dates', doctorController.getAvailableDates);

// Get available time slots for a specific date and doctor
router.get('/:doctorId/available-time-slots', doctorController.getAvailableTimeSlots);

module.exports = router;
