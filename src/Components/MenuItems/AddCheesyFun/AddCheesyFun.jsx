import { Box, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";

import { Image } from "../GridItems/Image";

import { ExtraCheese } from "../GridItems/ExtraCheese";
import { Toppings } from "../GridItems/Toppings";
import { Drizzle } from "../GridItems/Drizzle";
import { MeatToppings } from "../GridItems/MeatToppings";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { Detail } from "../GridItems/Detail";
import { Seasonings } from "../GridItems/Seasonings";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Cheesy Fun",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add Cheesy Fun",
    link: "#",
    isCurrent: true,
  },
];
export const AddCheesyFun = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const description = form.querySelector("#description");
    const price = form.querySelector("#price");
    const image = form.querySelector("#image");

    const cheese = form.querySelector("#checkbox_cheese");
    const finalCheese = [];
    const toppings = form.querySelector("#checkbox_toppings");
    const finalToppings = [];
    const drizzle = form.querySelector("#checkbox_drizzle");
    const finalDrizzle = [];
    const meatToppings = form.querySelector("#checkbox_extrameat");
    const finalMeatToppings = [];
    const seasonings = form.querySelector("#checkbox_seasonings");
    const finalSeasonings = [];
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

    if (toppings.checked) {
      // get all values of toppings
      const toppingsCheckbox = form.querySelectorAll(".checkbox_toppings");
      for (let i = 0; i < toppingsCheckbox.length; i++) {
        if (toppingsCheckbox[i].checked) {
          finalToppings.push(toppingsCheckbox[i].name);
        }
      }
    }

    if (drizzle.checked) {
      // get all values of drizzle
      const drizzleCheckbox = form.querySelectorAll(".checkbox_drizzle");
      for (let i = 0; i < drizzleCheckbox.length; i++) {
        if (drizzleCheckbox[i].checked) {
          finalDrizzle.push(drizzleCheckbox[i].name);
        }
      }
    }

    if (meatToppings.checked) {
      // get all values of meatToppings
      const meatToppingsCheckbox = form.querySelectorAll(
        ".checkbox_meatToppings"
      );
      for (let i = 0; i < meatToppingsCheckbox.length; i++) {
        if (meatToppingsCheckbox[i].checked) {
          finalMeatToppings.push(meatToppingsCheckbox[i].name);
        }
      }
    }

    if (seasonings.checked) {
      // get all values of seasonings
      const seasoningsCheckbox = form.querySelectorAll(".checkbox_seasonings");
      for (let i = 0; i < seasoningsCheckbox.length; i++) {
        if (seasoningsCheckbox[i].checked) {
          finalSeasonings.push(seasoningsCheckbox[i].name);
        }
      }
    }
    const data = {
      price: price.value,
      name: name.value,
      description: description.value,
      image: image ? image.src : "",
      extracheese: finalCheese,
      toppings: finalToppings,
      drizzle: finalDrizzle,
      meatToppings: finalMeatToppings,
      seasonings: finalSeasonings,
    };

    console.log(data);
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
              <Detail />
              <Image />
              <Toppings />
              <Drizzle />
              <MeatToppings />
              <ExtraCheese />
              <GridItem colSpan={2}>
                <Seasonings />
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
