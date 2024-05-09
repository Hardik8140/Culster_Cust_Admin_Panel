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
  Switch,
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
import { get_Added_Sweet_Treet } from "../../Redux/Get_All_MenuItems/action";
import { delete_Added_Sweet_Treet } from "../../Redux/Delete_All_MenuItem/action";
import ReactPaginate from "react-paginate";

const Sweet = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Ascending order by default
  const [sortBy, setSortBy] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(0);

  const { loading, error, sweet_treet } = useSelector(
    (store) => store.get_all_menuitem_reducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Added_Sweet_Treet());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(delete_Added_Sweet_Treet(id));
  };

  const status = "In stock";

  const handleOrderId = () => {};

  const handleOrderName = () => {};

  const handleOrderPrice = () => {};

  const handleOrderStatus = () => {};

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(sweet_treet.length / itemsPerPage);
  const currentPageData = sweet_treet.slice(offset, offset + itemsPerPage);

  const handleSort = (sortByField) => {
    // Toggle the sort order if the same field is clicked again
    if (sortBy === sortByField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(sortByField);
      setSortOrder("asc"); // Default to ascending order when a new field is selected
    }
  };

  const sortedData = currentPageData.sort((a, b) => {
    if (sortBy) {
      if (sortBy === "id") {
        return sortOrder === "asc"
          ? a.pizzaId - b.pizzaId
          : b.pizzaId - a.pizzaId;
      } else if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortBy === "price") {
        const priceA = a.sizes.find((siz) => siz.size === "Medium")?.price || 0;
        const priceB = b.sizes.find((siz) => siz.size === "Medium")?.price || 0;
        return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
      } else if (sortBy === "status") {
        return sortOrder === "asc"
          ? a.isDeleted
            ? -1
            : 1
          : a.isDeleted
          ? 1
          : -1;
      }
    }
    return 0; // No sorting applied
  });

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
            <Link to="/add/sweettreat" style={linkStyle}>
              Add New Sweet Treat
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
                <Flex gap={1} onClick={() => handleSort("price")}>
                  <Text>Price</Text>
                  <img
                    src={updown}
                    style={{
                      transform:
                        sortOrder === "asc" ? "rotate(180deg)" : "none",
                    }}
                  />
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
            {Array.isArray(sortedData) &&
              sortedData.map((el, i) => (
                <tr key={i}>
                  <td>{el.pizzaId}</td>
                  <td>{el.name}</td>
                  <td>
                    ${" "}
                    {el.sizes.find((siz) => siz.size === "Medium")
                      ? el.sizes.find((siz) => siz.size === "Medium").price
                      : "N/A"}
                  </td>
                  <td>
                    <Switch
                      size="md"
                      isChecked={!el.isDeleted}
                      onChange={(e) =>
                        handleDelete(el.pizzaId, !e.target.checked)
                      }
                      colorScheme={el.isDeleted ? "red" : "green"}
                    />
                    {/* <Text
                      bgColor={
                        el.isDeleted ? "brand.outofstock" : "brand.stock"
                      }
                      w={"fit-content"}
                      p={"4px 8px"}
                      textAlign={"center"}
                      borderRadius={"full"}
                      fontWeight={"700"}
                      fontSize={"14px"}
                      color={"brand.white"}
                    >
                      {el.isDeleted ? "Out of stock" : "In stock"}{" "}
                    </Text> */}
                  </td>
                  <td>
                    <Center>
                      <Flex gap={8}>
                        <Link to={`/edit/sweettreat/${el.pizzaId}`}>
                          <img src={edit} alt="edit icon" />
                        </Link>
                        {/* <Link onClick={() => handleDelete(el.pizzaId)}>
                          <img src={deleteOutline} alt="delete icon" />
                        </Link> */}
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
          pageCount={Math.ceil(sweet_treet.length / itemsPerPage)}
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

export default Sweet;

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
