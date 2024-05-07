import { Box, Grid, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThickShakesId } from "../../../data";
import { CLEANUP } from "../../../Redux/actionType";
import {
  addNewThickShakes,
  updateThickShakes,
} from "../../../Redux/MenuItems/action";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Culture Crust Special Think Shakes!!!",
    link: "/culturecurstspecialthickshakes!!!",
    isCurrent: false,
  },
  {
    title: "Add Culture Crust Special Think Shakes!!!",
    link: "#",
    isCurrent: true,
  },
];
export const AddCultureCrustSpecialThinkShakes = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState(links);
  const { thickShakesParam } = useParams();
  const toast = useToast();
  const [thinkShakesData, setThinkShakesData] = useState({});
  const [thinkShakesItems, setThinkShakesItems] = useState({});
  const [imgName, setImageName] = useState("");
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const handleImageName = (name) => {
    setImageName(name);
  };
  const { theek_shake } = useSelector(
    (store) => store.get_all_menuitem_reducer
  );
  useEffect(() => {
    if (thickShakesParam && theek_shake.length > 0) {
      let currentPizza = theek_shake.filter(
        (item) => item.pizzaId === +thickShakesParam
      );
      currentPizza = currentPizza[0];
      setThinkShakesData(currentPizza);
      let updated = link.map((item) => {
        if (item.title === "Add Culture Crust Special Think Shakes!!!") {
          return {
            title: "Edit Culture Crust Special Think Shakes!!!",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      if (!currentPizza["price"]) {
        let sizes = currentPizza["sizes"];
        for (const obj of sizes) {
          if (obj["size"] === "Medium") {
            setThinkShakesData({
              ...currentPizza,
              price: obj["price"],
            });
            break;
          }
        }
      }
    }
  }, [thickShakesParam]);

  useEffect(() => {
    // dispatch(get_Ingrediants(ThickShakesId));
  }, []);

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
    navigate("/culturecurstspecialthickshakes!!!");
  };
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const thikshakes = form.querySelector("#checkbox_thikshakes");
    const finalthikshakes = [];

    // if (thikshakes.checked) {
    //   // get all values of thikshakes
    //   const thikshakesCheckbox = form.querySelectorAll(".checkbox_thikshakes");
    //   for (let i = 0; i < thikshakesCheckbox.length; i++) {
    //     if (thikshakesCheckbox[i].checked) {
    //       finalthikshakes.push(thikshakesCheckbox[i].name);
    //     }
    //   }
    // }

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
      categoryId: ThickShakesId,
      imageName: ThickShakesId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };

    if (thickShakesParam) {
      dispatch(
        updateThickShakes(data, thinkShakesData["pizzaId"], handleNavigate)
      );
    } else {
      dispatch(addNewThickShakes(data, handleNavigate));
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
                  name: thinkShakesData?.name,
                  description: thinkShakesData?.description,
                  price: thinkShakesData?.price,
                }}
              />
              <Image
                itemValue={thinkShakesData?.imageUrl}
                handleImageName={handleImageName}
                name={imgName}
                categoryId={ThickShakesId}
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
