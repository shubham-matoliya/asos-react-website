import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";

const Singleuser = () => {
  const auth = useContext(AuthContext);
  clearInterval(+localStorage.getItem("setIntervalID"));

  const { user } = auth;
  return (
    <>
      <Navbar />
      <div className="singleuser">
        {user ? (
          <div>
            <Heading size={"xl"}>
              <Text>User ID:</Text> {user.uid}
            </Heading>
            {user.displayName ? (
              <Heading size={"xl"}>
                <Text>User Name:</Text> {user.displayName}
              </Heading>
            ) : null}
            <Heading size={"xl"}>
              <Text>User Email:</Text> {user.email}
            </Heading>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Singleuser;
