import { GridItem, Select, Stack, Text } from "@chakra-ui/react";

export const SelectType = () => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text fontWeight={"400"}>Select Type</Text>
        <Select placeholder="Select Type" size="lg" id="type">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Stack>
    </GridItem>
  );
};
