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
import { dollar } from "../../../assets";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";
import { useEffect } from "react";

const cheese = {
  11: "Trippel Cheese",
  12: "Double Cheese",
};
export const ExtraCheese = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_cheese");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_cheese_${id}`);
        checkbox.checked = true;
      }
    }
  }, [itemValue]);
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Stack>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={"500"}>EXTRA CHEESE</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_cheese"
            />
            <label className="switch" htmlFor="checkbox_cheese">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Size</Text>
            {/* <Text color={"brand.grey"} textAlign={"end"}>
              Add Price
            </Text> */}
          </Flex>
          <Box pointerEvents={!checked && "none"} opacity={!checked && "0.6"}>
            {Object.keys(values).length > 0 &&
              Object.keys(values).map((key, ind) => (
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
                          name={key}
                          type="checkbox"
                          className="checkbox_cheese"
                          id={`checkbox_cheese_${key}`}
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_cheese_${key}`}
                      style={{ cursor: "pointer" }}
                    >
                      {values[key]}
                    </label>
                  </Flex>
                  {/* <Box justifySelf={"flex-end"}>
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
                      className="price_extracheese"
                    />
                  </InputGroup>
                </Box> */}
                </Flex>
              ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
