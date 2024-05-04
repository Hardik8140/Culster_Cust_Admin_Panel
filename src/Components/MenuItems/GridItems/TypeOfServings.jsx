import {
  Box,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { dollar } from "../../../assets";
import style from "../AddNewPizza/AddNewPIzza.module.css";
import useCheckbox from "../../../Hooks/useCheckbox";
import { useEffect } from "react";
const serving = [
  {
    title: "Sauce on wings",
    isPrice: false,
  },

  {
    title: "Sauce on side",
    isPrice: false,
  },
  {
    title: "wings on fires (tossed)",
    isPrice: true,
  },
];
export const TypeOfServings = ({ values = {}, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && Object.keys(values).length > 0) {
      const main_checkbox = document.querySelector("#checkbox_servings");
      main_checkbox.checked = true;
      handleChange();
      for (const id of itemValue) {
        const checkbox = document.querySelector(`#checkbox_servings_${id}`);
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
          <Text fontWeight={"500"}>TYPE OF SERVINGS(REQUIRED)</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_servings"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_servings">
              <span className="slider"></span>
            </label>
          </div>
        </Flex>
        <hr />
        <Box>
          <Flex my={2} justifyContent={"space-between"}>
            <Text color={"brand.grey"}>Select Servings</Text>
            {/* <Text color={"brand.grey"} textAlign={"end"}>
              Add Price
            </Text> */}
          </Flex>
          <Box pointerEvents={!checked && "none"} opacity={!checked && "0.6"}>
            {Object.keys(values).length > 0 &&
              Object.keys(values).map((item, ind) => (
                <Flex
                  key={ind}
                  justifyContent={"space-between"}
                  gap={2}
                  alignItems={"center"}
                  width={"100%"}
                  my={4}
                >
                  <Flex minW={"50%"}>
                    <Box>
                      <label className={style.customCheckbox}>
                        <input
                          name={item}
                          type="checkbox"
                          id={`checkbox_servings_${item}`}
                          className={`checkbox_type_of_servings`}
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_servings_${item}`}
                      style={{ cursor: "pointer" }}
                    >
                      {values[item]}
                    </label>
                  </Flex>
                  {/* {isPrice && (
                  <Box justifySelf={"flex-end"}>
                    <InputGroup servings={"sm"}>
                      <InputLeftAddon
                        borderRadius={"10px 0 0 10px"}
                        bgColor={"brand.black"}
                      >
                        <img src={dollar} />
                      </InputLeftAddon>
                      <Input
                        borderRadius={"0px 10px 10px 0px"}
                        type="number"
                        w={"auto"}
                        placeholder="price"
                        className="price_servings"
                        id={`${title}_price_servings`}
                      />
                    </InputGroup>
                  </Box>
                )} */}
                </Flex>
              ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
