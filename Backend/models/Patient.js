const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  forename: {
    type: String,
  },
  surname: {
    type: String,
  },
  dob: {
    type: String,
  },
  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  postcode: {
    type: String,
  },
  email: {
    type: String,
  },
  landline: {
    type: String,
  },
  mobile: {
    type: String,
  },
  gender: {
    type: String,
  },
  doctor: {
    type: String,
  },
  patientType: {
    type: String,
  },
  HC2orHC3Number: {
    type: String,
  },
  HC3PatientContribution: {
    type: String,
  },
  patientHasGlucoma: {
    type: Boolean,
  },
  patientHasDiabetic: {
    type: Boolean,
  },
  contactedBy: {
    type: Array,
  },
  promotionalCommunication: {
    type: Boolean,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
