import React from "react";
import "./ContactPage.css"; // Import CSS file for styling

const ContactPage = () => {
  return (
    <div className="main-cont contact-bg">
      <div className="contact-container">
        <div className="card3">
          <div className="card-header1">
            <h1>Contact Us</h1>
          </div>
          <div className="card-body1">
            <div className="contact-info1">
              <h2>Find Us</h2>
              <p>
                College Of Engineering Trivandrum, <br />
                Sreekaryam PO,682316 <br />
                Trivandrum
              </p>
              <h2>Opening Hours</h2>
              <p>24/7 Parking Lot Management Services</p>
            </div>
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
