import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import useCheckbox from "../../../Hooks/useCheckbox";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import { useEffect } from "react";
const Drizzled = {
  11: "Creamy Garlic",

  12: "BBQ",

  13: "Chilli Coriander",

  14: "Spicy Tandori",
};
export const Flavor = ({
  title = "FLAVOR (BASE SAUCE AND TOP SEASONINGS)",
  values = {},
  itemValue = [],
}) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_flavor");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_flavor_${id}`);
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
          <Text fontWeight={"500"}>{title}</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_flavor"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_flavor">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Text color={"brand.grey"}>Select Flavor</Text>
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
                          id={`checkbox_flavor_${key}`}
                          className="checkbox_flavor"
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_flavor_${key}`}
                      style={{ cursor: "pointer" }}
                    >
                      {values[key]}
                    </label>
                  </Flex>
                </Flex>
              ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
