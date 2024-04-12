import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOutletTimeSlots,
  get_all_outlets,
} from "../../Redux/TIme Manage/action";
import axios from "axios";

const TImeManage = () => {
  const [openingHour, setOpeningHour] = useState("");
  const [openingMinute, setOpeningMinute] = useState("");
  const [closingHour, setClosingHour] = useState("");
  const [closingMinute, setClosingMinute] = useState("");

  const [selectedDay, setSelectedDay] = useState("");

  const dispatch = useDispatch();
  const outlets = useSelector((store) => store.timeReducer.outlets);
  const outletOnId = useSelector((store) => store.timeReducer.outletOnId);

  useEffect(() => {
    dispatch(get_all_outlets());
  }, []);

  const handleOutletChange = (e) => {
    let outletId = e.target.value;
    dispatch(fetchOutletTimeSlots(outletId));
  };

  useEffect(() => {
    const selectedDaySlot = outletOnId.find(
      (slot) => slot.weekDay === selectedDay
    );
    console.log(selectedDay);
    if (selectedDaySlot) {
      const [openingHours, openingMinutes] =
        selectedDaySlot.startTime.split(":");
      setOpeningHour(openingHours);
      setOpeningMinute(openingMinutes);
      console.log(typeof openingHours, openingMinutes);
      const [closingHours, closingMinutes] = selectedDaySlot.endTime.split(":");
      setClosingHour(closingHours);
      setClosingMinute(closingMinutes);
    } else {
      setOpeningHour("");
      setOpeningMinute("");
      setClosingHour("");
      setClosingMinute("");
    }
  }, [outletOnId, selectedDay]);

  // console.log(closingHour, closingMinute);
  return (
    <Layout>
      <Box p={2}>
        <Heading as="h2" size="md" pb={6}>
          Set your business hours
        </Heading>
        <OrderedList pb={6}>
          <ListItem>Set your Opening Orders</ListItem>
          <ListItem>Set your Timeslots with start & end times</ListItem>
        </OrderedList>

        <Box backgroundColor="#ffffff" p={4} borderRadius={6}>
          <Select
            color=""
            pb="10px"
            w="30%"
            onChange={(e) => handleOutletChange(e)}
          >
            <option value="" style={{ color: "lightgray" }}>
              Select Restaurant
            </option>
            {outlets.map((el) => (
              <option key={el.outletId} value={el.outletId}>
                {el.outletName}
              </option>
            ))}
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

          {}
          <Box mt={5} boxShadow="base" p="15px" borderRadius="3px" mb={10}>
            <ButtonGroup>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Button
                  key={day}
                  backgroundColor={selectedDay === day ? "dark" : "lightgray"}
                  borderRadius="none"
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </Button>
              ))}
            </ButtonGroup>
          </Box>

          <Box display="flex">
            <Checkbox defaultChecked mr={10}>
              All Day Close
            </Checkbox>
            <Text>From:</Text>
            <Select w="10%" value={openingHour}>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}H`}</option>
              ))}
            </Select>
            <Text mx={1}>:</Text>
            <Select w="10%" value={openingMinute}>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}M`}</option>
              ))}
            </Select>
            <Text mx={2}>to</Text>
            <Select w="10%" value={closingHour}>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>{`${i
                  .toString()
                  .padStart(2, "0")}H`}</option>
              ))}
            </Select>
            <Text mx={1}>:</Text>
            <Select w="10%" value={closingMinute}>
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
