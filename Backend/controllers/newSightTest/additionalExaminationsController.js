const AdditionalExaminations = require('../../models/NewSightTest/AdditionalExaminations');

// Create a new additional examinations record
const createAdditionalExaminations = async (req, res) => {
  try {
    const additionalExams = await AdditionalExaminations.create(req.body);
    res.status(201).json(additionalExams);
  } catch (error) {
    res.status(500).json({ error: 'Error creating additional examinations record' });
  }
};

// Get an additional examinations record by ID
const getAdditionalExaminations = async (req, res) => {
  try {
    const additionalExams = await AdditionalExaminations.findById(req.params.id);
    if (!additionalExams) {
      return res.status(404).json({ error: 'Additional examinations not found' });
    }
    res.json(additionalExams);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching additional examinations' });
  }
};

// Update an additional examinations record by ID
const updateAdditionalExaminations = async (req, res) => {
  try {
    const additionalExams = await AdditionalExaminations.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!additionalExams) {
      return res.status(404).json({ error: 'Additional examinations not found' });
    }
    res.json(additionalExams);
  } catch (error) {
    res.status(500).json({ error: 'Error updating additional examinations' });
  }
};

// Delete an additional examinations record by ID
const deleteAdditionalExaminations = async (req, res) => {
  try {
    const additionalExams = await AdditionalExaminations.findByIdAndRemove(req.params.id);
    if (!additionalExams) {
      return res.status(404).json({ error: 'Additional examinations not found' });
    }
    res.json({ message: 'Additional examinations deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting additional examinations' });
  }
};

module.exports = {
  createAdditionalExaminations,
  getAdditionalExaminations,
  updateAdditionalExaminations,
  deleteAdditionalExaminations,
};
