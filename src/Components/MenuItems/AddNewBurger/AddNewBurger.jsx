import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Flavor } from "../GridItems/Flavor";
import { Detail } from "../GridItems/Detail";
import { ExtraCheese } from "../GridItems/ExtraCheese";
import { ExtraPatty } from "../GridItems/ExtraPatty";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_Ingrediants } from "../../../Redux/MenuItems/action";
import { CLEANUP } from "../../../Redux/actionType";
import { BurgerId } from "../../../data";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Burger",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add New Burger",
    link: "#",
    isCurrent: true,
  },
];
export const AddNewBurger = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  useEffect(() => {
    if (items === undefined || Object.keys(items).length === 0) {
      dispatch(get_Ingrediants(BurgerId));
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
      dispatch({ type: CLEANUP });
    };
  }, [isLoading, error, toast]);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const cheese = form.querySelector("#checkbox_cheese");
    const finalCheese = [];
    const flavor = form.querySelector("#checkbox_flavor");
    const finalFlavor = [];
    const extrapatty = form.querySelector("#checkbox_patty");
    const finalExtraPatty = [];

    if (cheese.checked) {
      // get all values of cheese
      const cheeseCheckbox = form.querySelectorAll(".checkbox_cheese");
      const cheesePrice = form.querySelectorAll(".price_cheese");
      for (let i = 0; i < cheeseCheckbox.length; i++) {
        if (cheeseCheckbox[i].checked) {
          finalCheese.push({
            title: cheeseCheckbox[i].name,
            price: +cheesePrice[i].value,
          });
        }
      }
    }

    if (flavor.checked) {
      // get all values of flavor
      const flavorCheckbox = form.querySelectorAll(".checkbox_flavor");
      for (let i = 0; i < flavorCheckbox.length; i++) {
        if (flavorCheckbox[i].checked) {
          finalFlavor.push(flavorCheckbox[i].name);
        }
      }
    }

    if (extrapatty.checked) {
      // get all values of extrapatty
      const extrapattyCheckbox = form.querySelectorAll(".checkbox_patty");
      for (let i = 0; i < extrapattyCheckbox.length; i++) {
        if (extrapattyCheckbox[i].checked) {
          finalExtraPatty.push(extrapattyCheckbox[i].name);
        }
      }
    }
    const data = {
      name: name.value,
      price: +price.value,
      description: description.value,
      image: image ? image.src : "",
      extracheese: finalCheese,
      flavor: finalFlavor,
      extrapatty: finalExtraPatty,
    };

    console.log(data);
  };
  return (
    <Layout>
      <Box minH={"100vh"}>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            {Object.keys(items).length > 0 && (
              <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
                <Detail />
                <Image />
                <Flavor
                  title="BURGER FLAVOR"
                  values={items?.items["Burgur Flouver"]}
                />
                <ExtraPatty values={items?.items["Extra Patty"]} />
                <GridItem colSpan={2}>
                  <ExtraCheese />
                </GridItem>
              </Grid>
            )}

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
