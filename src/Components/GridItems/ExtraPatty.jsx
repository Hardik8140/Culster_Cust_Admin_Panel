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
const patty = [
  {
    title: "Cripy Chiken",
  },
  {
    title: "Tandoori Paneer",
  },
  {
    title: "Original Burger Patty",
  },
];
export const ExtraPatty = () => {
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
          <Text fontWeight={"500"}>EXTRA PATTY</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_patty"
            />
            <label className="switch" htmlFor="checkbox_patty">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Patty</Text>
            <Text color={"brand.grey"} textAlign={"end"}>
              Add Price
            </Text>
          </Flex>
          <Box pointerEvents={!checked && "none"} opacity={!checked && "0.6"}>
            {patty.map(({ title }, ind) => (
              <Flex
                key={ind}
                justifyContent={"space-between"}
                gap={2}
                width={"100%"}
                my={2}
              >
                <Flex minW={"50%"}>
                  <Box>
                    <label className={style.customCheckbox}>
                      <input
                        name={title}
                        type="checkbox"
                        className="checkbox_patty"
                        id={`${title}_checkbox_patty`}
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_patty`}
                    style={{ cursor: "pointer" }}
                  >
                    {title}
                  </label>
                </Flex>
                <Box justifySelf={"flex-end"}>
                  <InputGroup size={"sm"}>
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
                      id=""
                    />
                  </InputGroup>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
