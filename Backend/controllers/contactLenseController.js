const ContactLense = require('../models/ContactLense'); // Adjust the path as needed
const NewSightTest = require('../models/NewSightTest/NewSightTest');

// Create a new contact lens entry
exports.createContactLense = async (req, res) => {
  try {
    const newCL = new ContactLense(req.body);
    await newCL.save();
    console.log("1");

    const patientInfo = await NewSightTest.findOne({ patientID: req.params.patientID });
    if (!patientInfo) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Update patientInfo with the historyAndSymptoms ID
    patientInfo.contactLense = newCL._id;
    await patientInfo.save(); // Save the updated patientInfo

    res.status(201).json(newCL);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error creating new Contact Lense' });
  }
};

// Get a list of all contact lens entries
exports.getAllContactLenses = async (req, res) => {
  try {
    const contactLenses = await ContactLense.find();
    res.status(200).json(contactLenses);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single contact lens entry by ID
exports.getContactLenseById = async (req, res) => {
  try {
    const contactLense = await ContactLense.findOne({patientId : req.params.patientID});
    if (!contactLense) {
      return res.status(404).json({ error: 'Contact lens not found' });
    }
    res.status(200).json(contactLense);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a contact lens entry by ID
exports.updateContactLense = async (req, res) => {
  console.log("b", req.body);
  try {
    const contactLense = await ContactLense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log('1')
    if (!contactLense) {
      return res.status(404).json({ error: 'Contact lens not found' });
    }
   
    res.status(200).json(contactLense);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a contact lens entry by ID
exports.deleteContactLense = async (req, res) => {
  try {
    const contactLense = await ContactLense.findByIdAndDelete(req.params.id);
    if (!contactLense) {
      return res.status(404).json({ error: 'Contact lens not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
