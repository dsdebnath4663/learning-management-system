// apiService.js

import axios from "axios";

const BASE_URL = "http://localhost:8081/api";

export const login = async (username, password) => {
  const response = await fetch(
    `${BASE_URL}/user/login?username=${username}&password=${password}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ username, password }),
    }
  );
  if (!response.ok) {
    throw new Error("Login failed. Please try again.");
  }
  return response;
};

export const register = async (id, username, passwordHash, email, role) => {
  const response = await fetch(`${BASE_URL}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, username, passwordHash, email, role }),
  });
  return response;
};

export const createCourse = async (id, title, description, instructorId) => {
  const response = await fetch(`${BASE_URL}/courses/create-course`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, description, instructorId }),
  });
  return response;
};


export const getAllCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/courses/get-all-courses`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching courses: ${error.message}`);
  }
}


export const enroll = async (enrollmentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/enrollments/enroll`, enrollmentData, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error enrolling:', error);
    throw error; // You can handle this error in your component
  }
};

export const WithdrawCourse = async (enrollmentData) => {
  try {
    const response = await axios.post(`${BASE_URL}/enrollments/withdraw`, enrollmentData, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error enrolling:', error);
    throw error; // You can handle this error in your component
  }
};