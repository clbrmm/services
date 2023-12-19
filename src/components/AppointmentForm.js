// src/components/AppointmentForm.js

import React, { useState } from 'react';

const AppointmentForm = () => {
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  // Add more state variables as needed

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="clientName">Client Name:</label>
        <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />

        <label htmlFor="selectedService">Select a Service:</label>
        <select
          id="selectedService"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          {/* Add options dynamically based on services data */}
        </select>

        {/* Add more form fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
