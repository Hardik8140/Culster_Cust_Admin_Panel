import { Flex } from "antd";
import React from "react";
import SidebarMenu from "../Sidebar/Sidebar";
import { Box, Stack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex>
      <SidebarMenu />
      <Stack mb={24}>
        <Box
          style={{
            height: "114px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            position: "relative",
          }}
        ></Box>
        <Box>{children}</Box>
      </Stack>
    </Flex>
  );
};

export default Layout;
