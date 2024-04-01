import React, { useState } from 'react';
import axios from 'axios';

const AddParkingSpace = () => {
  const [parkAreaDetails, setParkAreaDetails] = useState({
    parkAreaName: '',
    ownerId: '',
    ownerPhoneNumber: '',
    ownerName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    location: '',
    totalSlots: '',
    ratePerHour: '',
    facilitiesAvailable: '',
    parkAreaType: '',
  });

  const handleChange = (e) => {
    setParkAreaDetails({
      ...parkAreaDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://quikspot.vercel.app/api/admin/addParkArea',
        parkAreaDetails
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error adding park area:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Repeat this input field for each property in parkAreaDetails */}
      <input
        type="text"
        name="parkAreaName"
        value={parkAreaDetails.parkAreaName}
        onChange={handleChange}
        placeholder="Park Area Name"
      />
      {/* Add other input fields here */}
      <button type="submit">Add Park Area</button>
    </form>
  );
};

export default AddParkingSpace;
