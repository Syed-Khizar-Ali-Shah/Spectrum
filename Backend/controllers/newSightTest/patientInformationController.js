const NewSightTest = require('../../models/NewSightTest/NewSightTest');

// Create a new patient information record
const createPatientInformation = async (req, res) => {
  console.log('p', req.body)
  try {
    const patientInfo = new NewSightTest(req.body);
    await patientInfo.save();
    res.status(201).json(patientInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error creating patient information record' });
  }
};

// Get a patient information record by ID
const getPatientInformation = async (req, res) => {
  try {
    const patientInfo = await NewSightTest.findById(req.params.id);
    if (!patientInfo) {
      return res.status(404).json({ error: 'Patient information not found' });
    }
    res.json(patientInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patient information' });
  }
};

// Update a patient information record by ID
const updatePatientInformation = async (req, res) => {
  try {
    const patientInfo = await NewSightTest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!patientInfo) {
      return res.status(404).json({ error: 'Patient information not found' });
    }
    res.json(patientInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error updating patient information' });
  }
};

// Delete a patient information record by ID
const deletePatientInformation = async (req, res) => {
  try {
    const patientInfo = await NewSightTest.findByIdAndRemove(req.params.id);
    if (!patientInfo) {
      return res.status(404).json({ error: 'Patient information not found' });
    }
    res.json({ message: 'Patient information deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting patient information' });
  }
};

module.exports = {
  createPatientInformation,
  getPatientInformation,
  updatePatientInformation,
  deletePatientInformation,
};
