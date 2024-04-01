import React from 'react';
import './AboutUsPage.css'; // Import CSS file for styling

const AboutUsPage = () => {
  return (
    <div className="main-cont aboutus-bg">
        <div className="about-container">
      <div className="card3">
        <div className="card-header">
          <h1>About Us</h1>
        </div>
        <div className="card-body">
          <p>
            Quikspot is the ultimate solution to your parking problems. Our smart parking system offers a seamless parking experience for drivers and a new revenue stream for property owners. With our innovative technology, you'll find parking quickly and easily, so you can get to your destination on time. Our community-based approach ensures that everyone benefits, making it a win-win for all.
          </p>
          <h2>Mission</h2>
          <p>
            Our mission is to revolutionize the parking industry by providing smart, efficient, and sustainable solutions for drivers and property owners.
          </p>
          <h2>Vision</h2>
          <p>
            Our vision is to create a world where parking is convenient, accessible, and environmentally friendly, benefiting both individuals and communities.
          </p>
          <h2>Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Customer Satisfaction</li>
            <li>Sustainability</li>
            <li>Community Engagement</li>
          </ul>
          <h2>Achievements</h2>
          <p>
            - Awarded Best Parking System of the Year<br />
            - Partnered with leading property management companies<br />
            - Reduced parking congestion by 30% in major cities<br />
            - Recognized for eco-friendly initiatives
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutUsPage;
