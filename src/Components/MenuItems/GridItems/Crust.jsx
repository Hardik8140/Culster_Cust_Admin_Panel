import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";

const crust = {
  11: "Regular",
  12: "Thick",
  13: "Crispy Ultra Thin",
  14: "Thin",
};
export const Crust = ({ values = crust }) => {
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
          <Text fontWeight={"500"}>CRUST</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_crust"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_crust">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Text color={"brand.grey"}>Select Crust</Text>
        <Stack
          gap={4}
          my={2}
          pointerEvents={!checked && "none"}
          opacity={!checked && "0.6"}
        >
          {crust !== undefined &&
            Object.keys(crust).length > 0 &&
            Object.keys(crust).map((key, ind) => (
              <Flex key={ind} alignItems={"center"} gap={2}>
                <Box>
                  <label className={style.customCheckbox}>
                    <input
                      name={key}
                      type="checkbox"
                      className="checkbox_crust"
                      id={`${key}_checkbox_crust`}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                </Box>
                <label
                  htmlFor={`${key}_checkbox_crust`}
                  style={{ cursor: "pointer" }}
                >
                  {values[key]}
                </label>
              </Flex>
            ))}
        </Stack>
      </Stack>
    </GridItem>
  );
};
