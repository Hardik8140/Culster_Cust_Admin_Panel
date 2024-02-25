import { Box, Icon, Stack } from "@chakra-ui/react";
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
// import foodIcon from "@iconify-icons/fluent/food-16-regular";
// import discountIcon from "@iconify-icons/bi/discount";
// import deliveryBoyIcon from "@iconify-icons/tabler-icons/delivery-truck";
// import pizzaIcon from "@iconify-icons/fluent/pizza-24-regular";
// import timeManageIcon from "@iconify-icons/bi/clock";
// import tableReservationIcon from "@iconify-icons/bi/table";
// import customerReviewIcon from "@iconify-icons/fluent/comment-multiple-24-filled";

const SidebarMenu = () => {
  const [isPizzaActive, setIsPizzaActive] = useState(false);

  return (
    // <Box border="1px solid red">
    <>
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
              color: active ? "white" : isHovered ? "#D60024" : "#424242",
              backgroundColor: active
                ? "#D60024"
                : isHovered
                ? "#D60024"
                : "white",
            }),
            icon: ({ active, isHovered }) => ({
              color: active || isHovered ? "white" : "#D60024",
            }),
          }}
        >
          <MenuItem
            icon={<MdOutlineDashboard />}
            component={<Link to="/" />}
            // active
            active={isPizzaActive}
          >
            Dashboard
          </MenuItem>
          <SubMenu
            onOpenChange={(open) => setIsPizzaActive(open)}
            icon={<Utensils />}
            label="Menu Items"
            active={isPizzaActive}
          >
            <MenuItem component={<Link to="/pizza" />}>Pizza</MenuItem>
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
