const OccularExamination = require('../../models/NewSightTest/OccularExamination');

// Create a new occular examination record
const createOccularExamination = async (req, res) => {
  try {
    const occularExam = await OccularExamination.create(req.body);
    res.status(201).json(occularExam);
  } catch (error) {
    res.status(500).json({ error: 'Error creating occular examination record' });
  }
};

// Get an occular examination record by ID
const getOccularExamination = async (req, res) => {
  try {
    const occularExam = await OccularExamination.findById(req.params.id);
    if (!occularExam) {
      return res.status(404).json({ error: 'Occular examination not found' });
    }
    res.json(occularExam);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching occular examination' });
  }
};

// Update an occular examination record by ID
const updateOccularExamination = async (req, res) => {
  try {
    const occularExam = await OccularExamination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!occularExam) {
      return res.status(404).json({ error: 'Occular examination not found' });
    }
    res.json(occularExam);
  } catch (error) {
    res.status(500).json({ error: 'Error updating occular examination' });
  }
};

// Delete an occular examination record by ID
const deleteOccularExamination = async (req, res) => {
  try {
    const occularExam = await OccularExamination.findByIdAndRemove(req.params.id);
    if (!occularExam) {
      return res.status(404).json({ error: 'Occular examination not found' });
    }
    res.json({ message: 'Occular examination deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting occular examination' });
  }
};

module.exports = {
  createOccularExamination,
  getOccularExamination,
  updateOccularExamination,
  deleteOccularExamination,
};
