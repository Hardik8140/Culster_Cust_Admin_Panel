import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import Layout from "../Layout/Layout";
import { Delete, PhoneIcon, SearchIcon, Trash } from "lucide-react";
import styled from "styled-components";
import { deleteOutline, edit, updown } from "../../assets";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomeFoodItes from "../CustomeFoodItes";
import { linkStyle } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { get_Added_Deeping_Sauces } from "../../Redux/Get_All_MenuItems/action";
import { delete_Added_Deeping_Sauces } from "../../Redux/Delete_All_MenuItem/action";
import ReactPaginate from "react-paginate";

const Dipping = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, deeping_sauce } = useSelector(
    (store) => store.get_all_menuitem_reducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Added_Deeping_Sauces());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(delete_Added_Deeping_Sauces(id));
  };

  let status = "In stock";

  const handleOrderId = () => {};

  const handleOrderName = () => {};

  const handleOrderPrice = () => {};

  const handleOrderStatus = () => {};

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(deeping_sauce.length / itemsPerPage);
  const currentPageData = deeping_sauce.slice(offset, offset + itemsPerPage);

  return (
    <Layout>
      <Box>
        <CustomeFoodItes />

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
            <Link to="/add/dippingsauces" style={linkStyle}>
              Add New Dipping Sauces
            </Link>
          </Button>
        </Flex>
      </Box>

      {/* Food Items */}
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
                  <Text>Food Name</Text>
                  <img src={updown} onClick={handleOrderName} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Price</Text>
                  <img src={updown} onClick={handleOrderPrice} />
                </Flex>
              </th>
              <th>
                <Flex gap={1}>
                  <Text>Status</Text>
                  <img src={updown} onClick={handleOrderStatus} />
                </Flex>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(deeping_sauce) &&
              deeping_sauce.map((el, i) => (
                <tr key={i}>
                  <td>{el.pizzaId}</td>
                  <td>{el.name}</td>
                  <td>$ 5.00</td>
                  <td>
                    <Text
                      bgColor={
                        el.isDeleted === null
                          ? "brand.outofstock"
                          : "brand.stock"
                      }
                      w={"fit-content"}
                      p={"4px 8px"}
                      textAlign={"center"}
                      borderRadius={"full"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                      color={"brand.white"}
                    >
                      {el.isDeleted === null ? "Out of stock" : "In stock"}{" "}
                    </Text>
                  </td>
                  <td>
                    <Center>
                      <Flex gap={8}>
                        <Link to={``}>
                          <img src={edit} alt="edit icon" />
                        </Link>
                        <Link onClick={() => handleDelete(el.pizzaId)}>
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
          pageCount={Math.ceil(deeping_sauce.length / itemsPerPage)}
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

export default Dipping;

const DIV = styled.div`
  /* border: 1px solid red; */
  table {
    border-collapse: separate;
    border-spacing: 0 0.5em;
    width: 100%;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* width: 100rem; */
  }

  tbody > tr {
    border: 1px solid red;

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
  }

  .pagination__item {
    margin-right: 10px;
    font-size: 16px;
    border: 1px solid red;
    font-weight: bold;
  }

  .pagination__link {
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid red;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    text-decoration: none;
  }

  .pagination__link--active {
    background-color: red;
    padding: 0px 8px;
    border: 1px solid red;
    color: #fff;
    border-color: #007bff;
  }

  .pagination__link--disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
