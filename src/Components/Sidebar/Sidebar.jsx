import { Box, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { logo } from "../../assets";
import {
  MdOutlineDashboard,
  MdOutlineReviews,
  MdTableBar,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  TicketPercent,
  Utensils,
  BellDot,
  Users,
  Pizza,
  Clock2,
} from "lucide-react";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // State to track active menu item
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    // setIsSidebarOpen(true); // Ensure sidebar remains open when a menu item is clicked
  };

  return (
    // <Box border="1px solid red">
    <>
      <Box
        style={{
          height: "114px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          position: "relative",
          // border: "1px solid red",
        }}
      ></Box>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: "white",
            padding: "10px",
            height: "auto",
            width: "240px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            src={logo}
            alt="Logo"
            style={{ width: "80%", maxWidth: "150px" }}
          />
        </div>
        <Menu
          menuItemStyles={{
            button: ({ active, isHovered }) => ({
              borderRadius: "10px",
              color: active ? "white" : "#424242",
              backgroundColor: active || isHovered ? "#D60024" : "white",
            }),
            icon: ({ active }) => ({
              color: active ? "white" : "#D60024",
            }),
          }}
        >
          <MenuItem
            icon={<MdOutlineDashboard />}
            active={activeMenu === "dashboard"}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </MenuItem>
          <SubMenu
            defaultOpen={false}
            onOpenChange={(open) => {
              if (open) setActiveMenu("pizza");
            }}
            icon={<Utensils />}
            label="Menu Items"
          >
            <MenuItem
              active={activeMenu === "pizza"}
              onClick={() => handleMenuClick("pizza")}
              component={<Link to="/pizza" />}
            >
              Pizza
            </MenuItem>
            <MenuItem>Line charts</MenuItem>
          </SubMenu>
          <SubMenu icon={<Utensils />} label="Extra Items">
            <MenuItem>Dashboard</MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem icon={<TicketPercent />}>Offers</MenuItem>
          <MenuItem icon={<BellDot />}>Notifications</MenuItem>
          <MenuItem icon={<Users />}>Delivery Boy</MenuItem>
          <MenuItem icon={<Pizza />}>Orders</MenuItem>
          <MenuItem icon={<Clock2 />}>Time Manage</MenuItem>
          <MenuItem icon={<MdTableBar />}>Table Reservation</MenuItem>
          <MenuItem icon={<MdOutlineReviews />}>Customer Review</MenuItem>
        </Menu>
      </Sidebar>
    </>
    // </Box>
  );
};

export default SidebarMenu;
