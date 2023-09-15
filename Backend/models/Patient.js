const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  forename: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  address1: {
    type: String,
    require: true,
  },
  address2: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  postcode: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  landline: {
    type: Number,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  doctor: {
    type: String,
    require: true,
  },
  patientType: {
    type: String,
    require: true,
  },
  HC2orHC3Number: {
    type: String,
    require: true,
  },
  HC3PatientContribution: {
    type: String,
    require: true,
  },
  patientHasGlucoma: {
    type: Boolean,
    require: true,
  },
  patientHasDiabetic: {
    type: Boolean,
    require: true,
  },
  contactedBy: {
    type: Array,
    require: true,
  },
  promotionalCommunication: {
    type: Boolean,
    require: true,
  },
  notes: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
