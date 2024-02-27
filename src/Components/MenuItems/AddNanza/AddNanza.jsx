import { Box, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { PaneerChicken } from "../GridItems/PaneerChicken";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Nanza",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add Nanza",
    link: "#",
    isCurrent: true,
  },
];
export const AddNanza = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const toppings = form.querySelector("#checkbox_toppings");
    const finalToppings = [];
    const pastamodifier = form.querySelector("#checkbox_pastamodifier");
    const finalPastaModifier = [];
    if (pastamodifier.checked) {
      // get all values of pastamodifier
      const pastamodifierCheckboxTrue = form.querySelectorAll(
        ".checkbox_pastamodifier_price_true"
      );
      const pastamodifierPrice = form.querySelectorAll(".price_pastamodifier");
      for (let i = 0; i < pastamodifierCheckboxTrue.length; i++) {
        if (pastamodifierCheckboxTrue[i].checked) {
          finalPastaModifier.push({
            title: pastamodifierCheckboxTrue[i].name,
            price: +pastamodifierPrice[i].value,
          });
        }
      }

      const pastamodifierCheckboxFalse = form.querySelectorAll(
        ".checkbox_pastamodifier_price_false"
      );
      for (let i = 0; i < pastamodifierCheckboxFalse.length; i++) {
        if (pastamodifierCheckboxFalse[i].checked) {
          finalPastaModifier.push({
            title: pastamodifierCheckboxFalse[i].name,
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

    const data = {
      name: name.value,
      price: +price.value,
      description: description.value,
      image: image ? image.src : "",
      toppings: finalToppings,
      pastamodifier: finalPastaModifier,
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
              <GridItem colSpan={2}>
                <PaneerChicken />
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
