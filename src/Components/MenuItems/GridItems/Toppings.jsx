/* eslint-disable react/prop-types */
import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";
const toppings = {
  11: "Baby Conrs",

  12: "Fresh Mushroom",

  13: "Pineapples",

  14: "Red Paprika",

  15: "Pineapples",

  16: "Red Paprika",
};
export const Toppings = ({ values = {} }) => {
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
          <Text fontWeight={"500"}>TOPPINGS (2 FREE TOPPINGS)</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_toppings"
            />
            <label className="switch" htmlFor="checkbox_toppings">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Toppings</Text>
            <Text color={"brand.grey"} textAlign={"end"}>
              Default Toppings
            </Text>
          </Flex>
          <Box
            overflowY={"scroll"}
            maxH={"165px"}
            pr={6}
            pointerEvents={!checked && "none"}
            opacity={!checked && "0.6"}
          >
            {Object.keys(values).length > 0 && Object.keys(values).map((key, ind) => (
              <Flex
                key={ind}
                justifyContent={"space-between"}
                width={"100%"}
                my={4}
              >
                <Flex minW={"50%"}>
                  <Box>
                    <label className={style.customCheckbox}>
                      <input
                        name={key}
                        type="checkbox"
                        className={`checkbox_toppings`}
                        id={`${values[key]}_checkbox_toppings`}
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${values[key]}_checkbox_toppings`}
                    style={{ cursor: "pointer" }}
                  >
                    {values[key]}
                  </label>
                </Flex>
                <Box justifySelf={"flex-end"}>
                  <div className="green_container">
                    <input
                      type="checkbox"
                      name={key}
                      className="green_checkbox"
                      id={`green_checkbox_${ind}`}
                    />
                    <label className="switch" htmlFor={`green_checkbox_${ind}`}>
                      <span className="slider"></span>
                    </label>
                  </div>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
