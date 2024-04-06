import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { get_table_reservation } from "../../Redux/Table Reservation/action";
import { updown } from "../../assets";
import Layout from "../Layout/Layout";

const TableReservation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const reserveTable = useSelector(
    (store) => store.reserveTableReducer.reserveTable
  );
  const [selectedReservation, setSelectedReservation] = useState(null);
  const dispatch = useDispatch();
  // console.log(reserveTable);

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(get_table_reservation());
  }, []);

  const handleViewDetails = (reservation) => {
    setSelectedReservation(reservation);
    onOpen();
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const formatTime = (timeString) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return new Date(timeString).toLocaleTimeString("en-GB", options);
  };

  return (
    <Layout>
      {/* <Box> */}
      <Stack gap={4} bgColor={"brand.background"}>
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
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {reserveTable.map((el) => (
                <tr key={el.reserveTableId}>
                  <td>{el.reserveTableId}</td>
                  <td>{el.name}</td>
                  <td>{el.noOfGuest}</td>
                  <td>{formatDate(el.dateTime)}</td>
                  <td>{formatTime(el.dateTime)}</td>
                  <td>
                    <Text
                      bgColor={el.status ? null : "brand.pending"}
                      p={"4px 4px "}
                      textAlign={"center"}
                      borderRadius={"full"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                      color={"brand.white"}
                    >
                      {el.status ? "" : "Pending..."}
                    </Text>
                  </td>
                  <td>
                    {/* <Center> */}
                    <Button
                      p={"14px 25px 14px 25px"}
                      margin={"auto"}
                      borderRadius={"10px"}
                      fontSize={"14px"}
                      variant={"simpleWhite"}
                      fontWeight={"500"}
                      bgColor={"brand.buttonbg"}
                      onClick={() => handleViewDetails(el)}
                    >
                      View Details
                    </Button>
                    {/* </Center> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DIV>

        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <Center>
            <ModalContent>
              <ModalBody p={10}>
                <Box textAlign="center" pb={8}>
                  <Heading size="md" as="h3">
                    Table Reservation {selectedReservation?.reserveTableId}
                  </Heading>
                </Box>
                <SimpleGrid columns={2} spacing={6}>
                  <Box display="flex">
                    <Text color="#919191" fontWeight="600">
                      Customer Name :{" "}
                    </Text>
                    <Text fontWeight="700" pl={3}>
                      {selectedReservation?.name}
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text color="#919191" fontWeight="600">
                      Number of Person :
                    </Text>
                    <Text fontWeight="700" pl={3}>
                      {selectedReservation?.noOfGuest}
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text color="#919191" fontWeight="600">
                      Booking Date :
                    </Text>
                    <Text fontWeight="700" pl={3}>
                      {formatDate(selectedReservation?.dateTime)}
                    </Text>
                  </Box>
                  <Box display="flex">
                    <Text color="#919191" fontWeight="600">
                      Booking Time :
                    </Text>
                    <Text fontWeight="700" pl={3}>
                      {formatTime(selectedReservation?.dateTime)}
                    </Text>
                  </Box>
                </SimpleGrid>
              </ModalBody>
              np
              <ModalFooter display="flex" justifyContent="center">
                <Box w="30%" display="flex" justifyContent="space-between">
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
          </Center>
        </Modal>
      </Stack>
      {/* </Box> */}
    </Layout>
  );
};

export default TableReservation;

const DIV = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 0 0.3em;
    width: 100%;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
    // text-align: left;
  }
  thead > tr {
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  tbody > tr {
    background-color: #e9e9e9;
  }
`;
