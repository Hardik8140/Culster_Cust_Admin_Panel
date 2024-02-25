import React, { useState } from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { updown } from "../../assets";

const TableReservation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Layout>
      <Box>
        <Stack my={12} p={4} gap={4} bgColor={"brand.background"}>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Table Reservation
          </Text>

          {/* table */}
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
                      <Text>Reservation ID</Text>
                      <img src={updown} />
                    </Flex>
                  </th>
                  <th>Customer Name</th>
                  <th>No. of Person</th>
                  <th>Booking Date</th>
                  <th>Booking Time</th>
                  <th>
                    <Flex gap={1}>
                      <Text>Status</Text>
                      <img src={updown} />
                    </Flex>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#00001</td>
                  <td>John Doe</td>
                  <td>5</td>
                  <td>25/01/2024</td>
                  <td>20:00</td>
                  <td>
                    <Text
                      bgColor={"brown"}
                      color={"white"}
                      borderRadius={"2rem"}
                      p={".5rem 1.5rem"}
                    >
                      Pending
                    </Text>
                  </td>
                  <td>
                    <Button
                      py={6}
                      px={12}
                      borderRadius={16}
                      bgColor={"brand.buttonbg"}
                      onClick={onOpen}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </DIV>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              {/* <ModalHeader>Table Reservation</ModalHeader> */}
              {/* <ModalCloseButton /> */}
              <ModalBody p={10}>
                <Box textAlign="center" pb={8}>
                  <Heading size="md" as="h3">
                    Table Reservation
                  </Heading>
                </Box>
                <SimpleGrid columns={2} spacing={10}>
                  <Box>
                    <Text>Customer Name : </Text>
                    <Text></Text>
                  </Box>
                  <Box>
                    <Text>Number of Person : </Text>
                    <Text></Text>
                  </Box>
                  <Box>
                    <Text>Booking Date : </Text>
                    <Text></Text>
                  </Box>
                  <Box>
                    <Text>Booking Time : </Text>
                    <Text></Text>
                  </Box>
                </SimpleGrid>
              </ModalBody>

              <ModalFooter display="flex" justifyContent="center">
                <Box w="50%" display="flex" justifyContent="space-between">
                  <Button backgroundColor="brand.primary" color="white">
                    Reject
                  </Button>
                  <Button backgroundColor="brand.add" color="white">
                    Accept
                  </Button>
                </Box>
                {/* <Button variant="ghost">Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Box>
    </Layout>
  );
};

export default TableReservation;

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
