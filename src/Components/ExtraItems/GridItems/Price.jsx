import {
  Flex,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { dollarGray } from "../../../assets";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const Price = ({ name = "Price" }) => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      pb={"24px"}
      height={"100%"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text fontWeight={"500"}>{name}</Text>
        <Flex>
          <InputGroup height={"40px"}>
            <InputLeftAddon
              borderRadius={"10px 0 0 10px"}
              bgColor={"#EFEFEF"}
              border={"0.5px solid "}
              borderColor={"#DBD8D8"}
            >
              <IMAGE src={dollarGray} />
            </InputLeftAddon>
            <Input
              borderRadius={"0px 10px 10px 0px"}
              type="number"
              w={"auto"}
              fontSize={"16px"}
              placeholder="price"
              className="price_extra"
              id={`price`}
            />
          </InputGroup>
        </Flex>
      </Stack>
    </GridItem>
  );
};

const IMAGE = styled.img`
  fill: #9e9e9e !important;
  .dollar {
    fill: #9e9e9e !important;
  }
`;
