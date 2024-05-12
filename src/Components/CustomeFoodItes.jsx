import { Text } from "@chakra-ui/react";
import React from "react";

const CustomeFoodItes = ({ title = "Food Items" }) => {
  return (
    <Text fontSize={"24px"} fontWeight={"700"}>
      {title}
    </Text>
  );
};

export default CustomeFoodItes;
