import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

const Home = () => {
  const Authentication = useContext(AuthContext);
  const { user, logOut } = Authentication;
  console.log(user);
  if (user) console.log("user is ", user.uid, user.email);

  return (<>
    <Navbar/>
    <div className="home">

      <Heading size={"4xl"} textAlign="center">
        Home
      </Heading>
    </div>
  </>
    
  );
};

export default Home;
