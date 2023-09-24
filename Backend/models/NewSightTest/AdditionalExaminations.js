const mongoose = require("mongoose");

const additionalExaminationsSchema = new mongoose.Schema({
  patientID: {
    type: String,
    require : true
  },
  iop: {
    type: String,
      
  },
  R: {
    type: Array,
      
  },
  L: {
    type: Array,
      
  },
  distanceCTWithRX: {
    type: Array,
      
  },
  distanceCTWithoutRX: {
    type: Array,
      
  },
  nearCTWithRX: {
    type: Array,
      
  },
  nearCTWithoutRX: {
    type: Array,
      
  },
  OMBDistance: {
    type: Array,
    required: true,
  },
  OMBNear: {
    type: Array,
      
  },
  visualFields: {
    type: Array,
      
  },
  amsierChart: {
    type: Array,
      
  },
  drop: {
    type: String,
      
  },
  BN: {
    type: String,
      
  },
  expiryDate: {
    type: String,
      
  },
  postIOP: {
    type: Array,
      
  },
  motitlity: {
    type: String,
      
  },
  NPC: {
    type: String,
      
  },
  stereopsis: {
    type: String,
      
  },

  amplitudeOfAccommodation: {
    type: String,
      
  },
  colourVision: {
    type: Array,
      
  },

  keratometry: {
    type: Array,
      
  },
  notes: {
    type: String,
      
  },
});

module.exports = mongoose.model(
  "AdditionalExaminations",
  additionalExaminationsSchema
);
