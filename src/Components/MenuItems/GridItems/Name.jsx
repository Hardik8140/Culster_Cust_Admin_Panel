/* eslint-disable react/prop-types */
import { GridItem, Input, Stack, Text } from "@chakra-ui/react";

export const Name = ({
  name = "Name",
  placed = "Enter Name",
  ids = "name",
}) => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      height={"100%"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text>{name}</Text>
        <Input type="text" fontSize={"16px"} placeholder={placed} id={ids} />
      </Stack>
    </GridItem>
  );
};
