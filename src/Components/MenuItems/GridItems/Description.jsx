import { GridItem, Stack, Text, Textarea } from "@chakra-ui/react";

export const Description = () => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text>Description</Text>
        <Textarea
          rows={5}
          type="text"
          placeholder="Enter the description"
          id="description"
        />
      </Stack>
    </GridItem>
  );
};
