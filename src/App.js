import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // Import your CSS file for styling
import AdminPage from "./AdminPage";
import AboutUsPage from "./AboutUsPage";
import ContactPage from "./ContactPage";
import Home from "./Home"; // Import the Home page component
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <nav className="navbar">
            <ul className="nav-links">
            <h1 className="heading">Quickspot</h1>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li>
                <Link to="/verification">Verification</Link>
              </li> */}
              <li className="login">
                <a href="/login">
                  <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="Logo" />
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 Quickspot</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
