import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { logo } from "../../assets";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { Icon as IconifyIcon } from "@iconify/react";
import foodIcon from "@iconify-icons/fluent/food-20-regular";

const SidebarMenu = () => {
  return (
    // <Box border="1px solid red">
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "white",
          padding: "10px",
          height: "auto",
          border: "1px solid red",
          width: "240px",
        },
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "70px",
          marginBottom: "30px",
          marginTop: "10px",
        }}
      >
        <img
          src={logo} // Replace "your-logo-url.png" with the URL or path to your image
          alt="Logo"
          style={{ width: "80%", maxWidth: "150px" }} // Adjust width and max-width as needed
        />
      </div>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#424242",
                backgroundColor: active ? "#" : undefined,
              };
          },
          icon: ({ level, active }) => ({
            color: active ? "white" : undefined,
            background: active ? "red" : undefined,
          }),
        }}
      >
        <MenuItem
          icon={<MdOutlineDashboard />}
          component={<Link to="/dashboard" />}
        >
          {" "}
          Dashboard{" "}
        </MenuItem>
        <SubMenu icon={<IconifyIcon icon={foodIcon} />} label="Menu Items">
          <MenuItem>Dashboard</MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu label="Extra Items">
          <MenuItem>Dashboard</MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem>Offers</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>Delivery Boy</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Time Manage</MenuItem>
        <MenuItem>Table Reservation</MenuItem>
        <MenuItem>Customer Review</MenuItem>
      </Menu>
    </Sidebar>
    // </Box>
  );
};

export default SidebarMenu;
