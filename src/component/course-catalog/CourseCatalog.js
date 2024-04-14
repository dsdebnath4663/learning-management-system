import React, { useState } from 'react';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Course 1', instructor: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Course 2', instructor: 'Jane Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Course 3', instructor: 'Jack Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2>Course Catalog</h2>
      <div className="row mt-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-4">
          <select className="form-select">
            <option>Filter</option>
            {/* Add filter options here */}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</h6>
                <p className="card-text">{course.description}</p>
                <button className="btn btn-primary">Enroll</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
