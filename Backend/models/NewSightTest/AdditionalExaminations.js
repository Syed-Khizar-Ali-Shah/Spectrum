const mongoose = require("mongoose");

const additionalExaminationsSchema = new mongoose.Schema({
  iop: {
    type: String,
    require: true,
  },
  R: {
    type: Array,
    require: true,
  },
  L: {
    type: Array,
    require: true,
  },
  distanceCTWithRX: {
    type: Array,
    require: true,
  },
  distanceCTWithoutRX: {
    type: Array,
    require: true,
  },
  nearCTWithRX: {
    type: Array,
    require: true,
  },
  nearCTWithoutRX: {
    type: Array,
    require: true,
  },
  OMBDistance: {
    type: Array,
    required: true,
  },
  OMBNear: {
    type: Array,
    require: true,
  },
  visualFields: {
    type: Array,
    require: true,
  },
  amsierChart: {
    type: Array,
    require: true,
  },
  drop: {
    type: String,
    require: true,
  },
  BN: {
    type: String,
    require: true,
  },
  expiryDate: {
    type: String,
    require: true,
  },
  postIOP: {
    type: Array,
    require: true,
  },
  motitlity: {
    type: String,
    require: true,
  },
  NPC: {
    type: String,
    require: true,
  },
  stereopsis: {
    type: String,
    require: true,
  },

  amplitudeOfAccommodation: {
    type: String,
    require: true,
  },
  colourVision: {
    type: Array,
    require: true,
  },

  keratometry: {
    type: Array,
    require: true,
  },
  notes: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model(
  "AdditionalExaminations",
  additionalExaminationsSchema
);
