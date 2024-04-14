// LoginForm.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../service/apiService";
import FruitDropdown from "../../common/FruitDropdown";

const LoginForm = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [passwordHash, setPassword] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Simulating API call with setTimeout
      setTimeout(async () => {
        try {
          const userData = await login(usernameOrEmail, passwordHash);

          if (!userData.ok) {
            throw new Error("Login failed. Please try again.");
          }
          console.log("userData", userData); // Assuming userData contains user information

          // Assuming login was successful
          setSuccessMessage("Login successful. Redirecting to dashboard...");
          // Reset form fields after successful login
          setUsernameOrEmail("");
          setPassword("");
          setTimeout(() => {
            setIsLoading(false);
            // Redirect to dashboard or another page after successful login
            navigate("/course-page");
          }, 2000); // Redirect after 2 seconds
        } catch (error) {
          setIsLoading(false);
          setError(error.message || "Login failed. Please try again.");
        }
      }, 1000); // Simulating API response delay
    } catch (error) {
      setIsLoading(false);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">LMS Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="usernameOrEmail" className="form-label">
                Username/Email:
              </label>
              <input
                type="text"
                className="form-control"
                id="usernameOrEmail"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
            {/* <button type="submit" className="btn btn-primary">
              Login
            </button> */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Logining..." : "Login"}
            </button>
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </form>
          <div className="mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
