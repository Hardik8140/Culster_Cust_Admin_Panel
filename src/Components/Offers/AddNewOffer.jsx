import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import { Breadcrumber } from "../MenuItems/Breadcrumber/Breadcrumber";
import { FormButtons } from "../FormButtons";
import styled from "styled-components";
import { Name } from "../MenuItems/GridItems/Name";
import { SelectType } from "../MenuItems/GridItems/SelectType";
import { Price } from "../ExtraItems/GridItems/Price";
import { Description } from "../MenuItems/GridItems/Description";
import { Image } from "../MenuItems/GridItems/Image";

const links = [
  {
    title: "Menu Items",
    isCurrent: false,
    link: "/",
  },
  {
    title: "Offer",
    isCurrent: false,
    link: "/",
  },
  {
    title: "Add New Offer",
    isCurrent: true,
    link: "/",
  },
];

const values = {
  "001": "temp",
  "003": "temp",
  "002": "temp",
};
export const AddNewOffer = () => {
  const handleForm = () => {};
  return (
    <Layout>
      <Breadcrumber links={links}></Breadcrumber>
      <Box my={6} minH={"70vh"}>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(6, 1fr)" gap={1}>
              <GridItem colSpan={2}>
                <SelectType name="Select Offer Type" values={values} />
              </GridItem>
              <GridItem colSpan={2}>
                <Name
                  name="Offer Name"
                  placed="Enter Offer Name"
                  ids="offerName"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Price name={"Price"} />
              </GridItem>
              <GridItem colSpan={3}>
                <Description />
              </GridItem>
              <GridItem colSpan={3}>
                <Image />
              </GridItem>
              <GridItem
                p={"8px 16px 8px 16px"}
                colSpan={6}
                bgColor={"brand.white"}
                boxShadow={"0px 1px 4px 0px #00000033"}
              >
                <Text>Add Food Product</Text>
              </GridItem>
              <GridItem
                p={"8px 16px 8px 16px"}
                colSpan={6}
                bgColor={"brand.white"}
                boxShadow={"0px 1px 4px 0px #00000033"}
              >
                <Text>Item 1</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <SelectType
                  name="Select Item Category"
                  placed="Select Item Category"
                  values={values}
                  ids="category"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <SelectType
                  name="Select Size"
                  placed="Select Category"
                  values={values}
                  ids="size"
                />
              </GridItem>
              <GridItem colSpan={2}>
                <SelectType
                  name="Select Extra Item"
                  placed="Select Food Item"
                  values={values}
                  ids="extraItem"
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
