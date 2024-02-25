import React, { useState } from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  ButtonGroup,
  Heading,
  ListItem,
  OrderedList,
  Select,
  Text,
  Button,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";

const TImeManage = () => {
  const [openingHour, setOpeningHour] = useState("");
  const [openingMinute, setOpeningMinute] = useState("");
  const [closingHour, setClosingHour] = useState("");
  const [closingMinute, setClosingMinute] = useState("");

  const handleOpeningHourChange = (event) => {
    setOpeningHour(event.target.value);
  };

  const handleOpeningMinuteChange = (event) => {
    setOpeningMinute(event.target.value);
  };

  const handleClosingHourChange = (event) => {
    setClosingHour(event.target.value);
  };

  const handleClosingMinuteChange = (event) => {
    setClosingMinute(event.target.value);
  };
  return (
    <Layout>
      <Box p={10} w="69rem" boxShadow="lg">
        <Heading as="h2" size="md" pb={6}>
          Set your business hours
        </Heading>
        <OrderedList pb={6}>
          <ListItem>Set your Opening Orders</ListItem>
          <ListItem>Set your Timeslots with start & end times</ListItem>
        </OrderedList>

        <Box backgroundColor="#ffffff" p={4} borderRadius={6}>
          <Select
            placeholder="Select Restourent"
            color="lightgray"
            pb="10px"
            w="30%"
          >
            {/* <option value="" color="gray">
              Select Restarunt
            </option> */}

            {/* Here map the all restorent */}
          </Select>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="600" pb="10px">
              Restaurant Time
            </Text>
            <Button
              leftIcon={<CiEdit color="white" size="20px" />}
              backgroundColor="brand.primary"
              color="white"
            >
              Edit
            </Button>
          </Box>

          <Box boxShadow="base" p="15px" borderRadius="3px">
            <Text>Organization Business Hours</Text>
          </Box>
          <Box mt={5} boxShadow="base" p="15px" borderRadius="3px" mb={10}>
            <ButtonGroup>
              <Button backgroundColor="lightgray" borderRadius="none">
                Sun
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Mon
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Tue
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Wed
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Thu
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Fri
              </Button>
              <Button backgroundColor="lightgray" borderRadius="none">
                Sat
              </Button>
            </ButtonGroup>
          </Box>

          <Box display="flex">
            <Checkbox defaultChecked mr={10}>
              All Day Close
            </Checkbox>

            <Select
              w="10%"
              value={openingHour}
              onChange={handleOpeningHourChange}
            >
              {/* Dynamically generate options for opening hours */}
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}H`}</option>
              ))}
            </Select>

            <Text mx={1}>:</Text>

            <Select
              w="10%"
              value={openingMinute}
              onChange={handleOpeningMinuteChange}
            >
              {/* Dynamically generate options for opening minutes */}
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}M`}</option>
              ))}
            </Select>

            <Text mx={2}>to</Text>

            <Select
              w="10%"
              value={closingHour}
              onChange={handleClosingHourChange}
            >
              {/* Dynamically generate options for closing hours */}
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}H`}</option>
              ))}
            </Select>

            <Text mx={1}>:</Text>

            <Select
              w="10%"
              value={closingMinute}
              onChange={handleClosingMinuteChange}
            >
              {/* Dynamically generate options for closing minutes */}
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}M`}</option>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TImeManage;
