import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteOutline, edit, updown } from "../assets";

export const CustomTable = ({ headings, values, currentPage }) => {
  return (
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
            {headings.map((item, ind) => (
              <th key={ind}>
                <Flex gap={1} alignItems={"center"}>
                  <Text>{item.title}</Text>
                  {item.isFunc && (
                    <Text cursor={"pointer"}>
                      <img src={updown} />
                    </Text>
                  )}
                </Flex>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((item, ind) => (
            <tr key={ind}>
              <td>{item.id}</td>
              <td>{item.offerName}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <Text
                  bgColor={
                    item.status === "In stock"
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
                  {item.status}
                </Text>
              </td>
              <td>
                <Flex gap={8}>
                  <Link to={`/${currentPage}/${item.id}`}>
                    <img src={edit} alt="edit icon" />
                  </Link>
                  <Link to={`/${item.id}`}>
                    <img src={deleteOutline} alt="delete icon" />
                  </Link>
                </Flex>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
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
    box-shadow: 0px 1px 4px 0px #00000033;
  }

  tbody > tr {
    border: 1px solid red;
    background-color: #f3f3f3;
  }
`;
