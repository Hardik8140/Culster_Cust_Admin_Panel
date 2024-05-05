import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";
import { useEffect } from "react";

const wings = [
  {
    title: "Butter Chicken",
    isPrice: false,
  },
  {
    title: "Tandoori (Dry Rub)",
    isPrice: false,
  },
  {
    title: "Chili Coriander",
    isPrice: false,
  },
  {
    title: "Achari (Dry Rub)",
    isPrice: true,
  },
];

export const WingsSauces = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_wingsSauces");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_wingsSauces_${id}`);
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
          <Text fontWeight={"500"}>WINGS SAUCES (REQUIRED)</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_wingsSauces"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_wingsSauces">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Text color={"brand.grey"}>Select Sauces</Text>
          <Box
            overflowY={"scroll"}
            maxH={"165px"}
            pr={6}
            pointerEvents={!checked && "none"}
            opacity={!checked && "0.6"}
          >
            {Object.keys(values).length > 0 &&
              Object.keys(values).map((item, ind) => (
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
                          name={item}
                          type="checkbox"
                          id={`checkbox_wingsSauces_${item}`}
                          className="checkbox_wingsSauces"
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_wingsSauces_${item}`}
                      style={{ cursor: "pointer" }}
                    >
                      {values[item]}
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
