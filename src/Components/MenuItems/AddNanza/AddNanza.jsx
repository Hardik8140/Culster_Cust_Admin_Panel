import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { PaneerChicken } from "../GridItems/PaneerChicken";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNewNanza,
  get_Ingrediants,
  updateNanza,
} from "../../../Redux/MenuItems/action";
import { CLEANUP } from "../../../Redux/actionType";
import { NanzaId, PannerChickenId } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Nanza",
    link: "/nanza",
    isCurrent: false,
  },
  {
    title: "Add New Nanza",
    link: "#",
    isCurrent: true,
  },
];
export const AddNanza = () => {
  const dispatch = useDispatch();
  const { nanzaParam } = useParams();
  const toast = useToast();
  const [link, setLink] = useState(links);
  const [nanzaData, setNanzaData] = useState({});
  const [nanzaItem, setNanzaItem] = useState([]);
  const [imgName, setImgName] = useState("");
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { nanza } = useSelector((store) => store.get_all_menuitem_reducer);

  useEffect(() => {
    dispatch(get_Ingrediants(NanzaId));
  }, []);
  useEffect(() => {
    if (nanzaParam) {
      const currentNanza = nanza.filter((item) => item.pizzaId === +nanzaParam);
      handleImageName(currentNanza[0]?.imageUrl);
      setNanzaData(currentNanza[0]);
      let updated = link.map((item) => {
        if (item.title === "Add New Nanza") {
          return {
            title: "Edit Nanza",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
    }
  }, [nanzaParam]);
  useEffect(() => {
    if (nanzaData["pizzaId"]) {
      if (!nanzaData["price"]) {
        let sizes = nanzaData["sizes"];
        for (const obj of sizes) {
          if (obj["size"] === "Medium") {
            setNanzaData({
              ...nanzaData,
              price: obj["price"],
            });
            break;
          }
        }
      }
      let extra_items = nanzaData["extraItems"];
      let paneer_chicken_items = [];
      for (const extra of extra_items) {
        switch (extra["extraItem"]["extraItemId"]) {
          case PannerChickenId:
            paneer_chicken_items.push(extra["extraItemId"]);
            break;
          default:
            break;
        }
      }

      setNanzaItem({
        panner_chicken: paneer_chicken_items,
      });
    }
  }, [nanzaData]);
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
    navigate("/nanza");
  };
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const paneer = form.querySelector("#checkbox_paneer");
    const finalPaneer = [];
    // const toppings = form.querySelector("#checkbox_toppings");
    // const finalToppings = [];
    // const pastamodifier = form.querySelector("#checkbox_pastamodifier");
    // const finalPastaModifier = [];
    if (!name.value) {
      handleError("Please enter name");
      return;
    }
    if (!description.value) {
      handleError("Please enter description");
      return;
    }
    if (!price.value) {
      handleError("Please enter price");
      return;
    }
    let data = {
      pizzaName: name.value,
      // price: +price.value,
      pizzaSize: { Medium: +price.value },
      description: description.value,
      imageName: NanzaId + "/" + imgName,
      categoryId: NanzaId,
      items: [],
    };

    if (paneer.checked) {
      // get all values of paneer
      const paneerCheckbox = form.querySelectorAll(".checkbox_paneer");
      // const paneerPrice = form.querySelectorAll(".price_paneer");
      for (let i = 0; i < paneerCheckbox.length; i++) {
        if (paneerCheckbox[i].checked) {
          finalPaneer.push(+paneerCheckbox[i].name);

          // finalPaneer.push(+{
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
    // if (pastamodifier.checked) {
    //   // get all values of pastamodifier
    //   const pastamodifierCheckboxTrue = form.querySelectorAll(
    //     ".checkbox_pastamodifier_price_true"
    //   );
    //   const pastamodifierPrice = form.querySelectorAll(".price_pastamodifier");
    //   for (let i = 0; i < pastamodifierCheckboxTrue.length; i++) {
    //     if (pastamodifierCheckboxTrue[i].checked) {
    //       finalPastaModifier.push({
    //         title: pastamodifierCheckboxTrue[i].name,
    //         price: +pastamodifierPrice[i].value,
    //       });
    //     }
    //   }

    //   // const pastamodifierCheckboxFalse = form.querySelectorAll(
    //   //   ".checkbox_pastamodifier_price_false"
    //   // );
    //   // for (let i = 0; i < pastamodifierCheckboxFalse.length; i++) {
    //   //   if (pastamodifierCheckboxFalse[i].checked) {
    //   //     finalPastaModifier.push({
    //   //       title: pastamodifierCheckboxFalse[i].name,
    //   //     });
    //   //   }
    //   // }
    // }
    // if (toppings.checked) {
    //   // get all values of toppings
    //   const toppingsCheckbox = form.querySelectorAll(".checkbox_toppings");
    //   for (let i = 0; i < toppingsCheckbox.length; i++) {
    //     if (toppingsCheckbox[i].checked) {
    //       finalToppings.push(toppingsCheckbox[i].name);
    //     }
    //   }
    // }

    if (nanzaParam) {
      dispatch(updateNanza(data, nanzaData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewNanza(data, handleNavigate));
    }
  };

  const handleImageName = (name) => {
    setImgName(name);
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={link} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
              <Detail
                itemValue={{
                  name: nanzaData?.name,
                  description: nanzaData?.description,
                  price: nanzaData?.price,
                }}
              />
              <Image
                itemValue={nanzaData?.imageUrl}
                categoryId={NanzaId}
                name={imgName}
                handleImageName={handleImageName}
              />
              <GridItem colSpan={2}>
                <PaneerChicken
                  values={items?.items?.["Panner/Chicken"]}
                  itemValue={nanzaItem?.panner_chicken}
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
