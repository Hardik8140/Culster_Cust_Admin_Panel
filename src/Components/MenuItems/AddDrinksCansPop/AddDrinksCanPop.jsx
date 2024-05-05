import { Box, Grid, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DriksCanPopId } from "../../../data";
import { CLEANUP } from "../../../Redux/actionType";
import {
  addNewDrinksCanPop,
  updateDrinksCanPop,
} from "../../../Redux/MenuItems/action";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Drinks-can pop",
    link: "/drinks-canpop",
    isCurrent: false,
  },
  {
    title: "Add Drinks-can pop",
    link: "#",
    isCurrent: true,
  },
];
export const AddDrinksCanPop = () => {
  const [link, setLink] = useState(links);
  const toast = useToast();
  const { drinkscanParam } = useParams();
  const [imgName, setImgName] = useState("");
  const [drinksCanPopData, setDrinksCanPopData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { drinks_can_pop } = useSelector(
    (store) => store.get_all_menuitem_reducer
  );
  useEffect(() => {
    // dispatch(get_Ingrediants(DriksCanPopId));
  }, []);
  useEffect(() => {
    if (drinkscanParam && drinks_can_pop.length > 0) {
      const current = drinks_can_pop.filter(
        (item) => item.pizzaId === +drinkscanParam
      );
      setDrinksCanPopData(current[0]);
      let updated = link.map((item) => {
        if (item.title === "Add Drinks-can pop") {
          return {
            title: "Edit Dricks-can pop",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
    }
  }, [drinkscanParam]);
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
    navigate("/drinks-canpop");
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
      categoryId: DriksCanPopId,
      imageName: DriksCanPopId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };

    if (drinksCanPopData["pizzaId"]) {
      dispatch(
        updateDrinksCanPop(data, drinksCanPopData["pizzaId"], handleNavigate)
      );
    } else {
      dispatch(addNewDrinksCanPop(data, handleNavigate));
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
                  name: drinksCanPopData?.name,
                  description: drinksCanPopData?.description,
                }}
              />
              <Image
                itemValue={drinksCanPopData?.imageUrl}
                handleImageName={handleImageName}
                categoryId={DriksCanPopId}
                name={imgName}
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
