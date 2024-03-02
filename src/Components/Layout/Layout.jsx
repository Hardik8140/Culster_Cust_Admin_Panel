import { Flex } from "antd";
import SidebarMenu from "../Sidebar/Sidebar";
import { Box, Stack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex gap={0}>
      <SidebarMenu />
      <Stack mb={24} gap={0}>
        <Box
          style={{
            height: "114px",
            boxShadow: " 0px 8px 20px 0px #0000001C",
            position: "relative",
          }}
        ></Box>
        <Box
          bgColor={"brand.background"}
          width={"82vw"}
          px={10}
          py={8}
          minH={"90vh"}
        >
          {children}
        </Box>
      </Stack>
    </Flex>
  );
};

export default Layout;
