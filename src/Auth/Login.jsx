import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State for username, password, and error
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Define admin credentials
  const adminUser = {
    username: "DIGITIT",
    password: "digitit",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    if (username === adminUser.username && password === adminUser.password) {
      // Successful login
      localStorage.setItem("isAuthenticated", "true");
      navigate("/Home");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white Image bg-dark">
      <div
        className="p-4 rounded col-11 col-sm-8 col-md-6 col-lg-4"
        style={{ maxWidth: "400px", border: "1px solid #444" }}
      >
        {/* Logo & Heading */}
        <div className="text-center mb-4">
          <img
            src="images/logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "80px" }}
          />
          <h3 className="mt-2 Text1">Welcome to Video360</h3>
          <p className="text-white">Welcome Back! Sign In</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-danger small mb-2">{error}</p>}

          <Button type="submit" className="btn btn-danger w-100 mt-3">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;