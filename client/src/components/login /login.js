import React from "react";
import Axios from "axios";
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { Alert } from "bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(Boolean);
  const [passwordShown, setPasswordShown] = useState(false);
  const handleSignIn = (e) => {
    e.preventDefault();
    loginUser();
    setEmail("");
    setPassword("");
    console.log(status);
  };
  function showPasswordFunc() {
    setPasswordShown(!passwordShown);
  }

  const loginUser = () => {
    Axios.post("http://localhost:3001/login", {
      email,
      password,
    })
      .then((res) => {
        alert("thanks for login");
      })
      .catch((error) => {
        setStatus(false);

        alert(error.data);
      });
  };
  return (
    <form className="mainClass">
      <div className="Form">
        <div className="item11">
          <label htmlFor="email">
            <h4>Email</h4>
          </label>
        </div>
        <div className="item22">
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter your email please"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="item33">
          <label htmlFor="password">
            <h4>password</h4>
          </label>
        </div>
        <div className="item44">
          <input
            type={passwordShown ? "text" : "password"}
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>
        <div className="item66">
          <input
            className="showPassword"
            type="checkbox"
            onChange={showPasswordFunc}
          />
          Show Password
        </div>

        <button type="submit" className="item55" onClick={handleSignIn}>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
