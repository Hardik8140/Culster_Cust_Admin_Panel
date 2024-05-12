import { Box, Grid, GridItem, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { WingsSauces } from "../GridItems/WingsSauces";
import { TypeOfServings } from "../GridItems/TypeOfServings";
import { SizeOfWingBox } from "../GridItems/SizeOfWingBox";
import { FormButtons } from "../../FormButtons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEANUP } from "../../../Redux/actionType";
import {
  HouseWingsId,
  SizeOfWingBoxId,
  TypeOfServingId,
  WingsSaucesId,
} from "../../../data";
import {
  addNewHouseOfWings,
  get_Ingrediants,
  updateHouseOfWings,
} from "../../../Redux/MenuItems/action";
import { useNavigate, useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "/",
    isCurrent: false,
  },
  {
    title: "House of Wings!!!",
    link: "/houseofwings",
    isCurrent: false,
  },
  {
    title: "Add House Of Wings!!!",
    link: "#",
    isCurrent: true,
  },
];
export const HouseOfWings = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { housewingsParam } = useParams();
  const navigate = useNavigate();
  const [link, setLink] = useState(links);
  const [houseWingsData, setHouseWingsData] = useState({});
  const [houseWingsItem, setHouseWingsItem] = useState({});
  const [imgName, setImgName] = useState("");

  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { hos } = useSelector((store) => store.get_all_menuitem_reducer);

  useEffect(() => {
    dispatch(get_Ingrediants(HouseWingsId));
  }, []);
  useEffect(() => {
    if (housewingsParam) {
      let currenthos = hos.filter((item) => item.pizzaId === +housewingsParam);
      setHouseWingsData(currenthos[0]);
      let updated = link.map((item) => {
        if (item.title === "Add House Of Wings!!!") {
          return {
            title: "Edit House Of Wings!!!",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      currenthos = currenthos[0];
      if (currenthos.pizzaId) {
        let extra_items = currenthos["extraItems"];
        let typeofservings_item = [],
          sizeofwingbox_item = [],
          wingsSauces_item = [];
        if (!currenthos["price"]) {
          let sizes = currenthos["sizes"];
          for (const obj of sizes) {
            if (obj["size"] === "Medium") {
              setHouseWingsData({
                ...currenthos,
                price: obj["price"],
              });
              break;
            }
          }
        }
        for (const extra of extra_items) {
          switch (extra["extraItem"]["extraItemId"]) {
            case TypeOfServingId:
              typeofservings_item.push(extra["extraItemId"]);
              break;
            case SizeOfWingBoxId:
              sizeofwingbox_item.push(extra["extraItemId"]);
              break;
            case WingsSaucesId:
              wingsSauces_item.push(extra["extraItemId"]);
              break;
            default:
              break;
          }
        }

        setHouseWingsItem({
          typeofservings: typeofservings_item,
          sizeofwingbox: sizeofwingbox_item,
          wingsSauces: wingsSauces_item,
        });
      } else {
        navigate("/houseofwings");
      }
    }
  }, [housewingsParam]);
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
    navigate("/houseofwings");
  };
  const handleImageName = (name) => {
    setImgName(name);
  };

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
    const wingsSauces = form.querySelector("#checkbox_wingsSauces");
    const finalWingsSauces = [];
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
      categoryId: HouseWingsId,
      imageName: HouseWingsId + "/" + imgName,
      pizzaSize: { Medium: +price.value },
    };
    if (typeofservings.checked) {
      // get all values of typeofservings
      const typeofServings = form.querySelectorAll(
        ".checkbox_type_of_servings"
      );
      // const typeofservingsPrice = form.querySelectorAll(
      //   ".price_typeofservings"
      // );
      for (let i = 0; i < typeofServings.length; i++) {
        if (typeofServings[i].checked) {
          finalTypeOfServings.push(+typeofServings[i].name);
          // finalTypeOfServings.push({
          //   title: typeofservingsCheckboxTrue[i].name,
          //   price: +typeofservingsPrice[i].value,
          // });
        }
      }

      data = {
        ...data,
        items: [...data.items, ...finalTypeOfServings],
      };

      // const typeofservingsCheckboxFalse = form.querySelectorAll(
      //   ".checkbox_servings_price_false"
      // );
      // for (let i = 0; i < typeofservingsCheckboxFalse.length; i++) {
      //   if (typeofservingsCheckboxFalse[i].checked) {
      //     finalTypeOfServings.push(+typeofservingsCheckboxFalse[i].name);
      //   }
      // }
    }
    if (sizeofwingbox.checked) {
      // get all values of sizeofwingbox
      const size_of_wing_box = form.querySelectorAll(
        ".checkbox_size_of_wing_box"
      );
      // const sizeofwingboxPrice = form.querySelectorAll(".price_sizeofwingbox");
      for (let i = 0; i < size_of_wing_box.length; i++) {
        if (size_of_wing_box[i].checked) {
          finalSizeOfWingBox.push(+size_of_wing_box[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalSizeOfWingBox],
      };
      // const sizeofwingboxCheckboxFalse = form.querySelectorAll(
      //   ".checkbox_sizeofwingbox_price_false"
      // );
      // for (let i = 0; i < sizeofwingboxCheckboxFalse.length; i++) {
      //   if (sizeofwingboxCheckboxFalse[i].checked) {
      //     finalSizeOfWingBox.push(+sizeofwingboxCheckboxFalse[i].name);
      //   }
      // }
    }
    if (wingsSauces.checked) {
      const size_of_wing_sauce = form.querySelectorAll(".checkbox_wingsSauces");
      // const sizeofwingboxPrice = form.querySelectorAll(".price_sizeofwingbox");
      for (let i = 0; i < size_of_wing_sauce.length; i++) {
        if (size_of_wing_sauce[i].checked) {
          finalWingsSauces.push(+size_of_wing_sauce[i].name);
        }
      }
      data = {
        ...data,
        items: [...data.items, ...finalWingsSauces],
      };
    }

    if (housewingsParam) {
      dispatch(updateHouseOfWings(data, HouseWingsId, handleNavigate));
    } else {
      dispatch(addNewHouseOfWings(data, handleNavigate));
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
                  name: houseWingsData?.name,
                  description: houseWingsData?.description,
                  price: houseWingsData?.price,
                }}
              />
              <Image
                itemValue={houseWingsData?.imageUrl}
                handleImageName={handleImageName}
              />
              <TypeOfServings
                values={items?.items?.["Type of serving"]}
                itemValue={houseWingsItem?.typeofservings}
              />
              <SizeOfWingBox
                values={items?.items?.["Size of Wing Box"]}
                itemValue={houseWingsItem?.sizeofwingbox}
              />
              <GridItem colSpan={2}>
                <WingsSauces
                  values={items?.items?.["Wings Sauces"]}
                  itemValue={houseWingsItem?.wingsSauces}
                />
              </GridItem>
            </Grid>

            <FormButtons canceling={"/houseofwings"} />
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
