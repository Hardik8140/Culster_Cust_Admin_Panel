import { Box, Grid, Skeleton, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { SelectType } from "../GridItems/SelectType";
import { Name } from "../GridItems/Name";
import { Description } from "../GridItems/Description";
import { Image } from "../GridItems/Image";
import { Size } from "../GridItems/Size";
import { Crust } from "../GridItems/Crust";
import { PaneerChicken } from "../GridItems/PaneerChicken";
import { ExtraCheese } from "../GridItems/ExtraCheese";
import { Toppings } from "../GridItems/Toppings";
import { Drizzle } from "../GridItems/Drizzle";
import { MeatToppings } from "../GridItems/MeatToppings";
import { Flavor } from "../GridItems/Flavor";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNewPizza, get_Ingrediants } from "../../../Redux/MenuItems/action";
import { newPizzaId } from "../../../data";
import { CLEANUP } from "../../../Redux/actionType";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Pizza",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add New Pizza",
    link: "#",
    isCurrent: true,
  },
];
export const AddNewPizza = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  useEffect(() => {
    if (items === undefined || Object.keys(items).length === 0) {
      console.log("called");
      dispatch(get_Ingrediants(newPizzaId));
    }
  }, []);

  console.log(items);
  const handleError = (error) => {
    toast({
      title: error,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };
  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Loading...",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    if (!isLoading && error) {
      handleError(error);
    }
    return () => {
      dispatch({ type: CLEANUP });
    };
  }, [isLoading, error, toast]);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.querySelector("#type");
    const name = form.querySelector("#name");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const size = form.querySelector("#checkbox_size");
    let finalSize = [];
    const crust = form.querySelector("#checkbox_crust");
    const finalCrust = [];
    const paneer = form.querySelector("#checkbox_paneer");
    const finalPaneer = [];
    const cheese = form.querySelector("#checkbox_cheese");
    const finalCheese = [];
    const toppings = form.querySelector("#checkbox_toppings");
    const finalToppings = [];
    const drizzle = form.querySelector("#checkbox_drizzle");
    const finalDrizzle = [];
    const meatToppings = form.querySelector("#checkbox_extrameat");
    const finalMeatToppings = [];
    const flavor = form.querySelector("#checkbox_flavor");
    const finalFlavor = [];

    if (!type.value) {
      handleError("Please select type");
      return;
    }
    if (!name.value) {
      handleError("Please enter name");
      return;
    }
    if (!description.value) {
      handleError("Please enter description");
      return;
    }
    let data = {
      type: +type.value,
      pizzaName: name.value,
      description: description.value,
      categoryId: 180002,
      items: [],
    };
    if (size.checked) {
      // get all values of size
      const sizeCheckbox = form.querySelectorAll(".checkbox_size");
      const sizePrice = form.querySelectorAll(".price_size");
      finalSize = {};
      for (let i = 0; i < sizeCheckbox.length; i++) {
        if (sizeCheckbox[i].checked) {
          if (!sizePrice[i].value) {
            handleError(`Please enter price for ${sizeCheckbox[i].name} size`);
            return;
          }
          finalSize = {
            ...finalSize,
            [sizeCheckbox[i].name]: +sizePrice[i].value,
          };
        }
      }
      data = {
        ...data,
        pizzaSize: finalSize,
      };
    }

    if (crust.checked) {
      // get all values of crust
      const curstCheckbox = form.querySelectorAll(".checkbox_crust");
      for (let i = 0; i < curstCheckbox.length; i++) {
        if (curstCheckbox[i].checked) {
          finalCrust.push(curstCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalCrust],
      };
    }

    if (paneer.checked) {
      // get all values of paneer
      const paneerCheckbox = form.querySelectorAll(".checkbox_paneer");
      const paneerPrice = form.querySelectorAll(".price_paneer");
      for (let i = 0; i < paneerCheckbox.length; i++) {
        if (paneerCheckbox[i].checked) {
          finalPaneer.push(paneerCheckbox[i].name);

          // finalPaneer.push({
          //   title: paneerCheckbox[i].name,
          //   price: +paneerPrice[i].value,
          // });
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalPaneer],
      };
    }

    if (cheese.checked) {
      // get all values of cheese
      const cheeseCheckbox = form.querySelectorAll(".checkbox_cheese");
      const cheesePrice = form.querySelectorAll(".price_cheese");
      for (let i = 0; i < cheeseCheckbox.length; i++) {
        if (cheeseCheckbox[i].checked) {
          finalCheese.push(cheeseCheckbox[i].name);

          // finalCheese.push({
          //   title: cheeseCheckbox[i].name,
          //   price: +cheesePrice[i].value,
          // });
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalCheese],
      };
    }

    if (toppings.checked) {
      // get all values of toppings
      const toppingsCheckbox = form.querySelectorAll(".checkbox_toppings");
      for (let i = 0; i < toppingsCheckbox.length; i++) {
        if (toppingsCheckbox[i].checked) {
          finalToppings.push(toppingsCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalToppings],
      };
    }

    if (drizzle.checked) {
      // get all values of drizzle
      const drizzleCheckbox = form.querySelectorAll(".checkbox_drizzle");
      for (let i = 0; i < drizzleCheckbox.length; i++) {
        if (drizzleCheckbox[i].checked) {
          finalDrizzle.push(drizzleCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalDrizzle],
      };
    }

    if (meatToppings.checked) {
      // get all values of meatToppings
      const meatToppingsCheckbox = form.querySelectorAll(
        ".checkbox_meattoppings"
      );
      for (let i = 0; i < meatToppingsCheckbox.length; i++) {
        if (meatToppingsCheckbox[i].checked) {
          finalMeatToppings.push(meatToppingsCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalMeatToppings],
      };
    }

    if (flavor.checked) {
      // get all values of flavor
      const flavorCheckbox = form.querySelectorAll(".checkbox_flavor");
      for (let i = 0; i < flavorCheckbox.length; i++) {
        if (flavorCheckbox[i].checked) {
          finalFlavor.push(flavorCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalFlavor],
      };
    }
    dispatch(addNewPizza(data));
  };

  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Box minH={"70vh"}>
              {Object.keys(items).length > 0 && (
                <Grid
                  my={8}
                  w={"100%"}
                  templateColumns="repeat(2, 1fr)"
                  gap={1}
                >
                  <SelectType values={items?.type} />
                  <Name />
                  <Description />
                  <Image />
                  <Size values={items?.items["size"]} />
                  <Crust values={items.items["Crust(Required)"]} />
                  <PaneerChicken values={items?.items["Panner/Chicken"]} />
                  <ExtraCheese values={items.items["Extra Cheese"]} />
                  <Toppings values={items?.items["Toppings"]} />
                  <Drizzle values={items?.items["Drizzle It Up!"]} />
                  <MeatToppings values={items?.items["Extra Meat Topping"]} />
                  <Flavor
                    values={
                      items?.items["Flavour (Base sauce & Top Seasonings)"]
                    }
                  />
                </Grid>
              )}
              {Object.keys(items).length === 0 && (
                <Grid
                  my={8}
                  w={"100%"}
                  templateColumns="repeat(2, 1fr)"
                  gap={1}
                >
                  <Skeleton height="80px" />
                  <Skeleton height="80px" />
                  <Skeleton height="120px" />
                  <Skeleton height="120px" />
                  <Skeleton height="130px" />
                  <Skeleton height="130px" />
                  <Skeleton height="120px" />
                  <Skeleton height="120px" />
                  <Skeleton height="120px" />
                  <Skeleton height="120px" />
                </Grid>
              )}
            </Box>

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
