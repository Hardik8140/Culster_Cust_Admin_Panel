import { Box, Grid, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SweetTreatId } from "../../../data";
import {
  addNewSweetTreat,
  updateSweetTreat,
} from "../../../Redux/MenuItems/action";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Sweet Treat",
    link: "/sweettreat!",
    isCurrent: false,
  },
  {
    title: "Add New Sweat Treat",
    link: "#",
    isCurrent: true,
  },
];
export const AddSweetTreat = () => {
  const [link, setLink] = useState(links);
  const toast = useToast();
  const { sweetTreatParam } = useParams();
  const [imgName, setImgName] = useState("");
  const [sweetTreatData, setSweetTreatData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { sweet_treet } = useSelector(
    (store) => store.get_all_menuitem_reducer
  );

  useEffect(() => {
    // dispatch(get_Ingrediants(SweetTreatId));
  }, []);
  useEffect(() => {
    if (sweetTreatParam && sweet_treet.length > 0) {
      let current = sweet_treet.filter(
        (item) => item.pizzaId === +sweetTreatParam
      );
      current = current[0];
      setSweetTreatData(current);
      let updated = link.map((item) => {
        if (item.title === "Add New Sweet Treat") {
          return {
            title: "Edit Sweet Treat",
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
            setSweetTreatData({
              ...current,
              price: obj["price"],
            });
            break;
          }
        }
      }
    }
  }, [sweetTreatParam]);
  const handleImageName = (name) => {
    setImgName(name);
  };

  const handleNavigate = (msg) => {
    toast({
      title: msg,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/sweettreat!");
  };
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    // const sweattreat = form.querySelector("#checkbox_sweattreat");
    // const finalsweattreat = [];

    // if (sweattreat.checked) {
    //   // get all values of sweattreat
    //   const toppingsCheckbox = form.querySelectorAll(".checkbox_sweattreat");
    //   for (let i = 0; i < toppingsCheckbox.length; i++) {
    //     if (toppingsCheckbox[i].checked) {
    //       finalsweattreat.push(toppingsCheckbox[i].name);
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
    const data = {
      pizzaName: name.value,
      description: description.value,
      categoryId: SweetTreatId,
      imageName: SweetTreatId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };

    if (sweetTreatParam) {
      dispatch(
        updateSweetTreat(data, sweetTreatData["pizzaId"], handleNavigate)
      );
    } else {
      dispatch(addNewSweetTreat(data, handleNavigate));
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
                  name: sweetTreatData?.name,
                  description: sweetTreatData?.description,
                  price: sweetTreatData?.price,
                }}
              />
              <Image
                handleImageName={handleImageName}
                categoryId={SweetTreatId}
                itemValue={sweetTreatData?.imageUrl}
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
