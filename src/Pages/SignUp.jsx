import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logoImage from "../Assets/asos-logo.jpeg";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import "./authentication.css";
import { Heading, Center } from "@chakra-ui/react";
import axios from "axios";
const SignUp = () => {
  const initialUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Authentication = useContext(AuthContext);
  const { signUp, logIn } = Authentication;
  // console.log("Authentication is ", Authentication);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
    axios.post(`http://localhost:8080/users`, user);
  };
  return (
    <div id="login">
      <Center>
        <Heading marginTop={10}>Signup</Heading>
      </Center>
      <div className="login-container signup-container">
        <div className="logo-image">
          <Link to="/">
            <img src={logoImage} alt="logo image" />
          </Link>
        </div>
        <div>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type={"email"}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              placeholder="Enter Email"
            />
            <input
              type={"password"}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter Password"
            />
            <input type={"submit"} id="submit" />
          </form>
          <div>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
