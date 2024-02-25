import { GridItem, Input, Stack, Text } from "@chakra-ui/react";

export const Name = () => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text>Name</Text>
        <Input type="text" placeholder="Enter Name" id="name" />
      </Stack>
    </GridItem>
  );
};
