import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";

const saladtoppings = {
  11: "Paneer",
  12: "Chiken",
};

export const SaladToppings = () => {
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
          <Text fontWeight={"500"}>SALAD TOPPGINS</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={handleChange}
              id="checkbox_saladtoppings"
            />
            <label className="switch" htmlFor="checkbox_saladtoppings">
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
            {Object.keys(saladtoppings).length > 0 &&
              Object.keys(saladtoppings).map((item, ind) => (
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
                          name={item}
                          type="checkbox"
                          className="checkbox_saladtoppings"
                          id={`${item}_checkbox_panner`}
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      style={{ cursor: "pointer" }}
                      htmlFor={`${item}_checkbox_panner`}
                    >
                      {saladtoppings[item]}
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
