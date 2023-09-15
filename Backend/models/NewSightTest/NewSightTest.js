const mongoose = require("mongoose");

const newSightTestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  patientID: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  patientCategory: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  benifits: {
    type: String,
    require: true,
  },
  driver: {
    type: Boolean,
    require: true,
  },
  diabetic: {
    type: Boolean,
    require: true,
  },
  glaucoma: {
    type: Boolean,
    require: true,
  },
  CLWearer: {
    type: Boolean,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  // patient: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Patient",
  //   required: true,
  // },
  historyAndSymptoms: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HistoryAndSymptoms",
    // required: true,
  },
  occularExaminations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OccularExamination",
    // required: true,
  },
  additionalExaminations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AdditionalExaminations",
    // required: true,
  },
});

module.exports = mongoose.model("NewSightTest", newSightTestSchema);
