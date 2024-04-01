import React, { useState, useEffect } from 'react';
import './AdminLayout.css'; // Import the CSS file for styling
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';

const AdminPage = () => {
  const [parkAreas, setParkAreas] = useState([]); // State to store park areas data

  const fetchParkAreas = async () => {
    try {
      const response = await axios.get(
        "https://quikspot.vercel.app/api/admin/getParkAreasUnderVerification"
      );
      setParkAreas([response.data.data[0]]);
      console.log(response.data.data[0]) // Update state with fetched data
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
      <img src="Parking4.jpg" alt="Image 4" />
      <div className="info">
        <h2>{area.name}</h2>
        <p>Location: {area.address}</p>
        <p>Pin code: {area.pincode}</p>
        <p>Email: {area.email}</p>
        <button onClick={() => handleAccept(area)}>
          Accept
        </button>
        <button onClick={() => handleReject(area)}>
          Reject
        </button>
      </div>
    </div>
  ))}
      </Carousel>
    </div>
  );
};

export default AdminPage;