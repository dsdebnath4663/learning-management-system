import "./UpdateCourse.css"
import React, { useState } from 'react';
import axios from 'axios';

const UpdateCourseForm = () => {
  
  const [courseId, setCourseId] = useState('');
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    instructorId: ''
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const response = await axios.get(`http://localhost:8081/api/courses/get-course-by-id/${courseId}`);
      setCourse(response.data);
      setFormData({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        instructorId: response.data.instructorId
      });
    } catch (error) {
      setError('Course not found.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.put(
        `http://localhost:8081/api/courses/update-course/${courseId}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          }
        }
      );
      setResponse(response.data);
    } catch (error) {
      setError('Update failed. Please try again.');
    }
  };

  return (
    <div className="col-10">
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <h1>Update Course</h1>
            <div className="mb-3">
              <label htmlFor="courseId" className="form-label">Course ID</label>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  id="courseId"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  required
                />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
              </div>
            </div>
            {course && (

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control custom-textarea"
                    id="description"
                    name="description"
                    col
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instructorId" className="form-label">Instructor ID</label>
                  <input
                    type="number"
                    className="form-control"
                    id="instructorId"
                    name="instructorId"
                    value={formData.instructorId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Update Course</button>
              </form>
            )}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {response && (
              <div className="alert alert-success mt-3">
                Course updated successfully:
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourseForm;
