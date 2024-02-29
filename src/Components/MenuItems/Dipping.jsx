import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
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
import { updown } from "../../assets";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dipping = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleOrderId = () => {};

  const handleOrderName = () => {};

  const handleOrderPrice = () => {};

  const handleOrderStatus = () => {};
  return (
    <Layout>
      <Box mt={3} w="68.7rem" backgroundColor="brand.background">
        <Heading as="h4" size="sm">
          Food Items
        </Heading>

        <Box display="flex" justifyContent="space-between" p={6}>
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
            <Link to="/add/dippingsauces">Add new Dipping Sauces</Link>
          </Button>
        </Box>
      </Box>

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
                <Flex gap={1}>
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
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  In Stock
                </Text>
              </td>
              <td>
                <Box w="80%" display="flex" justifyContent="space-between">
                  <IconButton
                    icon={<CiEdit size="40px" color="darkgreen" />}
                    backgroundColor="transparent"
                  />
                  <IconButton
                    icon={<RiDeleteBin7Line size="40px" color="darkgreen" />}
                    backgroundColor="transparent"
                  />
                </Box>
              </td>
            </tr>

            <tr>
              <td>#00002</td>
              <td>pizza name</td>
              <td>$ 5.00</td>
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  In Stock
                </Text>
              </td>
              <td>
                <Box
                  //   border="1px solid red"
                  w="80%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <IconButton
                    icon={<CiEdit size="40px" color="darkgreen" />}
                    backgroundColor="transparent"
                  />
                  <IconButton
                    icon={<RiDeleteBin7Line size="40px" color="darkgreen" />}
                    backgroundColor="transparent"
                  />
                </Box>
              </td>
            </tr>
          </tbody>
        </table>
      </DIV>
    </Layout>
  );
};

export default Dipping;

const DIV = styled.div`
  /* border: 1px solid red; */
  table {
    border-collapse: separate;
    border-spacing: 0 0.7em;
    /* border: 1px solid red; */
    width: 100%;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 15px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 100rem;
  }

  tbody > tr {
    background-color: #e9e9e9;
  }
`;
