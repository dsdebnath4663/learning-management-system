// RegisterForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createCourse } from "../../../service/apiService";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructorId, setInstructorId] = useState("");

  // id, title, description, instructorId

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // const history = useHistory();

  const handleRegisterCourse = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Simulating API call with setTimeout
      setTimeout(async () => {
        // API registration logic goes here
        const response = await createCourse(0, title, description, instructorId);

        console.log("Registering...", response);
        // Assuming registration was successful
        setSuccessMessage("Course Registration successful. Redirecting to login...");
        // Reset form fields after successful registration
        setTitle("");
        setDescription("");
        setInstructorId("Select");

        setTimeout(() => {
          setIsLoading(false);
          // history.push("/");
        }, 2000); // Redirect after 2 seconds
      }, 1000); // Simulating API response delay
    } catch (error) {
      setIsLoading(false);
      setError("Course Registration failed. Please try again.");
    }
  };

  return (
    <div className="col-10 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-5 mb-4">Register Course</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <form onSubmit={handleRegisterCourse}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Course Title
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>

              <textarea
                class="form-control"
                rows="3"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="instructorId" className="form-label">
                Instructor Name:
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={description}
                onChange={(e) => setInstructorId(e.target.value)}
              >
                <option selected>Select</option>
                <option value="2">INSTRUCTOR 1</option>
                <option value="5">INSTRUCTOR 2</option>
                <option value="10">INSTRUCTOR 3</option>
              </select>
              {/* ToDo
                Need make this  Instructor dynamic by calling api
              
              */}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "RegisteringCourse..." : "Register"}
            </button>
            <Link to="/Dashboard" className="btn btn-link">
              Back to Dashboard
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
