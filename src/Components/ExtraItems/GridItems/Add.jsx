import { Button, Flex, GridItem, Input, Stack, Text } from "@chakra-ui/react";

export const Add = ({ name, handleAdd }) => {
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Text fontWeight={"500"}>{name}</Text>
        <Flex>
          <Input type="text" placeholder="Enter name here" id="name" />
          <Button
            px={"28px"}
            boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
            py={"18px"}
            color={"white"}
            variant={"simple"}
            bgColor={"brand.primary"}
            type="submit"
          >
            Add
          </Button>
        </Flex>
      </Stack>
    </GridItem>
  );
};
