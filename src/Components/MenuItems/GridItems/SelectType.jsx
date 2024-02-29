import { GridItem, Select, Stack, Text } from "@chakra-ui/react";

export const SelectType = ({ values }) => {
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
          {Object.keys(values).map((item) => (
            <option key={item}>{values[item]}</option>
          ))}
        </Select>
      </Stack>
    </GridItem>
  );
};
