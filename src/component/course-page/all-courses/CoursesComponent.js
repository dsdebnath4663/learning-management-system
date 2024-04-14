import "./CoursePage.css"; // Import your custom CSS file
import React, { useState, useEffect } from 'react';
import { enroll, getAllCourses, WithdrawCourse } from "../../../service/apiService";


const CoursesComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');
  const response = ''; // Example response of type 'any'

  const fetchAllCourses = async () => {
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      // Simulating API call with setTimeout
      setTimeout(async () => {

        // API registration logic goes here
        const response = await getAllCourses();

        console.log('All courses fetched:', response);
        // Assuming registration was successful

        setTimeout(() => {
          setIsLoading(false);
          setCourses(response);
          setFilteredCourses(response);


        }, 2000); // Redirect after 2 seconds
      }, 1500); // Simulating API response delay
    } catch (error) {
      setIsLoading(false);
      setError('Course fetching failed. Please try after some time.');
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredCourses(courses); // Reset to all courses if query is blank
    } else {
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    }

  };

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sorted = [...filteredCourses];
    if (option === 'alphabetical') {
      sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
    } // Add more sorting options here

    setFilteredCourses(sorted);
  };
  console.log('filteredCourses', filteredCourses);


  const handleEnrollOrWithdrawCourse = (courseId, enrollFlag) => {
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      // Simulating API call with setTimeout
      setTimeout(async () => {
        // API registration logic goes here
        const enrollmentData = {
          id: 0,
          courseId: courseId,
          studentId: 11,//yuvi for yuvi
          enrollmentDate: '2024-04-14',
        };
        //using the ternary operator
        // const response = enrollFlag ? await enroll(enrollmentData) : await WithdrawCourse(enrollmentData);
        if (enrollFlag) {
          await enroll(enrollmentData)
          console.log("enrolling...", response);
          setSuccessMessage("Course enrollment successful. ");
        } else {
          await WithdrawCourse(enrollmentData)
          console.log("Withdrawing Course...", response);
          setSuccessMessage("Course withdrawned . ");
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Redirect after 2 seconds
      }, 1000); // Simulating API response delay
    } catch (error) {
      setIsLoading(false);
      setError("Course Registration failed. Please try again.");
    }
  };
  return (
    <div className="col-10 ">
      <h1>Course Catalog</h1>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by course title"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-6">
          <select className="form-select" onChange={handleSort} value={sortOption}>
            <option value="">Sort by</option>
            <option value="alphabetical">Alphabetical</option>
            {/* Add more sort options here */}
          </select>
        </div>
      </div>
      {isLoading && (
        <div className="loader-backdrop">
          <div className="loader-container">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show position-fixed top-0 end-0" role="alert">
          {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>)}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">

        {filteredCourses.map(course => (
          <div key={course.id} className=" mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description.slice(0, 50)}</p>
                <p className="card-text">Instructor: {course.instructorName}</p>
                <p className="card-text">{course.id}</p>


                <div class="container flex-column">
                  <div class="row">
                    <div class="col-sm-6">
                      <button className="btn btn-primary" onClick={() => handleEnrollOrWithdrawCourse(course.id, true)}>Enroll</button>
                    </div>
                    <div class="col-sm-6">
                      <button className="btn btn-danger" onClick={() => handleEnrollOrWithdrawCourse(course.id, false)}>Withdraw</button>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        ))}
      </div>
      {successMessage &&
        (<div className="alert alert-success alert-dismissible fade show position-fixed top-0 end-0" role="alert">
          {successMessage}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>)}

    </div>
  );
};

export default CoursesComponent;
