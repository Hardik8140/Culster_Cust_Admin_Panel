import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Box, Select, Stack, Text, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { get_reviews } from "../../Redux/Customer Review/action";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CustomerReview = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((store) => store.reviewReducer.reviews);
  console.log(reviews);
  const [filterOption, setFilterOption] = useState("latest");

  useEffect(() => {
    dispatch(get_reviews());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const filteredReviews = reviews.slice().sort((a, b) => {
    if (filterOption === "latest") {
      return new Date(b.createdDate) - new Date(a.createdDate);
    } else {
      return new Date(a.createdDate) - new Date(b.createdDate);
    }
  });

  // const [rating, setRating] = useState(reviews.rating);

  return (
    <Layout>
      <Box pl={10} pt={2} pr={10}>
        <Box display="flex" justifyContent="space-between" pb={10}>
          <Text fontSize="24px" fontWeight="700">
            Customer Review
          </Text>
          <Select
            w="10%"
            borderRadius="6px"
            value={filterOption}
            backgroundColor="white"
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="old">Old</option>
          </Select>
        </Box>

        <Stack>
          {filteredReviews.map((review, index) => (
            <Box
              key={index}
              display="flex"
              backgroundColor="white"
              p={4}
              borderRadius={4}
            >
              <Box flex="1">
                <Text pb={1} fontSize={"18px"} fontWeight={600}>
                  {review.customerName}
                </Text>
                <Text color="#919191" fontSize="15px" fontWeight={400}>
                  {formatDate(review.createdDate)}{" "}
                </Text>
                <Box pt={3}>
                  <Text fontSize="16px" fontWeight={400} lineHeight={"20px"}>
                    {review.message}
                  </Text>
                </Box>
              </Box>
              <Center>
                <Box w="15rem" textAlign="center">
                  <Text
                    fontSize="33px"
                    fontWeight="600"
                    lineHeight="30px"
                    pb="10px"
                  >
                    {review.rating}
                  </Text>
                  <Center>
                    <Box w="fit-content">
                      <Rating
                        style={{ maxWidth: 150 }}
                        readOnly
                        value={review.rating}
                        stop={5}
                        emptySymbol="☆"
                        fullSymbol="★"
                        fractions={1}
                      />
                    </Box>
                  </Center>
                </Box>
              </Center>
            </Box>
          ))}
          {/* <Box display="flex" backgroundColor="white" p={4} borderRadius={4}>
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
          </Box> */}
        </Stack>
      </Box>
    </Layout>
  );
};

export default CustomerReview;
