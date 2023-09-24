const mongoose = require("mongoose");

const historyAndSymptomsSchema = new mongoose.Schema({
  patientID: {
    type: String,
    require : true
  },
  reasonForVisit: {
    type: String,
      
  },
  POH: {
    type: String,
      
  },
  GH: {
    type: String,
      
  },
  medication: {
    type: String,
      
  },
  familyGeneralHealth: {
    type: String,
      
  },
  familyOcularHealth: {
    type: String,
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
      
  },
  timoptol: {
    type: Boolean,
      
  },
  bendroflumethiazide: {
    type: Boolean,
      
  },
  xalatan: {
    type: Boolean,
      
  },
  bisoprololfumarate: {
    type: Boolean,
      
  },
  betoptic: {
    type: Boolean,
      
  },
  furosenide: {
    type: Boolean,
      
  },
  gliclazide: {
    type: Boolean,
      
  },
  insulin: {
    type: Boolean,
      
  },
  metforminHydrochiloride: {
    type: Boolean,
      
  },

  omeprazole: {
    type: Boolean,
      
  },
  ramipril: {
    type: Boolean,
      
  },

  statin: {
    type: Boolean,
      
  },

  patientHasGlucomaHS: {
    type: Boolean,
      
  },

  patientHasFamilyHistoryOfGlucoma: {
    type: Boolean,
      
  },

  patientHasDiabeticHS: {
    type: Boolean,
      
  },

  otherNotes: {
    type: String,
      
  },
});

module.exports = mongoose.model("HistoryAndSymptoms", historyAndSymptomsSchema);
