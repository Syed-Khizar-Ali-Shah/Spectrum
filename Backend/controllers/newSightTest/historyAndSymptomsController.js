const HistoryAndSymptoms = require('../../models/NewSightTest/HistoryAndSymptoms');
const NewSightTest = require('../../models/NewSightTest/NewSightTest');

// Create a new history and symptoms record
const createHistoryAndSymptoms = async (req, res) => {
  console.log("b", req.body, "p", req.params.patientID);

  try {
    const historySymptoms = new HistoryAndSymptoms(req.body);
    await historySymptoms.save();
    console.log("1");

    const patientInfo = await NewSightTest.findOne({ patientID: req.params.patientID });
    if (!patientInfo) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Update patientInfo with the historyAndSymptoms ID
    patientInfo.historyAndSymptoms = historySymptoms._id;
    await patientInfo.save(); // Save the updated patientInfo

    res.status(201).json(historySymptoms);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error creating history and symptoms record' });
  }
};


// Get a history and symptoms record by ID
const getHistoryAndSymptoms = async (req, res) => {
  try {
    const historySymptoms = await HistoryAndSymptoms.findById(req.params.id);
    if (!historySymptoms) {
      return res.status(404).json({ error: 'History and symptoms not found' });
    }
    res.json(historySymptoms);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching history and symptoms' });
  }
};

// Update a history and symptoms record by ID
const updateHistoryAndSymptoms = async (req, res) => {
  try {
    const historySymptoms = await HistoryAndSymptoms.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!historySymptoms) {
      return res.status(404).json({ error: 'History and symptoms not found' });
    }
    res.json(historySymptoms);
  } catch (error) {
    res.status(500).json({ error: 'Error updating history and symptoms' });
  }
};

// Delete a history and symptoms record by ID
const deleteHistoryAndSymptoms = async (req, res) => {
  try {
    const historySymptoms = await HistoryAndSymptoms.findByIdAndRemove(req.params.id);
    if (!historySymptoms) {
      return res.status(404).json({ error: 'History and symptoms not found' });
    }
    res.json({ message: 'History and symptoms deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting history and symptoms' });
  }
};

module.exports = {
  createHistoryAndSymptoms,
  getHistoryAndSymptoms,
  updateHistoryAndSymptoms,
  deleteHistoryAndSymptoms,
};
