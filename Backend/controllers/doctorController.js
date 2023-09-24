// doctorController.js
const Doctor = require('../models/Doctor');

// Create a new doctor
exports.createDoctor = async (req, res) => {
    console.log(req.body);
    console.log("t",req.body.availableDates)
  try {
    const { name, availableDates } = req.body;

    // Validate the input data as needed

    const newDoctor = await Doctor.create({ name, availableDates });
    console.log("nd", newDoctor)
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAvailableDates = async (req, res) => {
    try {
      const { doctorId } = req.params;
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      // Extract available dates from the doctor's data
      const availableDates = doctor.availableDates.map((dateObj) => dateObj.date.toISOString().split('T')[0]);
      res.json(availableDates);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Get available time slots for a specific date and doctor
  exports.getAvailableTimeSlots = async (req, res) => {
    try {
      const { doctorId } = req.params;
      const { date } = req.query;
  
      const doctor = await Doctor.findById(doctorId);
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
  
      // Find the doctor's data for the selected date
      const selectedDateObj = doctor.availableDates.find((dateObj) =>
        dateObj.date.toISOString().split('T')[0] === date
      );
  
      if (!selectedDateObj) {
        return res.status(404).json({ error: 'Date not found for this doctor' });
      }
  
      // Extract available time slots for the selected date
      const availableTimeSlots = selectedDateObj.times;
      res.json(availableTimeSlots);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
