import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";

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
export const MeatToppings = () => {
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
            {extraMeat.map(({ title }, ind) => (
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
                        id={`${title}_checkbox_meattoppings`}
                        className="checkbox_meattoppings"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_meattoppings`}
                    style={{ cursor: "pointer" }}
                  >
                    {title}
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
