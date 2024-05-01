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
export const Drizzle = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_drizzle");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_drizzle_${id}`);
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
          <Text fontWeight={"500"}>DRIZZLE IT UP!</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_drizzle"
            />
            <label className="switch" htmlFor="checkbox_drizzle">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Text color={"brand.grey"}>Select Drizzle It Up!</Text>
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
                          id={`checkbox_drizzle_${key}`}
                          className="checkbox_drizzle"
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_drizzle_${key}`}
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
