import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";
import { useEffect } from "react";

const extraMeat = [
  {
    title: "Pepperoni",
  },
  {
    title: "Bacon Crumble",
  },
  {
    title: "Bacon Strips",
  },
  {
    title: "Chicken",
  },
];
export const MeatToppings = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_extrameat");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_meattoppings_${id}`);
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
          <Text fontWeight={"500"}>EXTRA MEAT TOPPING</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_extrameat"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_extrameat">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Extra Meat Toppings</Text>
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
            {Object.keys(values).length > 0 &&
              Object.keys(values).map((key, ind) => (
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
                          id={`checkbox_meattoppings_${key}`}
                          className="checkbox_meattoppings"
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_meattoppings_${key}`}
                      style={{ cursor: "pointer" }}
                    >
                      {values[key]}
                    </label>
                  </Flex>
                  <Box justifySelf={"flex-end"}>
                    <div className="green_container">
                      <input
                        type="checkbox"
                        className="green_checkbox"
                        id={`green_checkbox_extra_${ind}`}
                      />
                      <label
                        className="switch"
                        htmlFor={`green_checkbox_extra_${ind}`}
                      >
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
