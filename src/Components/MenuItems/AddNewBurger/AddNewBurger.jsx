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
import { useEffect, useState } from "react";
import {
  addNewBurger,
  get_Ingrediants,
  updateBurger,
} from "../../../Redux/MenuItems/action";
import { CLEANUP } from "../../../Redux/actionType";
import {
  BurgerFlavorId,
  BurgerId,
  ExtraCheeseId,
  ExtraPattyId,
  FlavorId,
} from "../../../data";
import { useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "/",
    isCurrent: false,
  },
  {
    title: "Burger",
    link: "/burger",
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
  const [link, setLink] = useState(links);
  const toast = useToast();
  const { burgerParam } = useParams();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { burger } = useSelector((store) => store.get_all_menuitem_reducer);
  const [burgerData, setBurgerData] = useState({});
  const [burgerItems, setBurgerItems] = useState({});
  const [imgName, setImageName] = useState("");
  const handleImageName = (name) => {
    setImageName(name);
  };
  useEffect(() => {
    if (burgerParam) {
      const currentBurger = burger.filter(
        (item) => item.pizzaId === +burgerParam
      );
      setBurgerData(currentBurger[0]);
      let updated = link.map((item) => {
        if (item.title === "Add New Burger") {
          return {
            title: "Edit Burger",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
    }
  }, [burgerParam]);
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
  const handleError = (error) => {
    toast({
      title: error,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleNavigate = (msg) => {
    toast({
      title: msg,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/Burger");
  };
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
    if (!name.value) {
      handleError("Please enter name");
      return;
    }
    if (!description.value) {
      handleError("Please enter description");
      return;
    }
    let data = {
      items: [],
      pizzaName: name.value,
      description: description.value,
      categoryId: BurgerId,
      imageName: BurgerId + "/" + imgName,
      pizzaSize: { Medium: +price.value },
    };
    if (cheese.checked) {
      // get all values of cheese
      const cheeseCheckbox = form.querySelectorAll(".checkbox_cheese");
      // const cheesePrice = form.querySelectorAll(".price_cheese");
      for (let i = 0; i < cheeseCheckbox.length; i++) {
        if (cheeseCheckbox[i].checked) {
          finalCheese.push(+cheeseCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalCheese],
      };
    }

    if (flavor.checked) {
      // get all values of flavor
      const flavorCheckbox = form.querySelectorAll(".checkbox_flavor");
      for (let i = 0; i < flavorCheckbox.length; i++) {
        if (flavorCheckbox[i].checked) {
          finalFlavor.push(+flavorCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalFlavor],
      };
    }

    if (extrapatty.checked) {
      // get all values of extrapatty
      const extrapattyCheckbox = form.querySelectorAll(".checkbox_patty");
      for (let i = 0; i < extrapattyCheckbox.length; i++) {
        if (extrapattyCheckbox[i].checked) {
          finalExtraPatty.push(+extrapattyCheckbox[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalExtraPatty],
      };
    }

    // console.log("data", data);
    if (burgerData["pizzaId"]) {
      dispatch(updateBurger(data, burgerData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewBurger(data, handleNavigate));
    }
  };
  useEffect(() => {
    if (burgerData["pizzaId"]) {
      let extra_items = burgerData["extraItems"];
      let burger_flavor_items = [],
        extra_cheese_items = [],
        extra_patty_items = [];
      for (const extra of extra_items) {
        switch (extra["extraItem"]["extraItemId"]) {
          case BurgerFlavorId:
            burger_flavor_items.push(extra["extraItemId"]);
            break;
          case ExtraCheeseId:
            extra_cheese_items.push(extra["extraItemId"]);
            break;
          case ExtraPattyId:
            extra_patty_items.push(extra["extraItemId"]);
            break;
          default:
            break;
        }
      }

      setBurgerItems({
        burger_flavor: burger_flavor_items,
        extra_cheese: extra_cheese_items,
        extra_patty: extra_patty_items,
      });
    }
  }, [burgerData]);

  return (
    <Layout>
      <Box minH={"100vh"}>
        <Box>
          <Breadcrumber links={link} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            {Object.keys(items).length > 0 && (
              <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
                <Detail
                  itemValue={{
                    name: burgerData?.name,
                    description: burgerData?.description,
                  }}
                />

                <Image
                  name={imgName}
                  itemValue={burgerData?.imageUrl}
                  categoryId={BurgerId}
                  handleImageName={handleImageName}
                />
                <Flavor
                  title="BURGER FLAVOR"
                  itemValue={burgerItems?.burger_flavor}
                  values={items?.items["Burger Flavor"]}
                />
                <ExtraPatty
                  values={items?.items["Extra Patty"]}
                  itemValue={burgerItems?.extra_patty}
                />
                <GridItem colSpan={2}>
                  <ExtraCheese
                    values={items?.items["Extra Cheese"]}
                    itemValue={burgerItems?.extra_cheese}
                  />
                </GridItem>
              </Grid>
            )}

            <FormButtons canceling="/burger" />
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
