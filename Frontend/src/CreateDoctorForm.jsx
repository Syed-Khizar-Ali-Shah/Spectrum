import React, { useState } from 'react';
import axios from 'axios';
import './CreateDoctorForm.css'; // Import the CSS file
import { baseUrl } from './utils/data';

function CreateDoctorForm() {
  // ... (Rest of the component code)
  const [doctorName, setDoctorName] = useState('');
  const [datesAndTimes, setDatesAndTimes] = useState([
    { date: '', times: [''] }, // Initial state with one date and one time slot
  ]);

  const handleAddDate = () => {
    setDatesAndTimes([...datesAndTimes, { date: '', times: [''] }]);
  };

  const handleRemoveDate = (index) => {
    const updatedDatesAndTimes = [...datesAndTimes];
    updatedDatesAndTimes.splice(index, 1);
    setDatesAndTimes(updatedDatesAndTimes);
  };

  const handleAddTime = (dateIndex) => {
    const updatedDatesAndTimes = [...datesAndTimes];
    updatedDatesAndTimes[dateIndex].times.push('');
    setDatesAndTimes(updatedDatesAndTimes);
  };

  const handleRemoveTime = (dateIndex, timeIndex) => {
    const updatedDatesAndTimes = [...datesAndTimes];
    updatedDatesAndTimes[dateIndex].times.splice(timeIndex, 1);
    setDatesAndTimes(updatedDatesAndTimes);
  };

  const handleDateChange = (dateIndex, event) => {
    const updatedDatesAndTimes = [...datesAndTimes];
    updatedDatesAndTimes[dateIndex].date = event.target.value;
    setDatesAndTimes(updatedDatesAndTimes);
  };

  const handleTimeChange = (dateIndex, timeIndex, event) => {
    const updatedDatesAndTimes = [...datesAndTimes];
    updatedDatesAndTimes[dateIndex].times[timeIndex] = event.target.value;
    setDatesAndTimes(updatedDatesAndTimes);
  };

  const handleCreateDoctor = () => {
    // Send a POST request to create the doctor
    

      let dataToSend = {
        name: doctorName,
        availableDates: datesAndTimes,
      }

      console.log("test2", dataToSend)
   
    axios
      .post(`${baseUrl}/api/doctor`, dataToSend)
      .then((response) => {
        console.log(response.data); // Handle success
        alert("Doctor info saved.")
      })
      .catch((error) => {
        console.error(error); // Handle error
        alert('Something went wrong')
      });
  };

  return (
    <div className="create-doctor-form">
      <h2 className='dfh2'>Create a New Doctor</h2>
      <label className='dflabel'>
        Doctor Name:
        <input
          type="text"
          className="dfinput"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
      </label>
      {datesAndTimes.map((dateAndTime, dateIndex) => (
        <div key={dateIndex} className="date-time-container">
          <label className='dflabel'>
            Date:
            <input
              type="date"
              className="dfinput"
              value={dateAndTime.date}
              onChange={(e) => handleDateChange(dateIndex, e)}
            />
          </label>
          <button onClick={() => handleRemoveDate(dateIndex)} className="remove-date-button">
            Remove Date
          </button>
          {dateAndTime.times.map((time, timeIndex) => (
            <div key={timeIndex} className="time-slot-container">
              <label className='dflabel'>
                Time Slot:
                <input
                  type="time"
                  className="dfinput"
                  value={time}
                  onChange={(e) => handleTimeChange(dateIndex, timeIndex, e)}
                />
              </label>
              <button onClick={() => handleRemoveTime(dateIndex, timeIndex)} className="remove-time-button">
                Remove Time
              </button>
            </div>
          ))}
          <button onClick={() => handleAddTime(dateIndex)} className="add-time-button">
            Add Time Slot
          </button>
        </div>
      ))}
      <button onClick={handleAddDate} className="add-date-button">
        Add Date
      </button>
      <button onClick={handleCreateDoctor} className="create-doctor-button">
        Create Doctor
      </button>
    </div>
  );
}

export default CreateDoctorForm;
