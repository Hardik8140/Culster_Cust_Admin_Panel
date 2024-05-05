/* eslint-disable react/prop-types */
import { GridItem, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const options = {
  11: "option",
  22: "option",
  33: "option",
};
export const SelectType = ({
  values = {},
  name = "Select Type",
  placed = "Select Type",
  ids = "type",
  itemValue,
}) => {
  const [item, setItem] = useState(itemValue || "");
  useEffect(() => {
    if (itemValue) {
      setItem(itemValue);
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
        <Text fontWeight={"400"}>{name}</Text>
        <Select
          placeholder={placed}
          fontSize={"16px"}
          size="lg"
          id={ids}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        >
          {Object.keys(values).length > 0 &&
            Object.keys(values).map((item) => (
              <option key={item} value={item}>
                {values[item]}
              </option>
            ))}
        </Select>
      </Stack>
    </GridItem>
  );
};
