import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  CheesyFunId,
  DrizzleitupId,
  ExtraCheeseId,
  ExtraMeatToppingId,
  SeasoningsId,
  ToppingsId,
} from "../../../data";
import {
  addNewCheesyFun,
  get_Ingrediants,
  updateCheesyFun,
} from "../../../Redux/MenuItems/action";
import { CLEANUP } from "../../../Redux/actionType";
import { useNavigate, useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Cheesy Fun",
    link: "/cheesyfun",
    isCurrent: false,
  },
  {
    title: "Add Cheesy Fun",
    link: "#",
    isCurrent: true,
  },
];
export const AddCheesyFun = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const { cheesyfunParam } = useParams();
  const [link, setLink] = useState(links);
  const [imgName, setImgName] = useState();
  const [cheesyfunData, setCheesyFunData] = useState({});
  const [cheesyfunItem, setCheesyFunItem] = useState({});
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );

  useEffect(() => {
    dispatch(get_Ingrediants(CheesyFunId));
  }, []);

  const { cheesy } = useSelector((store) => store.get_all_menuitem_reducer);

  const handleImageName = (name) => {
    setImgName(name);
  };
  useEffect(() => {
    if (cheesyfunParam && cheesy.length > 0) {
      let current = cheesy.filter((item) => item.pizzaId === +cheesyfunParam);
      setCheesyFunData(current[0]);
      setImgName(current[0].imageUrl);
      current = current[0];
      let updated = link.map((item) => {
        if (item.title === "Add Cheesy Fun") {
          return {
            title: "Edit Cheesy Fun",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      if (current["pizzaId"]) {
        if (!current["price"]) {
          let sizes = current["sizes"];
          for (const obj of sizes) {
            if (obj["size"] === "Medium") {
              setCheesyFunData({
                ...current,
                price: obj["price"],
              });
              break;
            }
          }
        }
        let extra_items = current["extraItems"];
        let toppings_items = [],
          extra_meat_toppings_items = [],
          extra_cheese_items = [],
          drizzle_items = [],
          seasonings_items = [];

        for (const extra of extra_items) {
          switch (extra["extraItem"]["extraItemId"]) {
            case ToppingsId:
              toppings_items.push(extra["extraItemId"]);
              break;
            case ExtraMeatToppingId:
              extra_meat_toppings_items.push(extra["extraItemId"]);
              break;
            case ExtraCheeseId:
              extra_cheese_items.push(extra["extraItemId"]);
              break;
            case DrizzleitupId:
              drizzle_items.push(extra["extraItemId"]);
              break;
            case SeasoningsId:
              seasonings_items.push(extra["extraItemId"]);
              break;
            default:
              break;
          }
        }

        setCheesyFunItem({
          toppings: toppings_items,
          extra_meat_toppings: extra_meat_toppings_items,
          extra_cheese: extra_cheese_items,
          drizzle: drizzle_items,
          seasonings: seasonings_items,
        });
      }
    }
  }, [cheesyfunParam]);
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
  const handleNavigate = (msg) => {
    toast({
      title: msg,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/cheesyfun");
  };
  const handleError = (error) => {
    toast({
      title: error,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.querySelector("#price");

    const name = form.querySelector("#name");
    const description = form.querySelector("#description");
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
    if (!price.value) {
      handleError("Please enter price");
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
      pizzaName: name.value,
      description: description.value,
      categoryId: CheesyFunId,
      imageName: CheesyFunId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };

    if (cheese.checked) {
      // get all values of cheese
      const cheeseCheckbox = form.querySelectorAll(".checkbox_cheese");
      // const cheesePrice = form.querySelectorAll(".price_cheese");
      for (let i = 0; i < cheeseCheckbox.length; i++) {
        if (cheeseCheckbox[i].checked) {
          finalCheese.push(+cheeseCheckbox[i].name);

          // finalCheese.push(+{
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
          finalToppings.push(+toppingsCheckbox[i].name);
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
          finalDrizzle.push(+drizzleCheckbox[i].name);
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
          finalMeatToppings.push(+meatToppingsCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalMeatToppings],
      };
    }

    if (seasonings.checked) {
      // get all values of seasonings
      const seasoningsCheckbox = form.querySelectorAll(".checkbox_seasonings");
      for (let i = 0; i < seasoningsCheckbox.length; i++) {
        if (seasoningsCheckbox[i].checked) {
          finalSeasonings.push(+seasoningsCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalSeasonings],
      };
    }
    if (cheesyfunParam) {
      dispatch(updateCheesyFun(data, cheesyfunData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewCheesyFun(data, handleNavigate));
    }
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={link} />
        </Box>
        {Object.keys(items).length > 0 && (
          <DIV>
            <form onSubmit={handleForm}>
              <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
                <Detail
                  itemValue={{
                    name: cheesyfunData?.name,
                    description: cheesyfunData?.description,
                    price: +cheesyfunData?.price,
                  }}
                />
                <Image
                  handleImageName={handleImageName}
                  categoryId={CheesyFunId}
                  name={imgName}
                />
                <Toppings
                  values={items?.items?.Toppings}
                  itemValue={cheesyfunItem?.toppings}
                />
                <Drizzle
                  values={items?.items["Drizzle It Up!"]}
                  itemValue={cheesyfunItem?.drizzle}
                />
                <MeatToppings
                  values={items?.items?.["Extra Meat Topping"]}
                  itemValue={cheesyfunItem?.extra_meat_toppings}
                />
                <ExtraCheese
                  values={items?.items?.["Extra Cheese"]}
                  itemValue={cheesyfunItem?.extra_cheese}
                />
                <GridItem colSpan={2}>
                  <Seasonings
                    values={items?.items?.["Seasonings"]}
                    itemValue={cheesyfunItem?.seasonings}
                  />
                </GridItem>
              </Grid>

              <FormButtons canceling="/cheesyfun" />
            </form>
          </DIV>
        )}
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
