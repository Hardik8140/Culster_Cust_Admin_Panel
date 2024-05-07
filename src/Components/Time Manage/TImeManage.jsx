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
  saveOutletTimeSlots,
} from "../../Redux/TIme Manage/action";
import axios from "axios";
import Cookies from "js-cookie";

const TImeManage = () => {
  const [openingHour, setOpeningHour] = useState("");
  const [openingMinute, setOpeningMinute] = useState("");
  const [closingHour, setClosingHour] = useState("");
  const [closingMinute, setClosingMinute] = useState("");
  const [isAllDayClose, setIsAllDayClose] = useState(false);

  const [selectedDay, setSelectedDay] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const outlets = useSelector((store) => store.timeReducer.outlets);
  const outletOnId = useSelector((store) => store.timeReducer.outletOnId);

  useEffect(() => {
    dispatch(get_all_outlets());
  }, []);

  const handleOutletChange = (e) => {
    let outletId = e.target.value;
    dispatch(fetchOutletTimeSlots(outletId));
    Cookies.set("outletId", outletId);
  };

  useEffect(() => {
    const selectedDaySlot = outletOnId.find(
      (slot) => slot.weekDay === selectedDay
    );
    // console.log(selectedD/ay);
    if (selectedDaySlot) {
      const [openingHours, openingMinutes] =
        selectedDaySlot.startTime.split(":");
      const [closingHours, closingMinutes] = selectedDaySlot.endTime.split(":");
      setOpeningHour(openingHours + "H");
      setOpeningMinute(openingMinutes + "M");
      setClosingHour(closingHours + "H");
      setClosingMinute(closingMinutes + "M");
    } else {
      setOpeningHour("");
      setOpeningMinute("");
      setClosingHour("");
      setClosingMinute("");
    }
  }, [outletOnId, selectedDay]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    const timeSlots = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
      (day, i) => ({
        outletTimeId: i + 1,
        weekDay: day,
        isAllDayClose,
        status: isAllDayClose ? "close" : "open",
        startTime: isAllDayClose
          ? ""
          : openingHour.replace("H", "") + ":" + openingMinute.replace("M", ""),
        endTime: isAllDayClose
          ? ""
          : closingHour.replace("H", "") + ":" + closingMinute.replace("M", ""),
      })
    );

    const requestData = {
      outletId: Cookies.get("outletId"),
      timeSlots: timeSlots,
    };

    dispatch(saveOutletTimeSlots(requestData)).then(() => {
      setEditMode(false);
    });
  };

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
            {editMode ? (
              <Button
                leftIcon={<CiEdit color="white" size="20px" />}
                backgroundColor="brand.primary"
                color="white"
                onClick={handleSave}
              >
                Save
              </Button>
            ) : (
              <Button
                leftIcon={<CiEdit color="white" size="20px" />}
                backgroundColor="brand.primary"
                color="white"
                onClick={toggleEditMode}
              >
                Edit
              </Button>
            )}
          </Box>

          <Box boxShadow="base" p="15px" borderRadius="3px">
            <Text>Organization Business Hours</Text>
          </Box>

          <Box mt={5} boxShadow="base" p="15px" borderRadius="3px" mb={10}>
            <ButtonGroup>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Button
                  key={day}
                  backgroundColor={selectedDay === day ? "dark" : "lightgray"}
                  borderRadius="none"
                  onClick={() => setSelectedDay(day)}
                  disabled={!editMode}
                >
                  {day}
                </Button>
              ))}
            </ButtonGroup>
          </Box>

          <Box display="flex">
            <Checkbox
              mr={10}
              defaultChecked={isAllDayClose}
              onChange={(e) => setIsAllDayClose(e.target.checked)}
              disabled={!editMode}
            >
              All Day Close
            </Checkbox>
            <Text>From:</Text>
            <Select
              w="10%"
              value={openingHour}
              onChange={(e) => setOpeningHour(e.target.value)}
              disabled={!editMode}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option
                  key={i}
                  value={`${i.toString().padStart(2, "0")}H`}
                >{`${i.toString().padStart(2, "0")}H`}</option>
              ))}
            </Select>
            <Text mx={1}>:</Text>
            <Select
              w="10%"
              value={openingMinute}
              onChange={(e) => setOpeningMinute(e.target.value)}
              disabled={!editMode}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option
                  key={i}
                  value={`${i.toString().padStart(2, "0")}M`}
                >{`${i.toString().padStart(2, "0")}M`}</option>
              ))}
            </Select>
            <Text mx={2}>to</Text>
            <Select
              w="10%"
              value={closingHour}
              onChange={(e) => setClosingHour(e.target.value)}
              disabled={!editMode}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option
                  key={i}
                  value={`${i.toString().padStart(2, "0")}H`}
                >{`${i.toString().padStart(2, "0")}H`}</option>
              ))}
            </Select>
            <Text mx={1}>:</Text>
            <Select
              w="10%"
              value={closingMinute}
              onChange={(e) => setClosingMinute(e.target.value)}
              disabled={!editMode}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option
                  key={i}
                  value={`${i.toString().padStart(2, "0")}M`}
                >{`${i.toString().padStart(2, "0")}M`}</option>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default TImeManage;
