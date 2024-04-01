import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailLogin = () => {
    // Handle email/password login logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google sign-in logic here
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleEmailLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {/* <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div> */}
        <div className="form-links">
          <button type="submit">Sign In</button>
          {/* <a href="#">Forgot Password?</a> */}
        </div>
      </form>
      <button className="google-btn" onClick={handleGoogleLogin}>
        Sign In with Google
      </button>
      <p className="register-link">
        Don't have an account? <a href="#">Register Now</a>
      </p>
    </div>
  );
};

export default Login;
