const mongoose = require("mongoose");

const autoRefractionSchema = new mongoose.Schema({
  patientId : {
    type : String,
    require : true
  },
  previusRX1 : {
    type : Object,
  },
  previusRX2 : {
    type : Object,
  },
  retinoscopy : {
    type : Object,
  },
  subjectiveRX : {
    type : Object,
  },
  complexRX : {
    type : Object,
  },
  ModifiedRXGiven : {
    type : Boolean,
  },
  outcomes : {
    type : Array,
  },
  recommendations : {
    type : Array,
  },
  examinationComment : {
    type : String,
  },
  recall : {
    type : String,
  },
});

module.exports = mongoose.model("AutoRefraction", autoRefractionSchema);
