const NewSightTest = require('../../models/NewSightTest/NewSightTest');
const OccularExamination = require('../../models/NewSightTest/OccularExamination');

// Create a new occular examination record
const createOccularExamination = async (req, res) => {
  console.log(req.body)
  console.log("b", req.body, "p", req.params.patientID);

  try {
    const occularExamination = new OccularExamination(req.body);
    await occularExamination.save();
    console.log("1");

    // const patientInfo = await NewSightTest.findOne({ patientID: req.params.patientID });
    // if (!patientInfo) {
    //   return res.status(404).json({ error: 'Patient not found' });
    // }

    // // Update patientInfo with the historyAndSymptoms ID
    // patientInfo.occularExaminations = occularExamination._id;
    // await patientInfo.save(); // Save the updated patientInfo

    res.status(201).json(occularExamination);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error creating occular examination.' });
  }
};

// Get an occular examination record by ID
const getOccularExamination = async (req, res) => {
  console.log("pid", req.params.id)
  try {
    const occularExam = await OccularExamination.findOne({patientID: req.params.id});
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
  console.log('param', req.params.id);
try {
  const occularExamination = await OccularExamination.findByIdAndUpdate(req.params.id, req.body, {new : true});

  if (!occularExamination) {
    console.log("not");
    return res.status(404).json({ error: 'occular Examination not found' });
  }

  // const updatedOccularExamination = [];

  // for (const examination of occularExamination) {
   // const updatedExamination = await OccularExamination.findByIdAndUpdate(occularExamination._id, req.body, { new: true });
    // updatedOccularExamination.push(updatedExamination);
  // }

  // Now, updatedHistoryAndSymptoms contains an array of updated documents.
  console.log('Updated occular Examinations:', occularExamination);

  // You can return the updated documents or a success response as needed.
  return res.status(200).json({ message: 'occular Examination updated successfully', occularExamination });
} catch (error) {
  console.error('Error:', error);
  return res.status(500).json({ error: 'Internal server error' });
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
