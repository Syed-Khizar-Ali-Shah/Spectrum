// appointmentController.js
const Appointment = require('../models/BookAppointment');
const Doctor = require('../models/Doctor');

// Book an appointment
exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, time, patientId, reason } = req.body;

    // Create an appointment record and save it
    const appointment = new Appointment({
      doctorId,
      date,
      time,
      patientId, 
      reason,
    });

    await appointment.save();

    // Update the doctor's available time slots by removing the booked time
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    // Identify the date and time slot to remove
    const updatedAvailableDates = doctor.availableDates.map((availableDate) => {
      // Convert the doctor's date to match the appointment date format
      const doctorDate = availableDate.date.toISOString().substring(0, 10); // Format: 'yyyy-MM-dd'

      if (doctorDate === date) {
        // If the dates match, remove the time slot
        const updatedTimes = availableDate.times.filter((slot) => slot !== time);
        return { date: availableDate.date, times: updatedTimes };
      }
      return availableDate;
    });

    // Update the doctor's availableDates with the modified array
    doctor.availableDates = updatedAvailableDates;

    // Save the updated doctor data
    await doctor.save();

    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

