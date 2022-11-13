import {
  Flex,
  Image,
  Stack,
  InputGroup,
  InputRightElement,
  Input,
  Center,
} from "@chakra-ui/react";
import "../CartDropdown/CartDropdown.css";
import { SearchIcon } from "@chakra-ui/icons";
import imageAddress from "../../Assets/asos-logo.jpeg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";
import CartDropdown from "../CartDropdown/CartDropdown";
const NavbarTop = () => {
  const auth = useContext(AuthContext);
  const { user, logOut, isAdmin } = auth;
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
              <p className="admin-text">{isAdmin ? "admin" : ""}</p>
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
              <div>
                <Link to={"/orders"}>My Orders</Link>
              </div>
            </div>
            {isAdmin && user ? (
              <div className="login-menu">
                <div>
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div>
                  <Link to={"/adminpanel"}>Admin Panel</Link>
                </div>
              </div>
            ) : null}
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
        <CartDropdown />
      </Flex>
    </Flex>
  );
};

export default NavbarTop;
