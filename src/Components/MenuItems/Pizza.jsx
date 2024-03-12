import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import Layout from "../Layout/Layout";
import { Delete, PhoneIcon, SearchIcon, Trash } from "lucide-react";
import styled from "styled-components";
import { deleteOutline, edit, updown } from "../../assets";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { linkStyle } from "../../data";

const Pizza = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  let status = "In stock";
  const handleOrderId = () => {};

  const handleOrderName = () => {};

  const handleOrderPrice = () => {};

  const handleOrderStatus = () => {};
  return (
    <Layout>
      <Box>
        <Text fontSize={"24px"} fontWeight={"700"}>
          Food Items
        </Text>

        <Flex my={6} justifyContent={"space-between"}>
          <InputGroup bgColor={"white"} borderRadius={"10px"} w={"fit-content"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon size={18} color="#949494" />
            </InputLeftElement>
            <Input type="search" placeholder="Search" id={"search"} />
          </InputGroup>
          <Button
            leftIcon={<AddIcon />}
            backgroundColor="brand.add"
            color="white"
            p="16px 20px"
            fontSize={"12px"}
            variant={"simpleWhite"}
          >
            <Link to="/add/pizza" style={linkStyle}>
              Add New Pizza
            </Link>
          </Button>
        </Flex>
      </Box>

      {/* <Box display="flex" justifyContent="space-between" pt={6} pb={6}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray" size="1rem" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search"
              backgroundColor="white"
              w="25rem"
            />
          </InputGroup>
          <Button
            leftIcon={<AddIcon />}
            backgroundColor="brand.add"
            color="white"
            p="1rem"
          >
            <Link to="/add/pizza">Add New Pizza</Link>
          </Button>
        </Box> */}

      {/* Food Items */}
      <DIV>
        <table>
          <thead
            style={{
              fontWeight: "600",
              fontSize: "16px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <tr>
              <th>
                <Flex gap={1} alignItems="center">
                  <Text>ID</Text>
                  <img src={updown} onClick={handleOrderId} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Food Name</Text>
                  <img src={updown} onClick={handleOrderName} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Price</Text>
                  <img src={updown} onClick={handleOrderPrice} />
                </Flex>
              </th>
              <th>Category</th>
              <th>
                <Flex gap={1}>
                  <Text>Status</Text>
                  <img src={updown} onClick={handleOrderStatus} />
                </Flex>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#00001</td>
              <td>pizza name</td>
              <td>$ 5.00</td>
              <td>Indian Style</td>
              <td>
                <Text
                  bgColor={
                    status === "In stock" ? "brand.stock" : "brand.outofstock"
                  }
                  p={"4px 2px"}
                  textAlign={"center"}
                  borderRadius={"full"}
                  fontWeight={"700"}
                  fontSize={"14px"}
                  color={"brand.white"}
                >
                  {status}
                </Text>
              </td>
              <td>
                <Center>
                  <Flex gap={8}>
                    <Link to={``}>
                      <img src={edit} alt="edit icon" />
                    </Link>
                    <Link to={``}>
                      <img src={deleteOutline} alt="delete icon" />
                    </Link>
                  </Flex>
                </Center>
              </td>
            </tr>

            <tr>
              <td>#00002</td>
              <td>pizza name</td>
              <td>$ 5.00</td>
              <td>Indian Style</td>
              <td>
                <Text
                  bgColor={
                    status === "In stock" ? "brand.stock" : "brand.outofstock"
                  }
                  p={"4px 2px"}
                  textAlign={"center"}
                  borderRadius={"full"}
                  fontWeight={"700"}
                  fontSize={"14px"}
                  color={"brand.white"}
                >
                  {status}
                </Text>
              </td>
              <td>
                <Center>
                  <Flex gap={8}>
                    <Link to={``}>
                      <img src={edit} alt="edit icon" />
                    </Link>
                    <Link to={``}>
                      <img src={deleteOutline} alt="delete icon" />
                    </Link>
                  </Flex>
                </Center>
              </td>
            </tr>
          </tbody>
        </table>
      </DIV>
    </Layout>
  );
};

export default Pizza;

const DIV = styled.div`
  /* border: 1px solid red; */
  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
    width: 100%;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* width: 100rem; */
  }

  tbody > tr {
    border: 1px solid red;

    background-color: #e9e9e9;
  }
`;
