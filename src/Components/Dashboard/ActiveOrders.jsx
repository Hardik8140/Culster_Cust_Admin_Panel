import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
import styled from "styled-components";
import { updown } from "../../assets";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../../data";
import { useSelector } from "react-redux";

export const ActiveOrders = () => {
  const { loading, error, dashboard } = useSelector(
    (store) => store.dashboardReducer
  );
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  };

  const handleDetails = (id, event) => {
    event.preventDefault();
    navigate(`/orders/${id}`);
    console.log("Order ID:", id);
  };

  return (
    <Stack my={12} p={4} gap={4} bgColor={"#FFFFFF"}>
      <Text fontSize={"24px"} fontWeight={"bold"}>
        Active Orders
      </Text>
      <Box>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon size={18} color={"#949494"} />
          </InputLeftElement>
          <Input
            type={"text"}
            value={search}
            onChange={handleSearch}
            placeholder={"Search"}
            w={"auto"}
          />
        </InputGroup>
      </Box>

      {/* table */}
      <DIV>
        <table width={"100%"}>
          <thead
            style={{
              fontWeight: "600",
              fontSize: "16px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <tr>
              <th>
                <Flex gap={1}>
                  <Text>Order ID</Text>
                  <img src={updown} />
                </Flex>
              </th>
              <th>Customer Name</th>
              <th>Item</th>
              <th>Trans Type</th>
              <th>Payment Type</th>
              <th>
                <Flex gap={1}>
                  <Text>Status</Text>
                  <img src={updown} />
                </Flex>
              </th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(dashboard.activeOrders) &&
              dashboard.activeOrders.map((el, i) => (
                <tr key={i}>
                  <td>{el.orderId}</td>
                  <td style={{ textWrap: "nowrap" }}>{el.customerName}</td>
                  <td style={{ textAlign: "center" }}>
                    {el.items.length > 0 ? el.items[0].title : "N/A"}
                  </td>
                  <td>{el.paymentType}</td>
                  <td>{el.transferType}</td>
                  <td>
                    <Text
                      bgColor={
                        el.status === "PENDING"
                          ? "brand.pending"
                          : el.status === "ACCEPTED"
                          ? "brand.add"
                          : el.status === "REJECTED"
                          ? "brand.primary"
                          : "transparent"
                      }
                      color={"white"}
                      borderRadius={"44px"}
                      p={"4px 10px"}
                      textAlign={"center"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                    >
                      {el.status}
                    </Text>
                  </td>
                  <td>{formatDate(el.orderDate)}</td>
                  <td style={{ textAlign: "center" }}>
                    <Link style={linkStyle}>
                      <Button
                        p={"14px 25px 14px 25px"}
                        margin={"auto"}
                        borderRadius={"10px"}
                        fontSize={"14px"}
                        variant={"simpleWhite"}
                        fontWeight={"500"}
                        bgColor={"brand.buttonbg"}
                        onClick={(event) => handleDetails(el.orderId, event)}
                      >
                        View Details
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </DIV>
    </Stack>
  );
};

const DIV = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  thead > tr {
    box-shadow: 0px 1px 4px 0px #00000033;
  }

  tbody > tr {
    background-color: #f3f3f3;
  }
`;
