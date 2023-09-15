const mongoose = require("mongoose");

const occularExaminationSchema = new mongoose.Schema({
  RELids: {
    type: String,
    require: true,
  },
  RELashes: {
    type: String,
    require: true,
  },
  REConjunctiva: {
    type: String,
    require: true,
  },
  RESclera: {
    type: String,
    require: true,
  },
  RECornea: {
    type: Number,
    require: true,
  },
  REAndCha: {
    type: String,
    require: true,
  },
  REIris: {
    type: String,
    require: true,
  },
  REPupils: {
    type: String,
    require: true,
  },
  RELense: {
    type: Number,
    require: true,
  },
  REPosChaa: {
    type: String,
    require: true,
  },
  RECDRatio: {
    type: String,
    require: true,
  },
  RENRR: {
    type: Boolean,
    require: true,
  },
  REMacular: {
    type: Boolean,
    require: true,
  },
  REAV: {
    type: Boolean,
    require: true,
  },
  REPeriphery: {
    type: Boolean,
    require: true,
  },
  REEye: {
    type: String,
    require: true,
  },
  RELens2: {
    type: Boolean,
    require: true,
  },
  REFundus: {
    type: Boolean,
    require: true,
  },
  LELids: {
    type: String,
    require: true,
  },
  LELashes: {
    type: String,
    require: true,
  },
  LEConjunctiva: {
    type: String,
    require: true,
  },
  LESclera: {
    type: String,
    require: true,
  },
  LECornea: {
    type: Number,
    require: true,
  },
  LEAndCha: {
    type: String,
    require: true,
  },
  LEAndChaEIris: {
    type: String,
    require: true,
  },
  LEPupils: {
    type: String,
    require: true,
  },
  LELense: {
    type: Number,
    require: true,
  },
  LEPosChaa: {
    type: String,
    require: true,
  },
  LECDRatio: {
    type: String,
    require: true,
  },
  LENRR: {
    type: Boolean,
    require: true,
  },
  LEMacular: {
    type: Boolean,
    require: true,
  },
  LEAV: {
    type: Boolean,
    require: true,
  },
  LEPeriphery: {
    type: Boolean,
    require: true,
  },
  LEEye: {
    type: String,
    require: true,
  },
  LELens2: {
    type: Boolean,
    require: true,
  },
  LEFundus: {
    type: Boolean,
    require: true,
  },
  ophthalmoscopyNotes: {
    type: String,
    require: true,
  },
  occularHealthExaminationMethods:{
    type:Array,
  
  }
});

module.exports = mongoose.model("OccularExamination", occularExaminationSchema);
