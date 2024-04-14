import React, { useState } from "react";
import Register from "./signup/Register";
import LoginForm from "./login/LoginForm";
// import Login from "./Login";
// import Register from "./Register";

const LoginRegistrationForm = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (token) => {
    // Handle successful login, e.g., set token in localStorage
    setLoggedInUser(token);
  };

  return (
    <div className="col-10 ">
      {loggedInUser ? (
        <p>Welcome, user!</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginRegistrationForm;
