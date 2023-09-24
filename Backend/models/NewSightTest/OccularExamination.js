const mongoose = require("mongoose");

const occularExaminationSchema = new mongoose.Schema({
  patientID: {
    type: String,
    require : true
  },
  RELids: {
    type: String,
     
  },
  RELashes: {
    type: String,
     
  },
  REConjunctiva: {
    type: String,
     
  },
  RESclera: {
    type: String,
     
  },
  RECornea: {
    type: String,
     
  },
  REAndCha: {
    type: String,
     
  },
  REIris: {
    type: String,
     
  },
  REPupils: {
    type: String,
     
  },
  RELense: {
    type: String,
     
  },
  REPosChaa: {
    type: String,
     
  },
  RECDRatio: {
    type: String,
     
  },
  RENRR: {
    type: String,
     
  },
  REMacular: {
    type: String,
     
  },
  REAV: {
    type: String,
     
  },
  REPeriphery: {
    type: String,
     
  },
  REEye: {
    type: String,
     
  },
  RELens2: {
    type: String,
     
  },
  REFundus: {
    type: String,
     
  },
  LELids: {
    type: String,
     
  },
  LELashes: {
    type: String,
     
  },
  LEConjunctiva: {
    type: String,
     
  },
  LESclera: {
    type: String,
     
  },
  LECornea: {
    type: String,
     
  },
  LEAndCha: {
    type: String,
     
  },
  LEIris: {
    type: String,
     
  },
  LEPupils: {
    type: String,
     
  },
  LELense: {
    type: String,
     
  },
  LEPosChaa: {
    type: String,
     
  },
  LECDRatio: {
    type: String,
     
  },
  LENRR: {
    type: String,
     
  },
  LEMacular: {
    type: String,
     
  },
  LEAV: {
    type: String,
     
  },
  LEPeriphery: {
    type: String,
     
  },
  LEEye: {
    type: String,
     
  },
  LELens2: {
    type: String,
     
  },
  LEFundus: {
    type: String,
     
  },
  ophthalmoscopyNotes: {
    type: String,
     
  },
  occularHealthExaminationMethods:
     {
      slitLamp: Boolean,
      directOpthalmoscope: Boolean,
      OCT : Boolean,
      volk: Boolean,
      fundusImaging : Boolean,
     }
});

module.exports = mongoose.model("OccularExamination", occularExaminationSchema);
