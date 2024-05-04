import { Box, Grid, useToast } from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { useEffect, useState } from "react";
import { SidesId } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import { addNewSides, updateSides } from "../../../Redux/MenuItems/action";
import { useParams } from "react-router-dom";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Sides",
    link: "/sides",
    isCurrent: false,
  },
  {
    title: "Add New Sides",
    link: "#",
    isCurrent: true,
  },
];
export const AddSides = () => {
  const [imgName, setImgName] = useState();
  const dispatch = useDispatch();
  const { sidesParam } = useParams();
  const toast = useToast();
  const [link, setLink] = useState(links);
  const [sidesData, setSideData] = useState({});
  const { sides } = useSelector((store) => store.get_all_menuitem_reducer);

  const handleNavigate = (msg) => {
    toast({
      title: msg,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/sides");
  };
  const handleImageName = (event) => {
    setImgName(event.target.value);
  };
  useEffect(() => {
    if (sidesParam) {
      const current = sides.filter((item) => item.pizzaId === +sidesParam);
      setSideData(current[0]);
      let updated = link.map((item) => {
        if (item.title === "Add New Sides") {
          return {
            title: "Edit Sides",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
    }
  }, [sidesParam]);
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
      categoryId: SidesId,
      imageName: SidesId + "/" + imgName,
      items: [],
      pizzaSize: { Medium: +price.value },
    };
    if (sidesData["pizzaId"]) {
      dispatch(updateSides(data, sidesData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewSides(data, handleNavigate));
    }
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
              <Detail
                itemValue={{
                  name: sidesData?.name,
                  description: sidesData?.description,
                }}
              />
              <Image
                handleImageName={handleImageName}
                name={imgName}
                categoryId={SidesId}
                itemValue={sidesData?.imageUrl}
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
