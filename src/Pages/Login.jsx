import logoImage from "../Assets/asos-logo.jpeg";

import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import "./authentication.css";
import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const Login = () => {
  // const initialData = {
  //   email: "",
  //   password: "",
  // };
  // const [user, setUser] = useState(initialData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authentication = useContext(AuthContext);
  const { logIn, googleSignIn } = authentication;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn()
        .then((res) => res.user)
        .then((res) => console.log(res));
      <Navigate to={"/"} />;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div id="login">
      <Center>
        <Heading marginTop={10}>Login</Heading>
      </Center>
      <div className="login-container">
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
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <input type={"submit"} id="submit" />
          </form>

          <div className="google-login" onClick={handleGoogleSignIn}>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
            </div>
            <div>Login with Google</div>
          </div>
          <div>
            <p>
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
