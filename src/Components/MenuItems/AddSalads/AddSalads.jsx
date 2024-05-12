import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
  useToast,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../../Layout/Layout";
import styled from "styled-components";
import { Image } from "../GridItems/Image";
import { Detail } from "../GridItems/Detail";
import { Breadcrumber } from "../Breadcrumber/Breadcrumber";
import { FormButtons } from "../../FormButtons";
import { SaladToppings } from "../GridItems/SaladToppings";
import { useEffect, useState } from "react";
import {
  addNewSalads,
  get_Ingrediants,
  updateSalads,
} from "../../../Redux/MenuItems/action";
import { useDispatch, useSelector } from "react-redux";
import { SaladId, SaladToppingsId } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";
import { CLEANUP } from "../../../Redux/actionType";
import { dollar } from "../../../assets";

const links = [
  {
    title: "Menu Items",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Salads",
    link: "/salads",
    isCurrent: false,
  },
  {
    title: "Add Salads",
    link: "#",
    isCurrent: true,
  },
];
export const AddSalads = () => {
  const [link, setLink] = useState(links);
  const toast = useToast();
  const { saladParam } = useParams();
  const [imgName, setImgName] = useState("");
  const [saladData, setSaladData] = useState({});
  const [saladItem, setSaladItem] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, items } = useSelector(
    (store) => store.menuItemsReducer
  );
  const { salads } = useSelector((store) => store.get_all_menuitem_reducer);

  useEffect(() => {
    dispatch(get_Ingrediants(SaladId));
  }, []);

  useEffect(() => {
    if (saladParam && salads.length > 0) {
      let current = salads.filter((item) => item.pizzaId === +saladParam);
      current = current[0];

      let updated = link.map((item) => {
        if (item.title === "Add Salads") {
          return {
            title: "Edit Salads",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
      setSaladData(current);

      if (current["pizzaId"]) {
        if (!current["price"]) {
          let sizes = current["sizes"];
          for (const obj of sizes) {
            if (obj["size"] === "Medium") {
              setSaladData({
                ...current,
                price: obj["price"],
              });
              break;
            }
          }
        }

        let extra_items = current["extraItems"];
        let salad_topping_item = [];
        for (const extra of extra_items) {
          switch (extra["extraItem"]["extraItemId"]) {
            case SaladToppingsId:
              salad_topping_item.push(extra["extraItemId"]);
              break;
            default:
              break;
          }
        }

        setSaladItem({
          salad_toppings: salad_topping_item,
        });
      } else {
        navigate("/salads");
      }
    }
  }, [saladParam]);
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
    navigate("/salads");
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
    const saladtoppings = form.querySelector("#checkbox_saladtoppings");
    const finalSaladToppings = [];

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
      categoryId: SaladId,
      imageName: SaladId + "/" + imgName,
      pizzaSize: { Medium: +price.value },
    };
    if (saladtoppings.checked) {
      // get all values of saladtoppings
      const toppingsCheckbox = form.querySelectorAll(".checkbox_saladtoppings");
      for (let i = 0; i < toppingsCheckbox.length; i++) {
        if (toppingsCheckbox[i].checked) {
          finalSaladToppings.push(+toppingsCheckbox[i].name);
        }
      }
    }

    if (saladParam) {
      dispatch(updateSalads(data, saladData["pizzaId"], handleNavigate));
    } else {
      dispatch(addNewSalads(data, handleNavigate));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSaladData({
      ...saladData,
      [name]: value,
    });
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
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack gap={4}>
                  <Flex justifyContent={"space-between"}>
                    <Stack>
                      <Text size={"18px"} fontWeight={"500"}>
                        NAME
                      </Text>
                      <Input
                        type="text"
                        placeholder="Enter food name"
                        id="name"
                        value={saladData.name}
                        onChange={handleChange}
                      />
                    </Stack>
                    <Stack>
                      <Text size={"18px"} fontWeight={"500"}>
                        PRICE
                      </Text>
                      <Box justifySelf={"flex-end"}>
                        <InputGroup size={"sm"}>
                          <InputLeftAddon
                            borderRadius={"10px 0 0 10px"}
                            bgColor={"brand.grey"}
                          >
                            <img src={dollar} />
                          </InputLeftAddon>
                          <Input
                            borderRadius={"0px 10px 10px 0px"}
                            type="number"
                            w={"auto"}
                            placeholder="price"
                            className="price_detail"
                            id={`price`}
                            value={+saladData.price}
                            name="price"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Box>
                    </Stack>
                  </Flex>
                  <Box>
                    <Text size={"18px"} fontWeight={"500"}>
                      DESCRIPTION
                    </Text>
                    <Textarea
                      rows={5}
                      type="text"
                      placeholder="Enter the description"
                      id="description"
                      value={saladData.description}
                      onChange={handleChange}
                    />
                  </Box>
                </Stack>
              </GridItem>
              <Image
                handleImageName={handleImageName}
                categoryId={SaladId}
                name={imgName}
              />
              <GridItem colSpan={2}>
                <SaladToppings itemValues={saladItem?.salad_toppings} />
              </GridItem>
            </Grid>
            <FormButtons canceling="/salads" />
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
