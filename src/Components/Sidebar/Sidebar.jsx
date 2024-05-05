import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { logo, menu } from "../../assets";
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
import { useDispatch, useSelector } from "react-redux";
import { getMenuItem } from "../../Redux/MenuItems/action";
import { linkStyle } from "../../data";
import styled from "styled-components";

const SidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);
  const [subMenuItem, setSubMenuItem] = useState("");
  const { menuItem, loading, error } = useSelector(
    (store) => store.menuItemsReducer
  );
  const href = window.location.href;
  // console.log(menuItem);

  const dispatch = useDispatch();
  useEffect(() => {
    if (menuItem.length === 0) {
      dispatch(getMenuItem());
    }
  }, [dispatch]);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  useEffect(() => {
    let currentLocation = href;
    currentLocation = currentLocation.split("/");
    const endpoint = currentLocation[currentLocation.length - 1];
    for (let item of menuItem) {
      let temp = item.name.toLowerCase().replace(/\s+/g, "");
      if (temp === endpoint) {
        // setIsMenuItemOpen(true);
        setActiveMenu("pizza");
        const submenu = document.querySelector(".subMenuItem");
        submenu.classList.add("ps-open");
        console.log(submenu);
        setSubMenuItem(item.name);
        setTimeout(() => {}, 1000);
        break;
      }
    }
  }, [menuItem, href]);
  // const handleMenuItemClick = (name) => {
  //   const path = `${name.toLowerCase().replace(/\s+/g, "")}`;
  //   navigate(path);
  //   setActiveMenu("pizza");
  // };
  return (
    <DIV>
      <Sidebar
        className="sideBar"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100,
            backgroundColor: "white",
            padding: "10px",
            minHeight: "100vh",
            width: "250px",
            overflow: "auto",
            boxShadow: "2px 0px 20px 0px #00000026",
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
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80%", maxWidth: "70px" }}
            />
          </Link>
        </div>
        <Menu
          menuItemStyles={{
            button: ({ active, isHovered }) => ({
              borderRadius: "10px",
              color: active ? "white" : "#424242",
              backgroundColor:
                active || isHovered ? "#D60024 !important" : "transparent",
            }),
            icon: ({ active }) => ({
              color: active ? "white" : "#D60024",
            }),
          }}
        >
          <MenuItem
            icon={
              <MdOutlineDashboard
                size={"22px"}
                color={activeMenu !== "dashboard" && "#4a4a4b"}
              />
            }
            active={activeMenu === "dashboard"}
            onClick={() => handleMenuClick("dashboard")}
            component={
              <Link
                to="/"
                style={{
                  ...linkStyle,
                  color: activeMenu === "dashboard" && "white",
                }}
              />
            }
          >
            Dashboard
          </MenuItem>
          <SubMenu
            // defaultOpen={isMenuItemOpen}
            className="subMenuItem"
            onOpenChange={(open) => {
              if (open) setActiveMenu("pizza");
            }}
            active={activeMenu === "pizza"}
            style={{
              ...linkStyle,
              color: activeMenu === "dashboard" && "black",
            }}
            icon={
              <Utensils
                size={"22px"}
                color={activeMenu !== "pizza" ? "#4a4a4b" : "white"}
              />
            }
            label="Menu Items"
          >
            {Array.isArray(menuItem) &&
              menuItem.map((el, i) => (
                <Box
                  key={i}
                  pl="1.5rem"
                  pt={2}
                  pb={2}
                  color={"#919191"}
                  bgColor={"brand.orderbg"}
                >
                  <UnorderedList>
                    <ListItem
                      color={
                        subMenuItem === el.name
                          ? "brand.primary"
                          : "brand.black"
                      }
                    >
                      <Link
                        style={linkStyle}
                        to={`/${el.name.toLowerCase().replace(/\s+/g, "")}`}
                      >
                        {el.name}
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              ))}
          </SubMenu>
          <SubMenu
            icon={
              <Utensils
                size={"22px"}
                color={activeMenu !== "extraitems" ? "#4a4a4b" : "white"}
              />
            }
            label="Extra Items"
          >
            <Box
              pl="1.5rem"
              pt={2}
              pb={2}
              color={"#1F1F1F"}
              bgColor={"brand.orderbg"}
            >
              <UnorderedList>
                <ListItem pt={2} pb={2}>
                  <Link style={linkStyle} to="/toppings">
                    Toppings
                  </Link>
                </ListItem>
                <ListItem pt={2} pb={2}>
                  <Link style={linkStyle} to="/drizzles">
                    Drizzle it up!
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </SubMenu>

          <MenuItem
            icon={
              <TicketPercent
                size={"22px"}
                color={activeMenu !== "offers" ? "#4a4a4b" : "white"}
              />
            }
          >
            Offers
          </MenuItem>
          <MenuItem
            icon={
              <BellDot
                size={"22px"}
                color={activeMenu !== "notifications" ? "#4a4a4b" : "white"}
              />
            }
          >
            Notifications
          </MenuItem>
          <MenuItem
            icon={
              <Users
                size={"22px"}
                color={activeMenu !== "deliveryboy" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/boy" />}
          >
            Delivery Boy
          </MenuItem>
          <MenuItem
            icon={
              <Pizza
                size={"22px"}
                color={activeMenu !== "orders" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/orders" />}
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={
              <Clock2
                size={"22px"}
                color={activeMenu !== "timemange" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/time" />}
          >
            Time Manage
          </MenuItem>
          <MenuItem
            icon={
              <MdTableBar
                size={"22px"}
                color={activeMenu !== "tablereservation" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/table" />}
          >
            Table Reservation
          </MenuItem>
          <MenuItem
            icon={
              <MdOutlineReviews
                color={activeMenu !== "customerreview" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/customer" size={"22px"} />}
          >
            Customer Review
          </MenuItem>
          <MenuItem
            icon={
              <MdOutlineReviews
                color={activeMenu !== "customersupport" ? "#4a4a4b" : "white"}
              />
            }
            component={<Link to="/customersupport" size={"22px"} />}
          >
            Customer Support
          </MenuItem>
        </Menu>
      </Sidebar>
    </DIV>
  );
};
export default SidebarMenu;

const DIV = styled.div`
  .ps-sidebar-container::-webkit-scrollbar {
    display: none;
  }
  .ps-sidebar-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
