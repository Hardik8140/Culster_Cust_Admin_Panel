import { Box, Icon, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import {
  TicketPercent,
  Utensils,
  BellDot,
  Users,
  Pizza,
  Clock2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuItem } from "../../Redux/MenuItems/action";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // State to track active menu item
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { menuItem, loading, error } = useSelector(
    (store) => store.menuItemsReducer
  );
  console.log(menuItem);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMenuItem());
  }, [dispatch]);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMenuItemClick = (name) => {
    const path = `${name.toLowerCase().replace(/\s+/g, "")}`;
    navigate(path);
  };

  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            // position: "fixed",
            position: "--webkit-sticky",
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: "white",
            padding: "10px",
            height: "auto",
            width: "240px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            overflowY: "auto",
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
            component={<Link to="/" />}
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
            {Array.isArray(menuItem) &&
              menuItem.map((el, i) => (
                <Box key={i} pl="3rem" pt={2} pb={2}>
                  <UnorderedList alignItems="center">
                    <ListItem
                      onClick={() => handleMenuItemClick(`/${el.name}`)}
                    >
                      <Link>{el.name}</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              ))}
            {/* <MenuItem
              active={activeMenu === "pizza"}
              onClick={() => handleMenuClick("pizza")}
              component={<Link to="/pizza" />}
            >
              Pizza
            </MenuItem> */}
          </SubMenu>
          <SubMenu icon={<Utensils />} label="Extra Items">
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Line charts</MenuItem>
          </SubMenu>
          <MenuItem icon={<TicketPercent />}>Offers</MenuItem>
          <MenuItem icon={<BellDot />}>Notifications</MenuItem>
          <MenuItem icon={<Users />} component={<Link to="/boy" />}>
            Delivery Boy
          </MenuItem>
          <MenuItem icon={<Pizza />} component={<Link to="/orders" />}>
            Orders
          </MenuItem>
          <MenuItem icon={<Clock2 />} component={<Link to="/time" />}>
            Time Manage
          </MenuItem>
          <MenuItem icon={<MdTableBar />} component={<Link to="/table" />}>
            Table Reservation
          </MenuItem>
          <MenuItem
            icon={<MdOutlineReviews />}
            component={<Link to="/customer" />}
          >
            Customer Review
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
