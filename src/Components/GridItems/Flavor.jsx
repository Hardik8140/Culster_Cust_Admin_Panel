import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import useCheckbox from "../../Hooks/useCheckbox";
import style from "../AddNewPizza/AddNewPIzza.module.css";
const Drizzled = [
  {
    title: "Creamy Garlic",
  },
  {
    title: "BBQ",
  },
  {
    title: "Chilli Coriander",
  },
  {
    title: "Spicy Tandori",
  },
];
export const Flavor = () => {
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
          <Text fontWeight={"500"}>FLAVOR (BASE SAUCE AND TOP SEASONINGS)</Text>
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
            {Drizzled.map(({ title }, ind) => (
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
                        name={title}
                        type="checkbox"
                        id={`${title}_checkbox_flavor`}
                        className="checkbox_flavor"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_flavor`}
                    style={{ cursor: "pointer" }}
                  >
                    {title}
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
