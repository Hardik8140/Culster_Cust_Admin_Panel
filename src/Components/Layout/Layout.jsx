import { Flex } from "antd";
import React from "react";
import SidebarMenu from "../Sidebar/Sidebar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex>
      <SidebarMenu />
      <Box>{children}</Box>
    </Flex>
  );
};

export default Layout;
