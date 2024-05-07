import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { RegMasala } from "../GridItems/RegMasala";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CLEANUP } from "../../../Redux/actionType";
import { HomeMadeDriskId } from "../../../data";
import { addNewDrink, updateDrink } from "../../../Redux/MenuItems/action";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Drinks",
    link: "/homemadedrinks",
    isCurrent: false,
  },
  {
    title: "Add Drinks",
    link: "#",
    isCurrent: true,
  },
];
export const AddDrinks = () => {
  const [link, setLink] = useState(links);
  const toast = useToast();
  const { drinksParam } = useParams();
  const [imgName, setImgName] = useState("");
  const [drinksData, setDrinksData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { home_made } = useSelector((store) => store.get_all_menuitem_reducer);
  useEffect(() => {
    // dispatch(get_Ingrediants(HomeMadeDriskId));
  }, []);
  useEffect(() => {
    if (drinksParam && home_made.length > 0) {
      let current = home_made.filter((item) => item.pizzaId === +drinksParam);
      current = current[0];
      setDrinksData(current);
      let updated = link.map((item) => {
        if (item.title === "Add Drinks") {
          return {
            title: "Edit Drinks",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      if (!current["price"]) {
        let sizes = current["sizes"];
        for (const obj of sizes) {
          if (obj["size"] === "Medium") {
            setDrinksData({
              ...current,
              price: obj["price"],
            });
            break;
          }
        }
      }
    }
  }, [drinksParam]);
  const handleImageName = (name) => {
    setImgName(name);
  };
  useEffect(() => {
    if (isLoading) {
      toast({
        title: "Loading...",
        status: "info",
        duration: 3000,
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

  const handleNavigate = (msg) => {
    toast({
      title: msg,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/homemadedrinks");
  };
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");

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
      description: description.value,
      categoryId: HomeMadeDriskId,
      imageName: HomeMadeDriskId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };

    if (drinksParam) {
      dispatch(updateDrink(data, drinksData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewDrink(data, handleNavigate));
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
                  name: drinksData?.name,
                  description: drinksData?.description,
                  price: drinksData?.price,
                }}
              />
              <Image
                itemValue={drinksData?.imageUrl}
                handleImageName={handleImageName}
                categoryId={HomeMadeDriskId}
                name={imgName}
              />
              <GridItem colSpan={2}>
                <RegMasala />
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
