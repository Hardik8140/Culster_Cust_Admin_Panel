import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import { Breadcrumber } from "../MenuItems/Breadcrumber/Breadcrumber";
import { FormButtons } from "../FormButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Add } from "./GridItems/Add";
import { Price } from "./GridItems/Price";
import { View } from "./GridItems/View";
// import { CLEANUP } from "../../../Redux/actionType";

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
export const Toppings = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const [list, setList] = useState([]);
  useEffect(() => {
    if (items === undefined || Object.keys(items).length === 0) {
      //   dispatch(get_Ingrediants());
    }
  }, []);

  useEffect(() => {
    if (!isLoading && error) {
      toast({
        title: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    return () => {
      //   dispatch({ type: CLEANUP });
    };
  }, [isLoading, error, toast]);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    // const price = form.querySelector("#price");

    const data = [...list, name.value];
    name.value = "";
    setList(data);
  };

  const handleAdd = () => {};
  const handleCancel = () => {};
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
              <GridItem>
                <Add name={"ADD TOPPINGS"} handleAdd={handleAdd} />
              </GridItem>
              <GridItem>
                <Price name={"ADD PRICE"} />
              </GridItem>
              <GridItem colSpan={2}>
                <View
                  name={"Toppings"}
                  list={list}
                  handleCancel={handleCancel}
                />
              </GridItem>
            </Grid>
            <FormButtons />
          </form>
        </DIV>
      </Box>
    </Layout>
  );
};
let DIV = styled.div`
  /* The switch - the box around the slider */
  .container,
  .green_container {
    width: 44px;
    height: 22px;
    position: relative;
  }

  /* Hide default HTML checkbox */
  .checkbox,
  .green_checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9eb;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  /* The slider */
  .slider {
    width: 18px;
    height: 18px;
    position: absolute;
    left: calc(50% - 15px / 2 - 10px);
    top: calc(50% - 19px / 2);
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .checkbox:checked + .switch {
    background-color: #d60024;
  }
  .green_checkbox:checked + .switch {
    background-color: #08671a;
  }
  .checkbox:checked + .switch .slider {
    left: calc(50% - 20px / 2 + 10px);
    top: calc(50% - 19px / 2);
  }
  .green_checkbox:checked + .switch .slider {
    left: calc(50% - 20px / 2 + 10px);
    top: calc(50% - 19px / 2);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #919191;
    border-radius: 10px;
  }
`;
