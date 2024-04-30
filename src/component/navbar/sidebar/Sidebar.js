import "./sidebar.css"; // Assuming you have a separate CSS file for sidebar styles

import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);



  return (
    <div className="row">
      <div className="col-2 ">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/home" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              Login/Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Dashboard" className="nav-link ">
              Dashboard
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="megaMenu"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </Link>
            <ul
              className="dropdown-menu mega-menu mega-menu-content"
              aria-labelledby="megaMenu"
            >
              <div className="container mega-menu-container">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Category 1</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/create-course">Create Course</Link>
                      </li>
                      {<li>
                        <Link to="/update-course">Update Course</Link>
                      </li>}
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 2</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/all-course">Course Catalog</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 3</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/">Course 7</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h5>Category 4</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/">Course 10</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/all-course" className="nav-link ">
              Enrollment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/assignment-submission" className="nav-link ">
              Assignment Submission
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/grades" className="nav-link ">
              Grades
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/discussion-forum" className="nav-link ">
              Discussion Forum
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-link ">
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile-management" className="nav-link ">
              Profile Management
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/reviews" className="nav-link ">
              Reviews
            </Link>
          </li>

        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default Sidebar;
