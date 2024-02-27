import { Box, Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { WingsSauces } from "../GridItems/WingsSauces";
import { TypeOfServings } from "../GridItems/TypeOfServings";
import { SizeOfWingBox } from "../GridItems/SizeOfWingBox";
import { FormButtons } from "../../FormButtons";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "House of Wings!!!",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add House Of  Wings!!!",
    link: "#",
    isCurrent: true,
  },
];
export const HouseOfWings = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const typeofservings = form.querySelector("#checkbox_servings");
    const finalTypeOfServings = [];
    const sizeofwingbox = form.querySelector("#checkbox_sizeofwingbox");
    const finalSizeOfWingBox = [];

    if (typeofservings.checked) {
      // get all values of typeofservings
      const typeofservingsCheckboxTrue = form.querySelectorAll(
        ".checkbox_servings_price_true"
      );
      const typeofservingsPrice = form.querySelectorAll(
        ".price_typeofservings"
      );
      for (let i = 0; i < typeofservingsCheckboxTrue.length; i++) {
        if (typeofservingsCheckboxTrue[i].checked) {
          finalTypeOfServings.push({
            title: typeofservingsCheckboxTrue[i].name,
            price: +typeofservingsPrice[i].value,
          });
        }
      }

      const typeofservingsCheckboxFalse = form.querySelectorAll(
        ".checkbox_servings_price_false"
      );
      for (let i = 0; i < typeofservingsCheckboxFalse.length; i++) {
        if (typeofservingsCheckboxFalse[i].checked) {
          finalTypeOfServings.push({
            title: typeofservingsCheckboxFalse[i].name,
          });
        }
      }
    }
    if (sizeofwingbox.checked) {
      // get all values of sizeofwingbox
      const sizeofwingboxCheckboxTrue = form.querySelectorAll(
        ".checkbox_sizeofwingbox_price_true"
      );
      const sizeofwingboxPrice = form.querySelectorAll(".price_sizeofwingbox");
      for (let i = 0; i < sizeofwingboxCheckboxTrue.length; i++) {
        if (sizeofwingboxCheckboxTrue[i].checked) {
          finalSizeOfWingBox.push({
            title: sizeofwingboxCheckboxTrue[i].name,
            price: +sizeofwingboxPrice[i].value,
          });
        }
      }

      const sizeofwingboxCheckboxFalse = form.querySelectorAll(
        ".checkbox_sizeofwingbox_price_false"
      );
      for (let i = 0; i < sizeofwingboxCheckboxFalse.length; i++) {
        if (sizeofwingboxCheckboxFalse[i].checked) {
          finalSizeOfWingBox.push({
            title: sizeofwingboxCheckboxFalse[i].name,
          });
        }
      }
    }
    const data = {
      name: name.value,
      price: +price.value,
      description: description.value,
      image: image ? image.src : "",
      typeofservings: finalTypeOfServings,
      sizeofwingbox: finalSizeOfWingBox,
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
              <TypeOfServings />
              <SizeOfWingBox />
              <GridItem colSpan={2}>
                <WingsSauces />
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
