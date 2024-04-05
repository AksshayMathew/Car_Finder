import React, { useState, useEffect } from 'react';
import './AdminLayout.css'; // Import the CSS file for styling
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const AdminPage = () => {
  const [parkAreas, setParkAreas] = useState([]); // State to store park areas data
  const [editingAreaId, setEditingAreaId] = useState(null); // State to store the ID of the area being edited

  const fetchParkAreas = async () => {
    try {
      const response = await axios.get(
        "https://quikspot.vercel.app/api/admin/getParkAreasUnderVerification"
      );
      setParkAreas(response.data.data);
      console.log(response.data.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching park areas:", error);
    }
  };

  useEffect(() => {
    fetchParkAreas(); // Fetch park areas data when component mounts
  }, []);

  const handleAccept = async (area) => {
    const parkAreaDetails = {
      parkAreaName: area.parkSpaceName,
      ownerId: area.userId,
      ownerPhoneNumber: area.phoneNumber,
      ownerName: area.name,
      address: area.address,
      city: area.city,
      state: area.state,
      pincode: area.pincode,
      location: area.location,
      totalSlots: area.estimatedCapacity,
      ratePerHour: 100,
      facilitiesAvailable: area.facilitiesAvailable,
      parkAreaType: area.parkSpaceType,
    };
    console.log("PARK AREA DETAILS", parkAreaDetails);
    try {
      const response = await axios.post(
        'https://quikspot.vercel.app/api/admin/addParkArea',
        parkAreaDetails
      );
      console.log("POST SUCCESS")
      console.log(response.data);
    } catch (error) {
      console.error('Error adding park area:', error);
    }
  };

  const handleReject = async (area) => {
    const rejectDetails = {
      ownerId: area.userId,
      ParkAreaName: area.parkSpaceName,
    };

    try {
      const response = await axios.post(
        'https://quikspot.vercel.app/api/admin/rejectParkArea',
        rejectDetails
      );
      console.log("SUCCESFULLY REJECTED")
      console.log(response.data);
    } catch (error) {
      console.error('Error rejecting park area:', error);
    }
  };

  const handleEdit = (areaId) => {
    setEditingAreaId(areaId);
  };

  const handleSave = async (area) => {
    // Implement save functionality to send edited data to the database
    console.log("Saving edited data:", area);
    setEditingAreaId(null); // Disable editing mode after saving
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <div className="carousel-container">
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="transform 500ms ease-in-out"
    transitionDuration={500}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
  {parkAreas.map((area) => (
    <div className="card" key={area.userId}>
      <img src="Parking4.jpg" alt="Parking img" />
      <div className="info">
        {editingAreaId === area.userId ? (
          <>
            <input type="text" defaultValue={area.name} onChange={(e) => area.name = e.target.value} />
            <input type="text" defaultValue={area.address} onChange={(e) => area.address = e.target.value} />
            {/*Add more editable fields as needed here*/}
          </>
        ) : (
          <>
            <h2>{area.name}</h2>
            <p>Location: {area.address}</p>
            <p>Pin code: {area.pincode}</p>
            <p>Email: {area.email}</p>
          </>
        )}
        <button onClick={() => handleAccept(area)}>
          Accept
        </button>
        <button onClick={() => handleReject(area)}>
          Reject
        </button>
        {editingAreaId === area.userId ? (
          <button onClick={() => handleSave(area)}>
            Save
          </button>
        ) : (
          <button onClick={() => handleEdit(area.userId)}>
            Edit
          </button>
        )}
      </div>
    </div>
  ))}
      </Carousel>
    </div>
  );
};

export default AdminPage;
