const mongoose = require("mongoose");

const previousRXSchema = new mongoose.Schema({
  patientId: {
    type: String,
    require : true
  },
  RSPH: {
    type: String,
  },
  RCYL: {
    type: String,
  },
  RAxis: {
    type: String,
  },
  RPrism: {
    type: String,
  },
  RDirection: {
    type: String,
  },
  RAdd: {
    type: String,
  },
  RVA: {
    type: String,
  },

  LSPH: {
    type: String,
  },
  LCYL: {
    type: String,
  },
  LAxis: {
    type: String,
  },
  LPrism: {
    type: String,
  },
  LDirection: {
    type: String,
  },
  LAdd: {
    type: String,
  },
  LVA: {
    type: String,
  },
  R2SPH: {
    type: String,
  },
  R2CYL: {
    type: String,
  },
  R2Axis: {
    type: String,
  },
  R2Prism: {
    type: String,
  },
  R2Direction: {
    type: String,
  },
  R2Add: {
    type: String,
  },
  R2VA: {
    type: String,
  },

  L2SPH: {
    type: String,
  },
  L2CYL: {
    type: String,
  },
  L2Axis: {
    type: String,
  },
  L2Prism: {
    type: String,
  },
  L2Direction: {
    type: String,
  },
  L2Add: {
    type: String,
  },
  L2VA: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("PreviousRX", previousRXSchema);
