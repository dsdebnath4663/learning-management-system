// RegisterForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../../service/apiService";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Simulating API call with setTimeout
      setTimeout(async () => {
        // API registration logic goes here
        const response = await register(0, username, passwordHash, email, role);

        console.log("Registering...");
        // Assuming registration was successful
        setSuccessMessage("Registration successful. Redirecting to login...");
        // Reset form fields after successful registration
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("Select");
        setTimeout(() => {
          setIsLoading(false);
          // history.push("/");
        }, 2000); // Redirect after 2 seconds
      }, 1000); // Simulating API response delay
    } catch (error) {
      setIsLoading(false);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="col-10 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">Register</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordHash"
                value={passwordHash}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option selected>Select</option>
                <option value="INSTRUCTOR">INSTRUCTOR</option>
                <option value="STUDENT">STUDENT</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
            <Link to="/" className="btn btn-link">
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
