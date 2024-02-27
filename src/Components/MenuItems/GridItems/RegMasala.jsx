import { Box, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";

const wings = [
  {
    title: "Regular",
    isPrice: false,
  },
  {
    title: "Masala",
    isPrice: false,
  },
];

export const RegMasala = () => {
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
          <Text fontWeight={"500"}>REG\MASALA</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_regMasala"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_regMasala">
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
            {wings.map(({ title }, ind) => (
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
                        id={`${title}_checkbox_regMasala`}
                        className="checkbox_regMasala"
                      />
                      <span className={style.checkmark}></span>
                    </label>
                  </Box>
                  <label
                    htmlFor={`${title}_checkbox_regMasala`}
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
