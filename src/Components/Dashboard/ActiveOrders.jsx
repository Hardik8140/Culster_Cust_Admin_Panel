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
import { Link } from "react-router-dom";

export const ActiveOrders = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Stack my={12} p={4} gap={4} bgColor={"#FFFFFF"}>
      <Text fontSize={"24px"} fontWeight={"bold"}>
        Active Orders
      </Text>
      <Box>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon size={20} color={"#949494"} />
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
            <tr>
              <td>#00001</td>
              <td>John Doe</td>
              <td>Pizza & 1 more</td>
              <td>Delivery</td>
              <td>Debit Card</td>
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  Pending
                </Text>
              </td>
              <td>12/01/2024</td>
              <td>
                <Link to="/orders">
                  <Button
                    py={6}
                    px={12}
                    borderRadius={16}
                    bgColor={"brand.buttonbg"}
                  >
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>#00001</td>
              <td>John Doe</td>
              <td>Pizza & 1 more</td>
              <td>Delivery</td>
              <td>Debit Card</td>
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  Pending
                </Text>
              </td>
              <td>12/01/2024</td>
              <td>
                <Button
                  py={6}
                  px={12}
                  borderRadius={16}
                  bgColor={"brand.buttonbg"}
                >
                  View Details
                </Button>
              </td>
            </tr>

            <tr>
              <td>#00001</td>
              <td>John Doe</td>
              <td>Pizza & 1 more</td>
              <td>Delivery</td>
              <td>Debit Card</td>
              <td>
                <Text
                  bgColor={"brown"}
                  color={"white"}
                  borderRadius={"2rem"}
                  p={".5rem 1.5rem"}
                >
                  Pending
                </Text>
              </td>
              <td>12/01/2024</td>
              <td>
                <Link to="/orders">
                  <Button
                    py={6}
                    px={12}
                    borderRadius={16}
                    bgColor={"brand.buttonbg"}
                  >
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </DIV>
    </Stack>
  );
};

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
