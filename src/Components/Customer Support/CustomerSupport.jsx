import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import CustomeFoodItes from "../CustomeFoodItes";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { linkStyle } from "../../data";
import { deleteOutline, edit, updown } from "../../assets";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get_support } from "../../Redux/Customer_Support/action";

const CustomerSupport = () => {
  const dispatch = useDispatch();
  const support = useSelector((store) => store.supportReducer.support);
  console.log(support);

  useEffect(() => {
    dispatch(get_support());
  }, [dispatch]);
  return (
    <Layout>
      <Box>
        <Text fontSize={"24px"} fontWeight={"700"}>
          Customer Support
        </Text>

        <Flex my={6} justifyContent={"space-between"}>
          <InputGroup
            bgColor={"white"}
            w="420px"
            h="40px"
            borderRadius={"5px"}
            // w={"fit-content"}
          >
            <InputLeftElement pointerEvents="none">
              <SearchIcon size={18} color="#949494" />
            </InputLeftElement>
            <Input type="search" placeholder="Search" id={"search"} />
          </InputGroup>
        </Flex>
      </Box>

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
              <th style={{ width: "fit-content", whiteSpace: "nowrap" }}>
                <Text>Customer Name</Text>
              </th>
              <th>
                <Text>Email Address</Text>
              </th>
              <th style={{ textAlign: "left" }}>
                <Text>Message</Text>
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              fontWeight: "400",
              fontSize: "16px",
              backgroundColor: "#F3F3F3",
            }}
          >
            {support.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{item.customerName}</td>
                <td style={{ textAlign: "center" }}>{item.customerEmail}</td>
                <td style={{ textAlign: "center" }}>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DIV>
    </Layout>
  );
};

export default CustomerSupport;

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

    background-color: #f3f3f3;
  }
`;
