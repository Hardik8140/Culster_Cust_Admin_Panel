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

const paneer = {
  11: "Panner",
  12: "Chicken",
};
export const PaneerChicken = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_paneer");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_panner_${id}`);
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
          <Text fontWeight={"500"}>PANEER/CHICKEN</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_paneer"
            />
            <label className="switch" htmlFor="checkbox_paneer">
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
                  my={4}
                >
                  <Flex minW={"50%"}>
                    <Box>
                      <label className={style.customCheckbox}>
                        <input
                          name={key}
                          type="checkbox"
                          className="checkbox_paneer"
                          id={`checkbox_panner_${key}`}
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      style={{ cursor: "pointer" }}
                      htmlFor={`checkbox_panner_${key}`}
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
                      className="price_paneer"
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
