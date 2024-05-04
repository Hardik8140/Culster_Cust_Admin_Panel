import {
  Box,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { dollar } from "../../../assets";
import { useEffect, useState } from "react";

export const Detail = ({ itemValue = { name: "", description: "" } }) => {
  const [state, setState] = useState({ ...itemValue });
  const handleChange = (event) => {
    setState({
      [event.target.id]: event.target.value,
      ...state,
    });
  };
  useEffect(() => {
    setState(itemValue);
  }, [itemValue]);

  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack gap={4}>
        <Flex justifyContent={"space-between"}>
          <Stack>
            <Text size={"18px"} fontWeight={"500"}>
              NAME
            </Text>
            <Input
              type="text"
              placeholder="Enter food name"
              id="name"
              value={state.name}
              onChange={handleChange}
            />
          </Stack>
          <Stack>
            <Text size={"18px"} fontWeight={"500"}>
              PRICE
            </Text>
            <Box justifySelf={"flex-end"}>
              <InputGroup size={"sm"}>
                <InputLeftAddon
                  borderRadius={"10px 0 0 10px"}
                  bgColor={"brand.grey"}
                >
                  <img src={dollar} />
                </InputLeftAddon>
                <Input
                  borderRadius={"0px 10px 10px 0px"}
                  type="number"
                  w={"auto"}
                  placeholder="price"
                  className="price_detail"
                  id={`price`}
                />
              </InputGroup>
            </Box>
          </Stack>
        </Flex>
        <Box>
          <Text size={"18px"} fontWeight={"500"}>
            DESCRIPTION
          </Text>
          <Textarea
            rows={5}
            type="text"
            placeholder="Enter the description"
            id="description"
            value={state.description}
            onChange={handleChange}
          />
        </Box>
      </Stack>
    </GridItem>
  );
};
