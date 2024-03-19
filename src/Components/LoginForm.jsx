import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/mainPage.css";

const LoginForm = () => {
    const handleForgotPassword = () => {
        window.location.href = "mailto:support@zentrades.pro?subject=Password Reset";
      };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      alert(
        "Password must contain at least one uppercase letter, one number, and only @ as special character"
      );
      return;
    }
    console.log("Form submitted", email, password);
    if(password==="ZenTradesTest@123"){
        navigate('/metrics');
    }
    else{
        alert("Wrong Password");
    }
    
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[@]/;
    return (
      uppercaseRegex.test(password) &&
      numberRegex.test(password) &&
      !/[^\w@]/.test(password)
    );
  };

  return (
    <>
      <div className="mx-auto bg-dark-subtle main-div mt-5">
        <h1 className="d-flex justify-content-center">ZEN TRADES</h1>

        <form onSubmit={handleSubmit}>
          <div className="d-column mx-auto w-75 mt-5 mail-pw-txt">
            <div className="form-group">
              <input
                type="email"
                className="email-txt"
                placeholder="E-mail address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="email-txt"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div class="mb-3 form-check d-flex justify-content-center mt-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-danger d-flex mx-auto w-75 justify-content-center fw-light"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <div className="d-flex justify-content-center mt-2 forgot-txt">
            <a href="mailto:support@zentrades.pro?subject=Request for Password Reset">Forgot your password ?</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
