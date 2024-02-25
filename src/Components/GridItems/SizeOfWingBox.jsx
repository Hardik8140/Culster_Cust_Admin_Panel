import {
  Box,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { dollar } from "../../assets";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../Hooks/useCheckbox";
const size = [
  {
    title: "Small Box",
    isPrice: false,
  },

  {
    title: "Big Box",
    isPrice: true,
  },
  {
    title: "Jumbo Box",
    isPrice: true,
  },
];
export const SizeOfWingBox = () => {
  const [checked, handleChange] = useCheckbox(false);
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={"500"}>SIZE OF WING BOX(REQUIRED)</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_servings"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_servings">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Size</Text>
            <Text color={"brand.grey"} textAlign={"end"}>
              Add Price
            </Text>
          </Flex>
          <Box pointerEvents={!checked && "none"} opacity={!checked && "0.6"}>
            {size.map(({ title, isPrice }, ind) => (
              <Flex
                key={ind}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
                width={"100%"}
                my={4}
              >
                <Flex minW={"50%"}>
                  <Box>
                    <label className={style.customCheckbox}>
                      <input
                        name={title}
                        type="checkbox"
                        id={`${title}_checkbox_servings`}
                        className="checkbox_servings"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_servings`}
                    style={{ cursor: "pointer" }}
                  >
                    {title}
                  </label>
                </Flex>
                {isPrice && (
                  <Box justifySelf={"flex-end"}>
                    <InputGroup servings={"sm"}>
                      <InputLeftAddon
                        borderRadius={"10px 0 0 10px"}
                        bgColor={"brand.black"}
                      >
                        <img src={dollar} />
                      </InputLeftAddon>
                      <Input
                        borderRadius={"0px 10px 10px 0px"}
                        type="number"
                        w={"auto"}
                        placeholder="price"
                        className="price_servings"
                        id={`${title}_price_servings`}
                      />
                    </InputGroup>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
