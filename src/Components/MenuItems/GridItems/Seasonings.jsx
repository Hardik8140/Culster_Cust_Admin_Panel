import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import useCheckbox from "../../../Hooks/useCheckbox";
import style from "../AddNewPizza/AddNewPIzza.module.css";

const seasonings = [
  {
    title: "Oregano",
  },
  {
    title: "Chilli Flex",
  },
  {
    title: "Tandoori",
  },
  {
    title: "Garlic",
  },
];
export const Seasonings = () => {
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
          <Text fontWeight={"500"}>SEASONINGS</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_seasonings"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_seasonings">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Seasonings</Text>
            <Text color={"brand.grey"} textAlign={"end"} px={10}>
              Free
            </Text>
          </Flex>
          <Box
            overflowY={"scroll"}
            maxH={"165px"}
            pr={6}
            pointerEvents={!checked && "none"}
            opacity={!checked && "0.6"}
          >
            {seasonings.map(({ title }, ind) => (
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
                        id={`${title}_checkbox_seasonings`}
                        className="checkbox_seasonings"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_seasonings`}
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
                      id={`green_checkbox_seasonings_${ind}`}
                    />
                    <label
                      className="switch"
                      htmlFor={`green_checkbox_seasonings_${ind}`}
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
