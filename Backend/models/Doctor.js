const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  availableDates: [
    {
      date: Date,
      times: [String], // Store available times for each date
    },
  ],
});

module.exports = mongoose.model('Doctor', doctorSchema);
