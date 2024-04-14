import React from 'react';
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          LMS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="megaMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu mega-menu mega-menu-content" aria-labelledby="megaMenu">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-3">
                      <h5>Category 1</h5>
                      <ul className="list-unstyled">
                        <li><a href="/">Course 1</a></li>
                        <li><a href="/">Course 2</a></li>
                        <li><a href="/">Course 3</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Category 2</h5>
                      <ul className="list-unstyled">
                        <li><a href="/">Course 4</a></li>
                        <li><a href="/">Course 5</a></li>
                        <li><a href="/">Course 6</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Category 3</h5>
                      <ul className="list-unstyled">
                        <li><a href="/">Course 7</a></li>
                        <li><a href="/">Course 8</a></li>
                        <li><a href="/">Course 9</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <h5>Category 4</h5>
                      <ul className="list-unstyled">
                        <li><a href="/">Course 10</a></li>
                        <li><a href="/">Course 11</a></li>
                        <li><a href="/">Course 12</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
            <li className="nav-item">
            <a to="/login" className="nav-link ">
              Login/Registration
            </a>
          </li>
          <li className="nav-item">
            <a to="/dashboard" className="nav-link ">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a to="/course-catalog" className="nav-link ">
              Course Catalog</a>
          </li>
          <li className="nav-item">
            <a to="/course-page" className="nav-link ">
              Course Page</a>
          </li>
          <li className="nav-item">
            <a to="/enrollment" className="nav-link ">
              Enrollment</a>
          </li>
          <li className="nav-item">
            <a to="/assignment-submission" className="nav-link ">
              Assignment Submission</a>
          </li>
          <li className="nav-item">
            <a to="/grades" className="nav-link ">
            Grades</a>
          </li>
          <li className="nav-item">
            <a to="/discussion-forum" className="nav-link ">
            Discussion Forum</a>
          </li>
          <li className="nav-item">
            <a to="/notifications" className="nav-link ">
              Notifications</a>
          </li>
          <li className="nav-item">
            <a to="/profile-management" className="nav-link ">
              Profile Management</a>
          </li>
          <li className="nav-item">
            <a to="/admin-dashboard" className="nav-link ">
              Admin Dashboard</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
