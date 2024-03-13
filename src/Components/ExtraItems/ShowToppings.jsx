import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import { FormButtons } from "../FormButtons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  Text,
  list,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumber } from "../MenuItems/Breadcrumber/Breadcrumber";
import { Add } from "./GridItems/Add";
import { Price } from "./GridItems/Price";
import { View } from "lucide-react";
import { get_toppings } from "../../Redux/ExtraItems/action";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Extra Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Toppings",
    link: "#",
    isCurrent: true,
  },
];

const ShowToppings = () => {
  const dispatch = useDispatch();
  const { isLoading, error, toppings } = useSelector(
    (store) => store.extraItemsReducer
  );
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toast = useToast();
  //   console.log(toppings);

  useEffect(() => {
    if (!toppings || toppings.length === 0) {
      dispatch(get_toppings());
    }
  }, [dispatch, toppings]);

  useEffect(() => {
    if (error) {
      toast({
        title: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [error, toast]);

  const handleRemoveTopping = (toppingToRemove) => {
    setSelectedToppings(
      selectedToppings.filter((topping) => topping !== toppingToRemove)
    );
    // Dispatch remove_topping action with the ID or any unique identifier of the topping
    // dispatch(remove_topping(toppingToRemove.id)); // Adjust the argument according to your topping data structure
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <div className="inner-box-1">
            <Text fontSize="18px" fontWeight="500">
              ADD TOPPINGS
            </Text>
            <Link to="/extra/toppings">
              <Button
                bgColor="brand.add"
                color="white"
                w="107px"
                height="52px"
                fontWeight="600"
                fontSize="16px"
                boxShadow={"0px 1px 4px 0px #03559233 "}
                variant={"unstyled"}
              >
                Edit
              </Button>
            </Link>
          </div>

          <div className="inner-box-2">
            {toppings.map((el, i) => (
              <Box
                key={i}
                bgColor="brand.background"
                borderRadius={"8px"}
                // p={2}
                p={"4px"}
              >
                <Box
                  display="flex"
                  gap={4}
                  p={"4px"}
                  alignItems="center"
                  height={"100%"}
                >
                  <Text fontWeight="400" fontSize="16px" color="#1F1F1F">
                    {el.name}
                  </Text>
                  <IconButton
                    bg="none"
                    _hover={{ bg: "none" }}
                    icon={<CloseIcon />}
                    color={"#919191"}
                    onClick={() => handleRemoveTopping(el.extraItemId)}
                  />
                  {/* <CloseIcon onClick={() => handleRemoveTopping(el)} /> */}
                </Box>
              </Box>
            ))}
          </div>
        </DIV>
      </Box>
    </Layout>
  );
};

export default ShowToppings;

let DIV = styled.div`
  /* border: 1px solid red; */
  margin-top: 30px; /* The switch - the box around the slider */

  .inner-box-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 12px 20px 12px 20px;
    box-shadow: 0px 1px 4px 0px #00000033;
  }
  .inner-box-2 {
    box-shadow: 0px 1px 4px 0px #00000033;
    display: inline;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 16px 20px 16px 20px;
    background-color: white;
    /* border: 1px solid red; */
  }
`;
