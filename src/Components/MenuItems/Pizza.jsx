import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const Pizza = () => {
  return (
    <Box pl="17em" mt={3} backgroundColor="brand.background">
      <Heading as="h4" size="sm">
        Food Items
      </Heading>

      <Box>
        <Input type="text" />
        <Button>
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Pizza;
