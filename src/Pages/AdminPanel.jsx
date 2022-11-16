import { Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  HStack,
  Select,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../Firebase/firebase";
import "./AdminPanel.css";
import AdminCard from "../Components/AdminCard/AdminCard";
const AdminPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialItem = {
    image: "",
    gender: "",
    category: "",
    price: "",
    title: "",
  };
  const [itemCreated, setItemCreated] = useState(initialItem);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [itemsReceived, setItemsReceived] = useState([]);
  const [itemsListed, setItemsListed] = useState({
    Clothing: [],
    Shoes: [],
    Watches: [],
    Perfume: [],
  });

  // for firebase
  // const productsItemsCollectionRef = collection(db, "products");
  const adminItemsCollectionRef = collection(db, "admin-collection-asos");
  const addProducts = async (product) => {
    await addDoc(adminItemsCollectionRef, product);
    toast({
      title: "item added",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 3000,
    });
  };
  const filterItems = (datareceived) => {
    console.log("items received for filter is", datareceived);
    console.log("filtering items");
    setItemsListed({
      ...itemsListed,
      Clothing: datareceived.filter((el) => {
        if (el.category === "Clothing") return el;
      }),
      Shoes: datareceived.filter((el) => {
        if (el.category === "Shoes") return el;
      }),
      Watches: datareceived.filter((el) => {
        if (el.category === "Watches") return el;
      }),
      Perfume: datareceived.filter((el) => {
        if (el.category === "Perfume") return el;
      }),
    });
  };
  // console.log(itemsListed);
  const adminSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log(itemCreated);
    addProducts(itemCreated);
    getProducts();
    document.querySelector("form").reset();
  };
  const getProducts = async () => {
    const data = await getDocs(adminItemsCollectionRef);
    try {
      const datareceived = data.docs.map((el) => ({
        ...el.data(),
        id: el.id,
      }));
      console.log("data received after getting is", datareceived);
      setItemsReceived(datareceived);
      filterItems(datareceived);
    } catch (error) {
      console.log(error);
    }
  };
  const updatefun = () => {
    getProducts();
  };
  clearInterval(+localStorage.getItem("setIntervalID"));

  useEffect(() => {
    getProducts();
    // console.log(productstoadd);
    // console.log("items received", itemsReceived);
  }, []);
  return (
    <div className="panel-container">
      <NavLink to={"/"} className="back-to-home">
        Back to Home
      </NavLink>
      <Heading margin={"10px"} marginBottom="30px" textAlign={"center"}>
        {" "}
        Admin Panel
      </Heading>

      <>
        <Center>
          <Button onClick={onOpen}>Add Item +</Button>
        </Center>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Items</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form
                className="item-details-form"
                aria-required={true}
                onSubmit={adminSubmitHandler}
              >
                <Box>
                  <FormLabel>Item image url</FormLabel>
                  <Input
                    type={"url"}
                    ref={initialRef}
                    placeholder="Item image url"
                    required
                    onInput={(e) =>
                      setItemCreated({ ...itemCreated, image: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <FormLabel>Item title</FormLabel>
                  <Input
                    type={"text"}
                    placeholder="Item title"
                    required
                    onInput={(e) =>
                      setItemCreated({ ...itemCreated, title: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <FormLabel>Item Price</FormLabel>
                  <Input
                    type={"number"}
                    placeholder="Item Price"
                    required
                    onInput={(e) =>
                      setItemCreated({ ...itemCreated, price: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <FormLabel as="legend">Select Gender</FormLabel>
                  <RadioGroup
                    defaultValue="Women"
                    required
                    onClick={(e) =>
                      setItemCreated({ ...itemCreated, gender: e.target.value })
                    }
                  >
                    <HStack spacing="24px">
                      <Radio value="Male">Male</Radio>
                      <Radio value="Female">Female</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
                <Box>
                  <FormLabel>Select Category</FormLabel>
                  <Select
                    placeholder="Select category"
                    required
                    onChange={(e) =>
                      setItemCreated({
                        ...itemCreated,
                        category: e.target.value,
                      })
                    }
                  >
                    <option value={"Clothing"}>Clothing</option>
                    <option value={"Shoes"}>Shoes</option>
                    <option value={"Watches"}>Watches</option>
                    <option value={"Perfume"}>Perfume</option>
                  </Select>
                </Box>
                <Box>
                  <Input
                    type={"submit"}
                    bg="#1b5ba0"
                    color={"white"}
                    fontWeight="extrabold"
                    value="ADD ITEM"
                  />
                </Box>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className="item-container">
          <p>Clothing</p>
          <div className="item-category-container">
            {itemsListed.Clothing.length ? (
              itemsListed.Clothing.map((el) => (
                <AdminCard product={el} key={el.id} updatefun={updatefun} />
              ))
            ) : (
              <Heading size={"md"}>No items in this category</Heading>
            )}
          </div>
          <p>Shoes</p>
          <div className="item-category-container">
            {itemsListed.Shoes.length ? (
              itemsListed.Shoes.map((el) => (
                <AdminCard product={el} key={el.id} updatefun={updatefun} />
              ))
            ) : (
              <Heading size={"md"}>No items in this category</Heading>
            )}
          </div>
          <p>Watches</p>
          <div className="item-category-container">
            {itemsListed.Watches.length ? (
              itemsListed.Watches.map((el) => (
                <AdminCard product={el} key={el.id} updatefun={updatefun} />
              ))
            ) : (
              <Heading size={"md"}>No items in this category</Heading>
            )}
          </div>
          <p>Perfume</p>
          <div className="item-category-container">
            {itemsListed.Perfume.length ? (
              itemsListed.Perfume.map((el) => (
                <AdminCard product={el} key={el.id} updatefun={updatefun} />
              ))
            ) : (
              <Heading size={"md"}>No items in this category</Heading>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default AdminPanel;
