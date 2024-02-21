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
// import foodIcon from "@iconify-icons/fluent/food-16-regular";
// import discountIcon from "@iconify-icons/bi/discount";
// import deliveryBoyIcon from "@iconify-icons/tabler-icons/delivery-truck";
// import pizzaIcon from "@iconify-icons/fluent/pizza-24-regular";
// import timeManageIcon from "@iconify-icons/bi/clock";
// import tableReservationIcon from "@iconify-icons/bi/table";
// import customerReviewIcon from "@iconify-icons/fluent/comment-multiple-24-filled";

const SidebarMenu = () => {
  return (
    // <Box border="1px solid red">
    <>
      <Box
        style={{
          height: "114px",
          // float: "right",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          position: "relative",
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
            // border: "1px solid red",
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
            button: ({ active }) => ({
              borderRadius: "10px",
              color: active ? "white" : "#424242",
              backgroundColor: active ? "#D60024" : "white",
              ":hover": {
                backgroundColor: active ? "#D60024" : "white",
                // color: active ? "white" : "#424242",
              },
            }),
            icon: ({ active }) => ({
              color: active ? "white" : undefined,
            }),
          }}
        >
          <MenuItem
            icon={<MdOutlineDashboard />}
            component={<Link to="/" />}
            active
          >
            Dashboard
          </MenuItem>
          <SubMenu icon={<Utensils />} label="Menu Items">
            <MenuItem>Dashboard</MenuItem>
            <MenuItem> Line charts </MenuItem>
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
