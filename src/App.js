import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegistrationForm from "./component/loginForm/LoginRegistrationForm";
import Dashboard from "./component/dashboard/Dashboard";
import CourseCatalog from "./component/course-catalog/CourseCatalog";
import CoursePage from "./component/course-page/all-courses/CoursesComponent";
import EnrollmentProcess from "./component/enrollment-process/EnrollmentProcess";
import NotFoundPage from "./component/404/NotFoundPage";
import Sidebar from "./component/navbar/sidebar/Sidebar";
import RegisterForm from "./component/loginForm/signup/Register";
import LoginForm from "./component/loginForm/login/LoginForm";
import CreateCourse from "./component/course-page/create-course/CreateCourse";
import CoursesComponent from "./component/course-page/all-courses/CoursesComponent";
import UpdateCourseForm from "./component/course-page/update-course/UpdateCourseForm";
import CoursesDeatilsPage from "./component/course-page/course-details/CoursesDeatilsPage";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="login" element={<LoginRegistrationForm />} />
            <Route exact path="/login-form" element={<LoginForm />} />
            <Route exact path="/register" element={<RegisterForm />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/all-course" element={<CoursesComponent />} />
            {<Route path="/update-course" element={<UpdateCourseForm />} />}
            {<Route path="/course-deatils" element={<CoursesDeatilsPage />} />}

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
