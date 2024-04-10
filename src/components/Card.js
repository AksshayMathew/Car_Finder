import React from "react";
import "./Card.css"; // Import the CSS file for styling

const sampleArea = {
    address: "Sunrise Apartments",
    city: "Thiruvananthapuram",
    district: "Trivandrum",
    email: "john.doe@example.com",
    estimatedCapacity: 15,
    expectedPricePerHour: 25,
    facilitiesAvailable: ["WiFi", "Air Conditioning", "Restroom"],
    location: { latitude: 8.524139, longitude: 76.936638 },
    name: "John Doe",
    parkSpaceName: "Sunrise Parking",
    parkSpaceType: "Shared",
    phoneNumber: 9876543210,
    pincode: 695014,
    state: "Kerala",
    street: "MG Road",
    userId: "6610b6059c58380722d14a59",
  };
  
  const Card = ({
    area,
    editingAreaId,
    handleAccept,
    handleReject,
    handleEdit,
    handleSave,
  }) => {
    return (
      <div className="card-container">
        <div className="card">
          <img src="Parking4.jpg" alt="Parking img" />
          <div className="info">
            {editingAreaId === area.userId ? (
              <div className="input-fields">
                <input
                  type="text"
                  defaultValue={area.name}
                  onChange={(e) => (area.name = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.address}
                  onChange={(e) => (area.address = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.pincode}
                  onChange={(e) => (area.pincode = e.target.value)}   
                />
                <input
                  type="text"
                  defaultValue={area.email}
                  onChange={(e) => (area.email = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.phoneNumber}
                  onChange={(e) => (area.phoneNumber = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.expectedPricePerHour}
                  onChange={(e) => (area.expectedPricePerHour = e.target.value)}
                />
                <input 
                  type="text"
                  defaultValue={area.parkSpaceType}
                  onChange={(e) => (area.parkSpaceType = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.parkSpaceName}
                  onChange={(e) => (area.parkSpaceName = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.location.latitude}
                  onChange={(e) => (area.location.latitude = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.location.longitude}
                  onChange={(e) => (area.location.longitude = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.street}
                  onChange={(e) => (area.street = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.district}
                  onChange={(e) => (area.district = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.city}
                  onChange={(e) => (area.city = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.state}
                  onChange={(e) => (area.state = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.estimatedCapacity}
                  onChange={(e) => (area.estimatedCapacity = e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={area.facilitiesAvailable.join(", ")}
                  onChange={(e) =>
                    (area.facilitiesAvailable = e.target.value.split(", "))
                  }
                />
             

              </div>
            ) : (
              <div className="data-fields">
                <div>
                  <h2>{area.name}</h2>
                  <p>Location: {area.address}</p>
                  <p>Pin code: {area.pincode}</p>
                  <p>Email: {area.email}</p>
                  <p>Phone: {area.phoneNumber}</p>
                <p>Expected Price Per Hour: {area.expectedPricePerHour}</p>
                <p>Park Space Type: {area.parkSpaceType}</p>
                <p>Park Space Name: {area.parkSpaceName}</p>
                <p>Location: {area.location.latitude}, {area.location.longitude}</p>
                <p>Street: {area.street}</p>
                <p>District: {area.district}</p>
                <p>City: {area.city}</p>
                  <p>State: {area.state}</p>
                  <p>Estimated Capacity: {area.estimatedCapacity}</p>
                  <p>Facilities Available:</p>
                  <ul>
                    {area.facilitiesAvailable.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                  
                
                </div>
                <div>
                 
                  <p>Owner ID: {area.userId}</p>
                  <p>Owner Name: {area.name}</p>
                  <p>Owner Phone Number: {area.phoneNumber}</p>
                  <p>Owner Email: {area.email}</p>
                  <p>Owner Address: {area.address}</p>
                  <p>Owner City: {area.city}</p>
                  <p>Owner State: {area.state}</p>
                  <p>Owner Pincode: {area.pincode}</p>
                  <p>Owner Location: {area.location.latitude}, {area.location.longitude}</p>
                  <p>Owner Street: {area.street}</p>
                  <p>Owner District: {area.district}</p>
                  <p>Owner Park Space Name: {area.parkSpaceName}</p>
                  <p>Owner Park Space Type: {area.parkSpaceType}</p>
                  <p>Owner Expected Price Per Hour: {area.expectedPricePerHour}</p>
                  <p>Owner Estimated Capacity: {area.estimatedCapacity}</p>
                
                
                </div>
              </div>
            )}
            <div className="buttons">
              <button onClick={() => handleAccept(area)}>Accept</button>
              <button onClick={() => handleReject(area)}>Reject</button>
              {editingAreaId === area.userId ? (
                <button onClick={() => handleSave(area)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(area.userId)}>Edit</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  