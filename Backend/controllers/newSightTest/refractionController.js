// controllers/previousRXController.js
const Refraction = require('../../models/AutoRefraction');

// Controller functions
const getAllRefractions = async (req, res) => {
  try {
    const refractions = await Refraction.find({patientId : req.params.patientId});
    res.json(refractions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createRefraction = async (req, res) => {

  try {
    const newRefraction = new Refraction(req.body);

    await newRefraction.save();
    res.status(201).json(newRefraction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllRefractions,
  createRefraction,
};
