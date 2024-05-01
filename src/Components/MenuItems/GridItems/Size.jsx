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
import { useEffect, useState } from "react";
const sized = [
  {
    title: "Medium (12 inches)",
    named: "Medium",
    pizzaSizeId: 98,
  },

  {
    title: "Large (14 inches)",
    named: "Large",
    pizzaSizeId: 99,
  },
  {
    title: "Extra Large (16 inches)",
    named: "Extra Large",
    pizzaSizeId: 100,
  },
  {
    title: "Party Size (15 x 21 inches)",
    named: "Party Size",
    pizzaSizeId: 101,
  },
];
export const Size = ({ size = sized, itemValue = [] }) => {
  const [checked, handleChange] = useCheckbox(false);
  useEffect(() => {
    if (itemValue.length > 0 && size.length > 0) {
      const main_checkbox = document.querySelector("#checkbox_size");
      main_checkbox.checked = true;
      handleChange();
      for (const obj of itemValue) {
        const checkbox = document.querySelector(
          `#checkbox_size_${obj.pizzaSizeId}`
        );
        checkbox.checked = true;
        const pricebox = document.querySelector(
          `#price_size_${obj.pizzaSizeId}`
        );
        pricebox.value = obj.price;
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
          <Text fontWeight={"500"}>SIZE</Text>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox_size"
              onChange={handleChange}
            />
            <label className="switch" htmlFor="checkbox_size">
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
            {size.length > 0 &&
              size.map(({ title, named, pizzaSizeId }, ind) => (
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
                          name={named}
                          type="checkbox"
                          id={`checkbox_size_${pizzaSizeId}`}
                          className="checkbox_size"
                        />
                        <span className={style.checkmark}></span>
                      </label>
                    </Box>
                    <label
                      htmlFor={`checkbox_size_${pizzaSizeId}`}
                      style={{ cursor: "pointer" }}
                    >
                      {title}
                    </label>
                  </Flex>
                  <Box justifySelf={"flex-end"}>
                    <InputGroup size={"sm"}>
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
                        className="price_size"
                        id={`price_size_${pizzaSizeId}`}
                      />
                    </InputGroup>
                  </Box>
                </Flex>
              ))}
          </Box>
        </Box>
      </Stack>
    </GridItem>
  );
};
