import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { X } from "lucide-react";

export const View = ({ name, handleCancel, list }) => {
  console.log(list);
  return (
    <Stack
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Box>
        <Text color={"#919191"}>{name}</Text>
      </Box>
      <Flex gap={4} flexWrap={"wrap"}>
        {list.length > 0 &&
          list.map((item, ind) => (
            <InputGroup
              key={ind}
              size={"sm"}
              cursor={"pointer"}
              onClick={handleCancel}
              w={"fit-content"}
            >
              <Button
                type="button"
                w={"auto"}
                placeholder="price"
                className="price_extra"
                id={`price`}
                px={8}
                py={6}
                borderRadius={"10px 0 0 10px"}
                variant={"simple"}
                bgColor={"brand.orderbg"}
              >
                {item}
              </Button>
              <InputRightAddon
                py={6}
                borderRadius={"0 10px 10px 0"}
                bgColor={"brand.orderbg"}
                border={"none"}
              >
                <X size={18} />
              </InputRightAddon>
            </InputGroup>
          ))}
      </Flex>
    </Stack>
  );
};
