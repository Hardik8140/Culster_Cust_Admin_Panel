import { Flex } from "antd";
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
        <Box bgColor={"brand.dashboard"} px={"10px"} py={8} width={"82vw"}>
          {children}
        </Box>
      </Stack>
    </Flex>
  );
};

export default Layout;
