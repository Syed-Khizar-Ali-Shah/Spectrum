const mongoose = require("mongoose");

const contactLenseSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  patientId: {
    type: String,
  },
  history: {
    type: String,
  },
  medication: {
    type: String,
  },
  allergies: {
    type: String,
  },
  VDU: {
    type: Boolean,
  },
  driver: {
    type: Boolean,
  },
  smoker: {
    type: Boolean,
  },
  lashes: {
    type: String,
  },
  cornea: {
    type: String,
  },
  conjunctiva: {
    type: String,
  },
  tearFilm: {
    type: String,
  },
  limbus: {
    type: String,
  },
  neovascularisation: {
    type: String,
  },
  fluorescein: {
    type: String,
  },
  notes: {
    type: String,
  },
  REH: {
    type: String,
  },
  REV: {
    type: String,
  },
  LEH: {
    type: String,
  },
  LEV: {
    type: String,
  },
  position: {
    type: String,
  },
  movement: {
    type: String,
  },
  notes: {
    type: String,
  },
  REVA: {
    type: String,
  },
  REOVER: {
    type: String,
  },
  REVA: {
    type: String,
  },
  RENVA: {
    type: String,
  },
  LEVA: {
    type: String,
  },
  LEOVER: {
    type: String,
  },
  LEVA: {
    type: String,
  },
  LENVA: {
    type: String,
  },
  BVA: {
    type: String,
  },
  BNV: {
    type: String,
  },
  RESPH: {
    type: String,
  },
  RECYL: {
    type: String,
  },
  REAXIS: {
    type: String,
  },
  READD: {
    type: String,
  },
  REBC: {
    type: String,
  },
  REDiameter: {
    type: String,
  },
  LESPH: {
    type: String,
  },
  LECYL: {
    type: String,
  },
  LEAXIS: {
    type: String,
  },
  LEADD: {
    type: String,
  },
  LEBC: {
    type: String,
  },
  LEDiameter: {
    type: String,
  },

  trial: {
    type: Boolean,
  },
  revenue: {
    type: Boolean,
  },
  solutions: {
    type: String,
  },
  lenseTypeRE: {
    type: String,
  },
  lenseTypeLE: {
    type: String,
  },
  recall: {
    type: String,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("ContactLense", contactLenseSchema);
