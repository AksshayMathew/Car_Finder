import React, { useState, useEffect } from "react";
import "./AdminLayout.css"; // Import the CSS file for styling
import Carousel from "react-multi-carousel";
import Card from "./components/Card";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const SampleData = [
  {
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
  },
  {
    address: "Ocean View Villa",
    city: "Kovalam",
    district: "Trivandrum",
    email: "jane.smith@example.com",
    estimatedCapacity: 20,
    expectedPricePerHour: 30,
    facilitiesAvailable: ["Swimming Pool", "Garden", "BBQ Area"],
    location: { latitude: 8.402071, longitude: 76.978708 },
    name: "Jane Smith",
    parkSpaceName: "Ocean Parking",
    parkSpaceType: "Dedicated",
    phoneNumber: 9876543211,
    pincode: 695527,
    state: "Kerala",
    street: "Beach Road",
    userId: "6610b6059c58380722d14a60",
  },
  {
    address: "Green Valley Resorts",
    city: "Varkala",
    district: "Trivandrum",
    email: "alex.wilson@example.com",
    estimatedCapacity: 30,
    expectedPricePerHour: 40,
    facilitiesAvailable: ["Restaurant", "Gym", "Spa"],
    location: { latitude: 8.737563, longitude: 76.716365 },
    name: "Alex Wilson",
    parkSpaceName: "Green Parking",
    parkSpaceType: "Shared",
    phoneNumber: 9876543212,
    pincode: 695141,
    state: "Kerala",
    street: "Cliff Road",
    userId: "6610b6059c58380722d14a61",
  },
  {
    address: "Hilltop Retreat",
    city: "Ponmudi",
    district: "Trivandrum",
    email: "emma.jones@example.com",
    estimatedCapacity: 25,
    expectedPricePerHour: 35,
    facilitiesAvailable: ["Hiking Trails", "Campfire Area", "Playground"],
    location: { latitude: 8.790041, longitude: 77.108862 },
    name: "Emma Jones",
    parkSpaceName: "Hilltop Parking",
    parkSpaceType: "Dedicated",
    phoneNumber: 9876543213,
    pincode: 695551,
    state: "Kerala",
    street: "Hill Road",
    userId: "6610b6059c58380722d14a62",
  },
  {
    address: "Riverfront Residency",
    city: "Neyyar Dam",
    district: "Trivandrum",
    email: "michael.brown@example.com",
    estimatedCapacity: 12,
    expectedPricePerHour: 22,
    facilitiesAvailable: ["Fishing Pier", "Boat Rentals", "Picnic Area"],
    location: { latitude: 8.549955, longitude: 77.13911 },
    name: "Michael Brown",
    parkSpaceName: "Riverfront Parking",
    parkSpaceType: "Shared",
    phoneNumber: 9876543214,
    pincode: 695572,
    state: "Kerala",
    street: "Dam Road",
    userId: "6610b6059c58380722d14a63",
  },
];

const AdminPage = () => {
  const [parkAreas, setParkAreas] = useState([]); // State to store park areas data
  const [editingAreaId, setEditingAreaId] = useState(null); // State to store the ID of the area being edited

  const fetchParkAreas = async () => {
    try {
      // const response = await axios.get(
      //   "https://quikspot.vercel.app/api/admin/getParkAreasUnderVerification"
      // );
      // setParkAreas(response.data.data);
      // console.log(response.data.data);
      setParkAreas(SampleData);
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
        "https://quikspot.vercel.app/api/admin/addParkArea",
        parkAreaDetails
      );
      console.log("POST SUCCESS");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding park area:", error);
    }
  };

  const handleReject = async (area) => {
    const rejectDetails = {
      ownerId: area.userId,
      ParkAreaName: area.parkSpaceName,
    };

    try {
      const response = await axios.post(
        "https://quikspot.vercel.app/api/admin/rejectParkArea",
        rejectDetails
      );
      console.log("SUCCESFULLY REJECTED");
      console.log(response.data);
    } catch (error) {
      console.error("Error rejecting park area:", error);
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
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {parkAreas.map((area) => (
        <Card
          key={area.userId}
          area={area}
          editingAreaId={editingAreaId}
          handleAccept={handleAccept}
          handleReject={handleReject}
          handleEdit={handleEdit}
          handleSave={handleSave}
        />
      ))}
    </Carousel>
  );
};

export default AdminPage;
