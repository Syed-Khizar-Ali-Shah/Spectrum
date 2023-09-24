const mongoose = require('mongoose');

const bookAppointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor', // Reference to the Doctor model
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  patientId: {
     type : String,
  },
  reason : {
    type : String,
  }
});

module.exports = mongoose.model('BookAppointment', bookAppointmentSchema);
