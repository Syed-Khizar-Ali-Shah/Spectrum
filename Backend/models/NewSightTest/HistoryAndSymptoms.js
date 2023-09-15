const mongoose = require("mongoose");

const historyAndSymptomsSchema = new mongoose.Schema({
  patientID: {
    type: String,
    require: true,
  },
  reasonForVisit: {
    type: String,
    require: true,
  },
  POH: {
    type: String,
    require: true,
  },
  GH: {
    type: String,
    require: true,
  },
  medication: {
    type: String,
    require: true,
  },
  familyGeneralHealth: {
    type: String,
    require: true,
  },
  familyOccularHealth: {
    type: String,
    require: true,
  },
  thyroxine: {
    type: Boolean,
    required: true,
  },
  timolol: {
    type: String,
    required: true,
  },
  atenolol: {
    type: Boolean,
    require: true,
  },
  timoptol: {
    type: Boolean,
    require: true,
  },
  bendroflumethiazide: {
    type: Boolean,
    require: true,
  },
  xalatan: {
    type: Boolean,
    require: true,
  },
  bisoprololfumarate: {
    type: Boolean,
    require: true,
  },
  betoptic: {
    type: Boolean,
    require: true,
  },
  furosenide: {
    type: Boolean,
    require: true,
  },
  gliclazide: {
    type: Boolean,
    require: true,
  },
  insulin: {
    type: Boolean,
    require: true,
  },
  metforminHydrochiloride: {
    type: Boolean,
    require: true,
  },

  omeprazole: {
    type: Boolean,
    require: true,
  },
  ramipril: {
    type: Boolean,
    require: true,
  },

  statin: {
    type: Boolean,
    require: true,
  },

  patientHasGlucomaHS: {
    type: Boolean,
    require: true,
  },

  patientHasFamilyHistoryOfGlucoma: {
    type: Boolean,
    require: true,
  },

  patientHasDiabeticHS: {
    type: Boolean,
    require: true,
  },

  otherNotes: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("HistoryAndSymptoms", historyAndSymptomsSchema);
