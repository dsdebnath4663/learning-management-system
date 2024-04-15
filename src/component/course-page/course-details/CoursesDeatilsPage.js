import "./CoursesDeatilsPage.css"; // Import your custom CSS file
import React, { useState } from 'react';


const CoursesDeatilsPage = ({ selectedCourse }) => {

  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  /* The line `console.log('selectedCourse', selectedCourse);` is logging the value of the
  `selectedCourse` prop to the console. This can be helpful for debugging purposes to see the data
  that is being passed to the component. The logged output will display the string 'selectedCourse'
  followed by the actual value of the `selectedCourse` prop. */
  // console.log('selectedCourse', selectedCourse);



  return (
    <div className="col-10 ">
      <h1>Course Description</h1>



      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Product Image" class="product-image" />
          </div>
          <div class="col-md-8">
            <div class="course-container">
              <div class="course-title">{selectedCourse.title}</div>
              <div class="course-description">
                {selectedCourse.description}
              </div>
              <div class="course-info">
                <p><strong>Duration:</strong> {selectedCourse.instructorId}</p>
                <p><strong>Level:</strong> Beginner to Intermediate</p>
                <p><strong>Instructor:</strong> {selectedCourse.title}</p>
                <p><strong>Rating:</strong> 4.5 (2,345 ratings)</p>
                <p><strong>Students Enrolled:</strong> 10,567</p>
              </div>

              {/* Tabs  */}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('tab1')}
                  >
                    Product Details
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('tab2')}
                  >
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('tab3')}
                  >
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handleTabClick('tab4')}
                  >
                    Seller Info
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-3">
                <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1Content">
                  <p>This section contains product details..</p>
                </div>

                <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2Content">
                  <p>This is the content of Information.</p>
                </div>

                <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3Content">
                  <p>This is the content of Reviews.</p>
                </div>

                <div className={`tab-pane fade ${activeTab === 'tab4' ? 'show active' : ''}`} id="tab4Content">
                  <p>This is the content of Seller Info.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CoursesDeatilsPage;
