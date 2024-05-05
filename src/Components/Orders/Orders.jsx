import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { ActiveOrders } from "../Dashboard/ActiveOrders";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { updown } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { linkStyle } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { get_All_Orders } from "../../Redux/Orders/action";
import ReactPaginate from "react-paginate";

const Orders = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(0);
  const [orderStatus, setOrderStatuts] = useState("");

  const { loading, error, orders } = useSelector((store) => store.orderReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_All_Orders());
  }, [dispatch]);

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

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(orders.length / itemsPerPage);
  const filteredOrders = orderStatus
    ? orders.filter((order) => order.status === orderStatus)
    : orders;
  const currentPageData = filteredOrders.slice(offset, offset + itemsPerPage);

  return (
    <Layout>
      {/* <ActiveOrders /> */}
      <Stack p={4} gap={4} bgColor={"brand.background"}>
        <Text fontSize={"24px"} fontWeight={"bold"}>
          All Orders
        </Text>
        <Box display="flex" w="70%">
          <InputGroup>
            <InputLeftElement>
              <SearchIcon size={20} color={"#949494"} />
            </InputLeftElement>
            <Input
              backgroundColor={"white"}
              type={"text"}
              value={search}
              onChange={handleSearch}
              placeholder={"Search"}
              w="90%"
            />
          </InputGroup>
          <Select
            w="50%"
            onChange={(e) => setOrderStatuts(e.target.value)}
            cursor={"pointer"}
            bg={"white"}
          >
            <option value="">All Orders</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="PENDING">Pending</option>
            <option value="PICKUP">Pickup</option>
          </Select>
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
              {Array.isArray(currentPageData) &&
                currentPageData.map((el, i) => (
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
                            : el.status === "PICKEDUP"
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
                        {el.status.charAt(0).toUpperCase() +
                          el.status.slice(1).toLowerCase()}
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
      <Box pr={10}>
        <PaginationBox>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(orders.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </PaginationBox>
      </Box>
    </Layout>
  );
};

export default Orders;

const DIV = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 0 0.3em;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  tbody > tr {
    background-color: #e9e9e9;
  }
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin-top: 20px;

  .pagination {
    display: flex;
    list-style: none;
    gap: 10px;
    padding: 0;
    margin: 0;
    background-color: white;
    border-radius: 10px;
  }

  .pagination__item {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .pagination__link {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    text-decoration: none;
  }

  .pagination__link--active {
    background-color: red;
    padding: 0px 8px;
    border-radius: 8px;
    border: 1px solid red;
    color: #fff;
  }

  .pagination__link--disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
