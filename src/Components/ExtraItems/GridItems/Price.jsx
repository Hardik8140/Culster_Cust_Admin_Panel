import {
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { dollar } from "../../../assets";

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
