import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Center,
  Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import imageAddress from "../../Assets/asos-logo.jpeg";
import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";
const NavbarTop = () => {
  const auth = useContext(AuthContext);
  const { user, logOut } = auth;
  const logoutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      width={"100vw"}
      backgroundColor="black"
      color={"white"}
      justifyContent="space-between"
      height={"max-content"}
      alignItems={"center"}
    >
      <Center>
        <Link to={"/"}>
          <Image
            height={"60px"}
            src={imageAddress}
            alt="website-logo"
            borderColor={"white"}
          />
        </Link>
      </Center>
      <Center>
        <Flex className="section-button">MEN</Flex>
        <Flex className="section-button">WOMEN</Flex>
      </Center>
      <Center>
        <Stack spacing={24} width="50vw">
          <InputGroup>
            <Input
              placeholder="Search for Items and Brands"
              backgroundColor="white"
              color={"gray"}
              borderRadius={"100px"}
            />
            <InputRightElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<SearchIcon />}
            />
          </InputGroup>
        </Stack>
      </Center>
      <Flex
        fontSize={"2xl"}
        width="20vw"
        justifyContent={"space-around"}
        alignItems="center"
      >
        <div className="user">
          <i className="fa-regular fa-user" />
          <div className="user-menu">
            <div className="login-user">
              <Link to={"/login"}>
                {user ? user.displayName || "Guest" : "Login"}
              </Link>
            </div>
            <div className="login-menu">
              <div>
                <i className="fa-regular fa-user"></i>
              </div>
              <div>
                <Link to={"/singleuser"}>My Account</Link>
              </div>
            </div>
            <div className="login-menu">
              <div>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div>My Orders</div>
            </div>
            <div className="login-menu">
              <div>
                <i className="fa-regular fa-circle-question"></i>
              </div>
              <div>Return Information</div>
            </div>
            <div className="login-menu">
              <div>
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <div>Contact Preferances</div>
            </div>
            {user ? (
              <div className="login-user" onClick={logoutHandler}>
                <Link to={"/login"}>Logout</Link>
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <Link to={"/wishlist"}>
            <i className="fa-regular fa-heart" />
          </Link>
        </div>
        <div>
          <Link to={"/cart"}>
            <i className="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </Flex>
    </Flex>
  );
};

export default NavbarTop;