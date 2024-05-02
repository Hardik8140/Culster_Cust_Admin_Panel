import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const FormButtons = ({ canceling = "/" }) => {
  const navigate = useNavigate();
  return (
    <Flex gap={"20px"}>
      <Button
        px={"28px"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        py={"18px"}
        variant={"simple"}
        bgColor={"brand.grey200"}
        onClick={() => navigate(canceling)}
      >
        Cancel
      </Button>
      <Button
        px={"28px"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        py={"18px"}
        color={"white"}
        variant={"simple"}
        bgColor={"brand.primary"}
        type="submit"
      >
        Save
      </Button>
    </Flex>
  );
};
