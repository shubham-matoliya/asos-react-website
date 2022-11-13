import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";
import { useToast } from "@chakra-ui/react";
const PrivateRouteProvider = ({ children }) => {
  const toast = useToast();
  const { user, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  {
    if (!isAuth) {
      toast({
        title: `Please login to visit that page`,
        status: "info",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      return <Navigate to={"/login"} />;
    }

    return children;
  }
};

export default PrivateRouteProvider;
