import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import useCheckbox from "../../../Hooks/useCheckbox";
import style from "../AddNewPizza/AddNewPIzza.module.css";

const Drizzled = {
  11: "Creamy Garlic",

  12: "BBQ",

  13: "Chilli Coriander",

  14: "Spicy Tandori",
};
export const Drizzle = ({ values = Drizzled }) => {
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
            {Object.keys(values).map((key, ind) => (
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
                        id={`${values[key]}_checkbox_drizzle`}
                        className="checkbox_drizzle"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${values[key]}_checkbox_drizzle`}
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
