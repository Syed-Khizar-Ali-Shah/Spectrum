const mongoose = require("mongoose");

const newSightTestSchema = new mongoose.Schema({
  fullName: {
    type: String,
      
  },
  patientID: {
    type: String,
      
  },
  title: {
    type: String,
      
  },
  dob: {
    type: String,
      
  },
  age: {
    type: String,
      
  },
  patientCategory: {
    type: String,
      
  },
  occupation: {
    type: String,
      
  },
  address: {
    type: String,
      
  },
  mobile: {
    type: String,
      
  },
  email: {
    type: String,
      
  },
  benifits: {
    type: String,
      
  },
  driver: {
    type: Boolean,
      
  },
  diabetic: {
    type: Boolean,
      
  },
  glaucoma: {
    type: Boolean,
      
  },
  CLWearer: {
    type: Boolean,
      
  },
  date: {
    type: String,
      
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
  contactLense: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ContactLense",
    // required: true,
  },
});

module.exports = mongoose.model("NewSightTest", newSightTestSchema);
