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
import {
  delete_drizzles,
  get_drizzles,
  get_toppings,
} from "../../Redux/ExtraItems/action";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Extra Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Drizzle it up!",
    link: "#",
    isCurrent: true,
  },
];

const ShowDizzleitUp = () => {
  const dispatch = useDispatch();
  const { isLoading, error, drizzles } = useSelector(
    (store) => store.extraItemsReducer
  );
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toast = useToast();
  console.log(drizzles);

  useEffect(() => {
    if (!drizzles || drizzles.length === 0) {
      dispatch(get_drizzles());
    }
  }, [dispatch, drizzles]);

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

  const handleRemoveDrizzles = (id, e) => {
    e.preventDefault();
    dispatch(delete_drizzles(id));
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
              DRIZZLE iT UP!
            </Text>
            <Link to="/extra/drizzle">
              <Button
                bgColor="brand.add"
                color="white"
                w="107px"
                height="52px"
                fontWeight="600"
                fontSize="16px"
              >
                Edit
              </Button>
            </Link>
          </div>

          <div className="inner-box-2">
            {drizzles.map((el, i) => (
              <Box
                key={i}
                bgColor="brand.background"
                borderRadius={7}
                // p={2}
              >
                <Box
                  p={1}
                  display="flex"
                  gap={6}
                  alignItems="center"
                  fontWeight="400"
                  fontSize="16px"
                  color="#1F1F1F"
                >
                  {el.name}
                  <IconButton
                    bg="none"
                    _hover={{ bg: "none" }}
                    icon={<CloseIcon />}
                    onClick={(e) => handleRemoveDrizzles(el.extraItemId, e)}
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

export default ShowDizzleitUp;

let DIV = styled.div`
  /* border: 1px solid red; */
  margin-top: 30px; /* The switch - the box around the slider */

  .inner-box-1 {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 12px 20px 12px 20px;
  }
  .inner-box-2 {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: inline;
    display: flex;
    gap: 10px;
    padding: 16px 20px 16px 20px;
    background-color: white;
    /* border: 1px solid red; */
  }
`;
