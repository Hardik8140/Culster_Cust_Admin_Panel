import React, { useState } from "react";
import Layout from "../Layout/Layout";
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
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { updown } from "../../assets";

const DeliveryBoy = () => {
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
          Delivery Boy
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
            <Link to="/addpizza">Add new Driver</Link>
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
                  <Text>Mobile Number</Text>
                  <img src={updown} onClick={handleOrderPrice} />
                </Flex>
              </th>
              <th>Email Address</th>
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
              <td>Hardik Gajera</td>
              <td>+91 8849619764</td>
              <td>hardik.gajera.d.84@gmail.com</td>
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  Available
                </Text>
              </td>
              <td>
                <Box w="80%" display="flex" justifyContent="space-between">
                  <IconButton
                    icon={<CiEdit size="40px" color="darkgreen" />}
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "none" }}
                  />
                  <IconButton
                    icon={<RiDeleteBin7Line size="40px" color="red" />}
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "none" }}
                  />
                </Box>
              </td>
            </tr>

            <tr>
              <td>#00002</td>
              <td>pizza name</td>
              <td>$ 5.00</td>
              <td>Indian Style</td>
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
                    _hover={{ backgroundColor: "none" }}
                  />
                  <IconButton
                    icon={<RiDeleteBin7Line size="40px" color="red" />}
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "none" }}
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

export default DeliveryBoy;

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
    background-color: #f3f3f3;
  }
`;
