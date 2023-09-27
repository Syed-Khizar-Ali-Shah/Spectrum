// controllers/previousRXController.js
const PreviousRX = require('../../models/PreviousRX');

// Controller functions
const getAllPreviousRX = async (req, res) => {
  try {
    const previousRXList = await PreviousRX.find({patientId : req.params.patientId});
    res.json(previousRXList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPreviousRX = async (req, res) => {

  try {
    const newPreviousRX = new PreviousRX(req.body);

    await newPreviousRX.save();
    res.status(201).json(newPreviousRX);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPreviousRX,
  createPreviousRX,
};
