import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { deleteOutline, edit, updown } from "../../assets";
import CustomeFoodItes from "../CustomeFoodItes";
import { linkStyle } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { get_delivery_boy } from "../../Redux/Delivery Boy/action";

const DeliveryBoy = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(0);

  const { delivery_boy, assign_boy } = useSelector(
    (store) => store.delivery_boyReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_delivery_boy());
  }, [dispatch]);

  const handleOrderId = () => {};

  const handleOrderName = () => {};

  const handleOrderPrice = () => {};

  const handleOrderStatus = () => {};

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(delivery_boy.length / itemsPerPage);
  const currentPageData = delivery_boy.slice(offset, offset + itemsPerPage);

  let status = "Available";
  return (
    <Layout>
      <Box>
        <CustomeFoodItes title={"Delivery Boy"} />

        <Flex my={6} justifyContent={"space-between"}>
          <InputGroup bgColor={"white"} borderRadius={"10px"} w={"fit-content"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon size={18} color="#949494" />
            </InputLeftElement>
            <Input type="search" placeholder="Search" id={"search"} />
          </InputGroup>
          <Button
            leftIcon={<AddIcon />}
            backgroundColor="brand.add"
            color="white"
            p="16px 20px"
            fontSize={"12px"}
            variant={"simpleWhite"}
          >
            <Link to="/adddelivery" style={linkStyle}>
              Add New Driver
            </Link>
          </Button>
        </Flex>
      </Box>

      <DIV>
        <table>
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
                  <Text>ID</Text>
                  <img src={updown} onClick={handleOrderId} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Name</Text>
                  <img src={updown} onClick={handleOrderName} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Mobile Number</Text>
                  <img src={updown} onClick={handleOrderPrice} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Email Address</Text>
                  <img src={updown} onClick={handleOrderStatus} />
                </Flex>
              </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentPageData) &&
              currentPageData.map((el, i) => (
                <tr key={i}>
                  <td>#{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.phoneNumber}</td>
                  <td>{el.emailAddress}</td>
                  <td>
                    <Text
                      bgColor={
                        status === "Available"
                          ? "brand.stock"
                          : "brand.outofstock"
                      }
                      p={"4px 2px"}
                      textAlign={"center"}
                      borderRadius={"full"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                      color={"brand.white"}
                    >
                      {status}
                    </Text>
                  </td>
                  <td>
                    <Center>
                      <Flex gap={8}>
                        <Link to={`/edit/boy/${el.id}`}>
                          <img src={edit} alt="edit icon" />
                        </Link>
                        <Link to={``}>
                          <img src={deleteOutline} alt="delete icon" />
                        </Link>
                      </Flex>
                    </Center>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </DIV>

      <PaginationBox>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={Math.ceil(delivery_boy.length / itemsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </PaginationBox>
    </Layout>
  );
};

export default DeliveryBoy;

const DIV = styled.div`
  /* border: 1px solid red; */
  table {
    border-collapse: separate;
    border-spacing: 0 0.7em;
    /* border: 1px solid red; */
    width: 100%;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 15px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 100rem;
  }

  tbody > tr {
    background-color: #f3f3f3;
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
