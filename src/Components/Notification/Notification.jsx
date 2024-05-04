import React from "react";
import Layout from "../Layout/Layout";
import { Text, Stack, Box, Flex } from "@chakra-ui/react";

const Notification = () => {
  return (
    <Layout>
      <Stack px={4} gap={4} bgColor={"brand.background"} minH={"100vh"}>
        <Text fontSize={"24px"} fontWeight={"bold"}>
          Notifications(3)
        </Text>
        <Text>Today</Text>
        <Stack fontSize={"14px"}>
          <Flex
            bgColor={"brand.white"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
          <Flex
            bgColor={"brand.white"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
          <Flex
            bgColor={"brand.orderbg"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
        </Stack>

        <Text mt={"1rem"}>Yesterday</Text>
        <Stack fontSize={"14px"}>
          <Flex
            bgColor={"brand.orderbg"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
          <Flex
            bgColor={"brand.orderbg"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
          <Flex
            bgColor={"brand.orderbg"}
            justify="space-between"
            py={"30px"}
            px={"25px"}
            cursor={"pointer"}
          >
            <Text>A new customer has placed an order.</Text>
            <Text>09.30 PM</Text>
          </Flex>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Notification;
