import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
  Input,
  Flex,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ChevronRightIcon, Upload } from "lucide-react";
import Layout from "../Layout/Layout";
import { Select } from "antd";
import styled from "styled-components";
import { useRef, useState } from "react";
import { SelectType } from "../GridItems/SelectType";
import { Name } from "../GridItems/Name";
import { Description } from "../GridItems/Description";
import { Image } from "../GridItems/Image";
import style from "./AddNewPIzza.module.css";
import { dollar } from "../../assets";
import { Size } from "../GridItems/Size";
import { Crust } from "../GridItems/Crust";

const paneer = [
  {
    title: "Paneer",
  },
  {
    title: "Chiken",
  },
];

const cheese = [
  {
    title: "Double Cheese",
  },
  {
    title: "Trippel Cheese",
  },
];
const toppings = [
  {
    title: "Baby Conrs",
  },
  {
    title: "Fresh Mushroom",
  },
  {
    title: "Pineapples",
  },
  {
    title: "Red Paprika",
  },
  {
    title: "Pineapples",
  },
  {
    title: "Red Paprika",
  },
];
const extraMeat = [
  {
    title: "Pepperoni",
  },
  {
    title: "Bacon Crumble",
  },
  {
    title: "Bacon Strips",
  },
  {
    title: "Chicken",
  },
];

const Drizzle = [
  {
    title: "Creamy Garlic",
  },
  {
    title: "BBQ",
  },
  {
    title: "Chilli Coriander",
  },
  {
    title: "Spicy Tandori",
  },
];
export const AddNewPizza = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.querySelector("#type");
    const name = form.querySelector("#name");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    let size = form.querySelector("#checkbox_size");
    const final = [];

    if (size.checked) {
      // get all values of size
      const sizeCheckbox = form.querySelectorAll(".checkbox_size");
      const sizePrice = form.querySelectorAll(".price_size");
      for (let i = 0; i < sizeCheckbox.length; i++) {
        if (sizeCheckbox[i].checked) {
          final.push({
            title: sizeCheckbox[i].name,
            price: +sizePrice[i].value,
          });
        }
      }
    }
    size = final;

    const data = {
      type: type.value,
      name: name.value,
      description: description.value,
      image: image ? image.src : "",
      size: size,
    };

    console.log(data);
  };
  return (
    <Layout>
      <Box bgColor={"brand.dashboard"} px={"10px"} py={8} width={"82vw"}>
        <Box>
          <Breadcrumb
            spacing="8px"
            color={"#D60024"}
            fontSize={"20px"}
            fontWeight={"500"}
            separator={<ChevronRightIcon color="#D60024" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink fontWeight={"700"} href="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink fontWeight={"700"} href="#">
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage color={"black"}>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
              <SelectType />
              <Name />
              <Description />
              <Image />
              <Size />
              <Crust />
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>PANEER/CHICKEN</Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_paneer"
                      />
                      <label className="switch" htmlFor="checkbox_paneer">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Flex my={2} justifyContent={"space-between"}>
                      <Text color={"brand.grey"}>Select Size</Text>
                      <Text color={"brand.grey"} textAlign={"end"}>
                        Add Price
                      </Text>
                    </Flex>
                    {paneer.map(({ title }, ind) => (
                      <Flex
                        key={ind}
                        justifyContent={"space-between"}
                        gap={2}
                        width={"100%"}
                        my={4}
                      >
                        <Flex minW={"50%"}>
                          <Box>
                            <label className={style.customCheckbox}>
                              <input name="dummy" type="checkbox" />
                              <span className={style.checkmark}></span>
                            </label>
                          </Box>
                          <Text>{title}</Text>
                        </Flex>
                        <Box justifySelf={"flex-end"}>
                          <InputGroup size={"sm"}>
                            <InputLeftAddon
                              borderRadius={"10px 0 0 10px"}
                              bgColor={"brand.black"}
                            >
                              <img src={dollar} />
                            </InputLeftAddon>
                            <Input
                              borderRadius={"0px 10px 10px 0px"}
                              type="number"
                              w={"auto"}
                              placeholder="price"
                            />
                          </InputGroup>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                </Stack>
              </GridItem>

              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>EXTRA CHEESE</Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_cheese"
                      />
                      <label className="switch" htmlFor="checkbox_cheese">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Flex my={2} justifyContent={"space-between"}>
                      <Text color={"brand.grey"}>Select Size</Text>
                      <Text color={"brand.grey"} textAlign={"end"}>
                        Add Price
                      </Text>
                    </Flex>
                    {cheese.map(({ title }, ind) => (
                      <Flex
                        key={ind}
                        justifyContent={"space-between"}
                        gap={2}
                        width={"100%"}
                        my={2}
                      >
                        <Flex minW={"50%"}>
                          <Box>
                            <label className={style.customCheckbox}>
                              <input name="dummy" type="checkbox" />
                              <span className={style.checkmark}></span>
                            </label>
                          </Box>
                          <Text>{title}</Text>
                        </Flex>
                        <Box justifySelf={"flex-end"}>
                          <InputGroup size={"sm"}>
                            <InputLeftAddon
                              borderRadius={"10px 0 0 10px"}
                              bgColor={"brand.black"}
                            >
                              <img src={dollar} />
                            </InputLeftAddon>
                            <Input
                              borderRadius={"0px 10px 10px 0px"}
                              type="number"
                              w={"auto"}
                              placeholder="price"
                            />
                          </InputGroup>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                </Stack>
              </GridItem>
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>TOPPINGS (2 FREE TOPPINGS)</Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_toppings"
                      />
                      <label className="switch" htmlFor="checkbox_toppings">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Flex my={2} justifyContent={"space-between"}>
                      <Text color={"brand.grey"}>Select Toppings</Text>
                      <Text color={"brand.grey"} textAlign={"end"}>
                        Default Toppings
                      </Text>
                    </Flex>
                    <Box overflowY={"scroll"} maxH={"165px"} pr={6}>
                      {toppings.map(({ title }, ind) => (
                        <Flex
                          key={ind}
                          justifyContent={"space-between"}
                          width={"100%"}
                          my={4}
                        >
                          <Flex minW={"50%"}>
                            <Box>
                              <label className={style.customCheckbox}>
                                <input name="dummy" type="checkbox" />
                                <span className={style.checkmark}></span>
                              </label>
                            </Box>
                            <Text>{title}</Text>
                          </Flex>
                          <Box justifySelf={"flex-end"}>
                            <div className="green_container">
                              <input
                                type="checkbox"
                                className="green_checkbox"
                                id={`green_checkbox_${ind}`}
                              />
                              <label
                                className="switch"
                                htmlFor={`green_checkbox_${ind}`}
                              >
                                <span className="slider"></span>
                              </label>
                            </div>
                          </Box>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </GridItem>
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>DRIZZLE IT UP!</Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_drizzle"
                      />
                      <label className="switch" htmlFor="checkbox_drizzle">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Text color={"brand.grey"}>Select Drizzle It Up!</Text>
                    <Box overflowY={"scroll"} maxH={"165px"} pr={6}>
                      {Drizzle.map(({ title }, ind) => (
                        <Flex
                          key={ind}
                          justifyContent={"space-between"}
                          width={"100%"}
                          my={4}
                        >
                          <Flex minW={"50%"}>
                            <Box>
                              <label className={style.customCheckbox}>
                                <input name="dummy" type="checkbox" />
                                <span className={style.checkmark}></span>
                              </label>
                            </Box>
                            <Text>{title}</Text>
                          </Flex>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </GridItem>
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>EXTRA MEAT TOPPING</Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_extrameat"
                      />
                      <label className="switch" htmlFor="checkbox_extrameat">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Flex my={2} justifyContent={"space-between"}>
                      <Text color={"brand.grey"}>
                        Select Extra Meat Toppings
                      </Text>
                      <Text color={"brand.grey"} textAlign={"end"}>
                        Default Toppings
                      </Text>
                    </Flex>
                    <Box overflowY={"scroll"} maxH={"165px"} pr={6}>
                      {extraMeat.map(({ title }, ind) => (
                        <Flex
                          key={ind}
                          justifyContent={"space-between"}
                          width={"100%"}
                          my={4}
                        >
                          <Flex minW={"50%"}>
                            <Box>
                              <label className={style.customCheckbox}>
                                <input name="dummy" type="checkbox" />
                                <span className={style.checkmark}></span>
                              </label>
                            </Box>
                            <Text>{title}</Text>
                          </Flex>
                          <Box justifySelf={"flex-end"}>
                            <div className="green_container">
                              <input
                                type="checkbox"
                                className="green_checkbox"
                                id={`green_checkbox_extra_${ind}`}
                              />
                              <label
                                className="switch"
                                htmlFor={`green_checkbox_extra_${ind}`}
                              >
                                <span className="slider"></span>
                              </label>
                            </div>
                          </Box>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </GridItem>
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Stack>
                  <Flex justifyContent={"space-between"}>
                    <Text fontWeight={"500"}>
                      FLAVOR (BASE SAUCE AND TOP SEASONINGS)
                    </Text>
                    <div className="container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox_flavor"
                      />
                      <label className="switch" htmlFor="checkbox_flavor">
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Flex>
                  <hr />
                  <Box>
                    <Text color={"brand.grey"}>Select Flovor</Text>
                    <Box overflowY={"scroll"} maxH={"165px"} pr={6}>
                      {Drizzle.map(({ title }, ind) => (
                        <Flex
                          key={ind}
                          justifyContent={"space-between"}
                          width={"100%"}
                          my={4}
                        >
                          <Flex minW={"50%"}>
                            <Box>
                              <label className={style.customCheckbox}>
                                <input name="dummy" type="checkbox" />
                                <span className={style.checkmark}></span>
                              </label>
                            </Box>
                            <Text>{title}</Text>
                          </Flex>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </GridItem>
            </Grid>

            <Flex gap={"20px"}>
              <Button
                px={"28px"}
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                py={"18px"}
                variant={"simple"}
                bgColor={"brand.grey200"}
              >
                Cancel
              </Button>
              <Button
                px={"28px"}
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                py={"18px"}
                color={"white"}
                variant={"simple"}
                bgColor={"brand.primary"}
                type="submit"
              >
                Save
              </Button>
            </Flex>
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
