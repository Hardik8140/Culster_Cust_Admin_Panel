import React from "react";
import Layout from "../Layout/Layout";
import { Box, Heading, Select, Stack, Text } from "@chakra-ui/react";

const CustomerReview = () => {
  return (
    <Layout>
      <Box w="68rem" pl={10} pt={2} pr={10}>
        <Box display="flex" justifyContent="space-between" pb={10}>
          <Text>Customer Review</Text>
          <Select w="10%">
            <option value="">Latest</option>
          </Select>
        </Box>

        <Stack>
          <Box display="flex" backgroundColor="white" p={4} borderRadius={4}>
            <Box>
              <Text>Hardik Gajera</Text>
              <Text color="lightgray">24 Jan 2024</Text>
              <Text fontSize="16px">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                commodi iure eveniet molestiae dicta! Autem dolore architecto
                porro ad quisquam nostrum possimus sint delectus incidunt,
                cupiditate dolorum recusandae quibusdam aperiam.
              </Text>
            </Box>
            <Box w="15rem" textAlign="center">
              <Text fontSize="2rem">4.2</Text>
              <Text></Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default CustomerReview;
