import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { X } from "lucide-react";

export const View = ({ name, handleCancel, list }) => {
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
              height={"44px"}
              cursor={"pointer"}
              w={"fit-content"}
            >
              <Button
                type="button"
                w={"auto"}
                p={"5px 12px"}
                placeholder="price"
                className="price_extra"
                id={`price`}
                borderRadius={"10px 0 0 10px"}
                bgColor={"brand.orderbg"}
                variant={"unstyled"}
                height={"100%"}
                fontSize={"16px"}
                color={"#1F1F1F"}
                fontWeight={"400"}
              >
                {item.name}
              </Button>
              <InputRightAddon
                borderRadius={"0 10px 10px 0"}
                bgColor={"brand.orderbg"}
                border={"none"}
                p={"14px"}
                height={"100%"}
                onClick={() => handleCancel(ind)}
              >
                <X size={18} color="#919191" />
              </InputRightAddon>
            </InputGroup>
          ))}
      </Flex>
    </Stack>
  );
};
