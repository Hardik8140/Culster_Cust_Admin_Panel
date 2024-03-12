import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { ActiveOrders } from "../Dashboard/ActiveOrders";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { updown } from "../../assets";
import { Link } from "react-router-dom";
import { linkStyle } from "../../data";

const Orders = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Layout>
      {/* <ActiveOrders /> */}
      <Stack my={12} p={4} gap={4} bgColor={"brand.background"}>
        <Text fontSize={"24px"} fontWeight={"bold"}>
          All Orders
        </Text>
        <Box display="flex" w="70%">
          <InputGroup>
            <InputLeftElement>
              <SearchIcon size={20} color={"#949494"} />
            </InputLeftElement>
            <Input
              backgroundColor={"white"}
              type={"text"}
              value={search}
              onChange={handleSearch}
              placeholder={"Search"}
              w="90%"
            />
          </InputGroup>
          <Select w="50%">
            <option value="">All Orders</option>
          </Select>
        </Box>

        {/* table */}
        <DIV>
          <table width={"100%"}>
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
                    <Text>Order ID</Text>
                    <img src={updown} />
                  </Flex>
                </th>
                <th>Customer Name</th>
                <th>Item</th>
                <th>Trans Type</th>
                <th>Payment Type</th>
                <th>
                  <Flex gap={1}>
                    <Text>Status</Text>
                    <img src={updown} />
                  </Flex>
                </th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#00001</td>
                <td>John Doe</td>
                <td>Pizza & 1 more</td>
                <td>Delivery</td>
                <td>Debit Card</td>
                <td>
                  <Text
                    bgColor={"brand.pending"}
                    color={"white"}
                    borderRadius={"44px"}
                    p={"4px 10px"}
                    textAlign={"center"}
                    fontWeight={"700"}
                    fontSize={"14px"}
                  >
                    Pending
                  </Text>
                </td>
                <td>12/01/2024</td>
                <td style={{ textAlign: "center" }}>
                  <Link to="/orders" style={linkStyle}>
                    <Button
                      p={"14px 25px 14px 25px"}
                      margin={"auto"}
                      borderRadius={"10px"}
                      fontSize={"14px"}
                      variant={"simpleWhite"}
                      fontWeight={"500"}
                      bgColor={"brand.buttonbg"}
                    >
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>#00001</td>
                <td>John Doe</td>
                <td>Pizza & 1 more</td>
                <td>Delivery</td>
                <td>Debit Card</td>
                <td>
                  <Text
                    bgColor={"brand.progress"}
                    color={"white"}
                    borderRadius={"44px"}
                    p={"4px 10px"}
                    fontSize={"14px"}
                    textAlign={"center"}
                    fontWeight={"700"}
                  >
                    In Progress
                  </Text>
                </td>
                <td>12/01/2024</td>
                <td style={{ textAlign: "center" }}>
                  <Link to="/orders" style={linkStyle}>
                    <Button
                      p={"14px 25px 14px 25px"}
                      margin={"auto"}
                      borderRadius={"10px"}
                      fontSize={"14px"}
                      variant={"simpleWhite"}
                      fontWeight={"500"}
                      bgColor={"brand.buttonbg"}
                    >
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>

              <tr>
                <td>#00001</td>
                <td>John Doe</td>
                <td>Pizza & 1 more</td>
                <td>Delivery</td>
                <td>Debit Card</td>
                <td>
                  <Text
                    bgColor={"brand.ontheway"}
                    color={"white"}
                    borderRadius={"44px"}
                    p={"4px 10px"}
                    fontSize={"14px"}
                    textAlign={"center"}
                    fontWeight={"700"}
                  >
                    on the way
                  </Text>
                </td>
                <td>12/01/2024</td>
                <td style={{ textAlign: "center" }}>
                  <Link to="/orders" style={linkStyle}>
                    <Button
                      p={"14px 25px 14px 25px"}
                      margin={"auto"}
                      borderRadius={"10px"}
                      fontSize={"14px"}
                      variant={"simpleWhite"}
                      fontWeight={"500"}
                      bgColor={"brand.buttonbg"}
                    >
                      View Details
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </DIV>
      </Stack>
    </Layout>
  );
};

export default Orders;

const DIV = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 0 0.3em;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  tbody > tr {
    background-color: #e9e9e9;
  }
`;
