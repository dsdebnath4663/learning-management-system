import FruitDropdown from "../common/FruitDropdown";
import "./dashboard.css";

import React from "react";

const Dashboard = () => {
  // Hardcoded data
  const username = "John Doe";
  const enrolledCourses = ["Course 1", "Course 2", "Course 3"];
  const upcomingAssignments = [
    { name: "Assignment 1", dueDate: "Due Date 1" },
    { name: "Assignment 2", dueDate: "Due Date 2" },
    { name: "Assignment 3", dueDate: "Due Date 3" },
  ];
  const notifications = ["New Announcement", "Assignment Graded", "Forum Post"];
  const courseMaterials = [
    "Course 1 Materials",
    "Course 2 Materials",
    "Course 3 Materials",
  ];

  return (
    <div className="col-10">

      <div class="col-md-4">
        <p>Welcome Back, {username}!</p>
      </div>


      {/* <!-- Small Cards Section --> */}
      <div class="row">
        <div class="col-md-4">
          <div class="card small-card bg-primary text-white">
            <div class="card-body">
              <div class="small-card-icon"><i class="fas fa-book"></i></div>
              <h5 class="card-title">My Courses</h5>
              <p class="card-text">Manage your courses here.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card small-card bg-success text-white">
            <div class="card-body">
              <div class="small-card-icon"><i class="fas fa-user"></i></div>
              <h5 class="card-title">Students</h5>
              <p class="card-text">View and manage your students.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card small-card bg-info text-white">
            <div class="card-body">
              <div class="small-card-icon"><i class="fas fa-money-bill-wave"></i></div>
              <h5 class="card-title">Earnings</h5>
              <p class="card-text">Track your earnings and payouts.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Search Bar --> */}
      <div class="search-bar">
        <input type="text" class="form-control" placeholder="Search" />
      </div>


      {/* <!-- Row with Left 60% and Right 40% --> */}
      <div class="row row-content">
        <div class="col-md-8 left-column">


        </div>
        <div class="col-md-4 right-column">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Top Courses</h5>
              <p>See All</p>
              <ul class="list-unstyled">
                <li>
                  <span><i class="fas fa-book course-icon"></i></span>
                  <span>Course Pat - $9125.00</span>
                </li>
                <li>
                  <span><i class="fas fa-pen course-icon"></i></span>
                  <span>Ut Design - $3564.00</span>
                </li>
                <li>
                  <span><i class="fas fa-cogs course-icon"></i></span>
                  <span>Prototyping 190 - $1632.00</span>
                </li>
                <li>
                  <span><i class="fas fa-paint-brush course-icon"></i></span>
                  <span>UX Design 100 - $1152.00</span>
                </li>
                <li>
                  <span><i class="fas fa-code course-icon"></i></span>
                  <span>WWet:fitow - $720.00</span>
                </li>
                <li>
                  <span><i class="fas fa-laptop-code course-icon"></i></span>
                  <span>Framer - $720.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-content">
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
