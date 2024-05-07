import { Box, Grid, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { PastaModifier } from "../GridItems/PastaModifier";
import { Toppings } from "../GridItems/Toppings";
import { FormButtons } from "../../FormButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addNewPasta,
  get_Ingrediants,
  updatePasta,
} from "../../../Redux/MenuItems/action";
import { CLEANUP } from "../../../Redux/actionType";
import { PastaModifierId, ToppingsId, pastaId } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Pastas",
    link: "/pasta",
    isCurrent: false,
  },
  {
    title: "Add Pastas",
    link: "#",
    isCurrent: true,
  },
];
export const AddPastas = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const navigate = useNavigate();
  const { pastaParam } = useParams();
  const [pastaData, setPastaData] = useState({});
  const [pastaItem, setPastaItem] = useState({});
  const [imgName, setImgName] = useState("");
  const { pasta } = useSelector((store) => store.get_all_menuitem_reducer);

  const [link, setLink] = useState(links);
  useEffect(() => {
    dispatch(get_Ingrediants(pastaId));
  }, []);

  useEffect(() => {
    if (pastaParam && pasta.length > 0) {
      let current = pasta.filter((item) => item.pizzaId === +pastaParam);
      setPastaData(current[0]);
      let updated = link.map((item) => {
        if (item.title === "Add Pastas") {
          return {
            title: "Edit Pastas",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      current = current[0];
      if (current["pizzaId"]) {
        let extra_items = current["extraItems"];
        let pastamodifier_item = [],
          toppings_items = [];

        if (!current["price"]) {
          let sizes = current["sizes"];
          for (const obj of sizes) {
            if (obj["size"] === "Medium") {
              setPastaData({
                ...current,
                price: obj["price"],
              });
              break;
            }
          }
        }
        for (const extra of extra_items) {
          switch (extra["extraItem"]["extraItemId"]) {
            case PastaModifierId:
              pastamodifier_item.push(extra["extraItemId"]);
              break;
            case ToppingsId:
              toppings_items.push(extra["extraItemId"]);
              break;
            default:
              break;
          }
        }

        setPastaItem({
          pastamodifier: pastamodifier_item,
          toppings: toppings_items,
        });
      } else {
        navigate("/pasta");
      }
    }
  }, [pastaParam]);
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
    navigate("/pasta");
  };
  const handleImageName = (name) => {
    setImgName(name);
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
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const toppings = form.querySelector("#checkbox_toppings");
    const finalToppings = [];
    const pastamodifier = form.querySelector("#checkbox_pastamodifier");
    const finalPastaModifier = [];

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
      items: [],
      pizzaName: name.value,
      description: description.value,
      categoryId: pastaId,
      imageName: pastaId + "/" + imgName,
      pizzaSize: { Medium: +price.value },
    };
    if (pastamodifier.checked) {
      // get all values of pastamodifier
      const pastamodifierCheckboxTrue = form.querySelectorAll(
        ".checkbox_pastamodifier"
      );
      // const pastamodifierPrice = form.querySelectorAll(".price_pastamodifier");
      for (let i = 0; i < pastamodifierCheckboxTrue.length; i++) {
        if (pastamodifierCheckboxTrue[i].checked) {
          finalPastaModifier.push(+pastamodifierCheckboxTrue[i].name);
          // finalPastaModifier.push({
          //   title: pastamodifierCheckboxTrue[i].name,
          //   price: +pastamodifierPrice[i].value,
          // });
        }
      }
      data = { ...data, items: [...data.items, ...finalPastaModifier] };
      // const pastamodifierCheckboxFalse = form.querySelectorAll(
      //   ".checkbox_pastamodifier_price_false"
      // );
      // for (let i = 0; i < pastamodifierCheckboxFalse.length; i++) {
      //   if (pastamodifierCheckboxFalse[i].checked) {
      //     finalPastaModifier.push({
      //       title: pastamodifierCheckboxFalse[i].name,
      //     });
      //   }
      // }
    }
    if (toppings.checked) {
      // get all values of toppings
      const toppingsCheckbox = form.querySelectorAll(".checkbox_toppings");
      for (let i = 0; i < toppingsCheckbox.length; i++) {
        if (toppingsCheckbox[i].checked) {
          finalToppings.push(+toppingsCheckbox[i].name);
        }
      }
      data = { ...data, items: [...data.items, ...finalToppings] };
    }
    if (pastaParam) {
      dispatch(updatePasta(data, pastaData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewPasta(data, handleNavigate));
    }
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
                  name: pastaData?.name,
                  description: pastaData?.description,
                  price: pastaData?.price,
                }}
              />
              <Image
                handleImageName={handleImageName}
                categoryId={pastaId}
                name={imgName}
              />
              <PastaModifier
                values={items?.items?.["Pasta Modifier"]}
                itemValue={pastaItem?.pastamodifier}
              />
              <Toppings
                values={items?.items?.Toppings}
                itemValue={pastaItem?.toppings}
              />
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
