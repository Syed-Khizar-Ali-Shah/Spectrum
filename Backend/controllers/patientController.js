// controllers/patientController.js
const Patient = require('../models/Patient');

const createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// controllers/patientController.js
const getAllPatients = async (req, res) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
// controllers/patientController.js
const updatePatient = async (req, res) => {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedPatient);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // controllers/patientController.js
const deletePatient = async (req, res) => {
    try {
      await Patient.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {createPatient, getAllPatients, updatePatient, deletePatient};
  
