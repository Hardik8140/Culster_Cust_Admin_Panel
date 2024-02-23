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
  Textarea,
  Flex,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ChevronRightIcon, DollarSignIcon, Upload } from "lucide-react";
import Layout from "../Layout/Layout";
import { Select } from "antd";
import styled from "styled-components";
import style from "./AddNewPIzza.module.css";
import { dollar } from "../../assets";
const crust = [
  {
    title: "Regular",
  },
  {
    title: "Thick",
  },
  {
    title: "Crispy Ultra Thin",
  },
  {
    title: "Thin",
  },
];

const size = [
  {
    title: "Medium (12 inches)",
  },

  {
    title: "Large (14 inches)",
  },
  {
    title: "Extra Large (16 inches)",
  },
  {
    title: "Party Size (15 x 21 inches)",
  },
];

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

const flovor = [
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
  return (
    <Layout>
      <Box bgColor={"brand.dashboard"} width={"80vw"}>
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
          <Grid my={8} w={"100%"} templateColumns="repeat(2, 1fr)" gap={1}>
            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Text fontWeight={"400"}>Select Type</Text>
                <Select placeholder="Select Type" size="lg">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Stack>
            </GridItem>
            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Text>Name</Text>
                <Input type="text" placeholder="Enter Name" />
              </Stack>
            </GridItem>
            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Text>Description</Text>
                <Textarea
                  rows={5}
                  type="text"
                  placeholder="Enter the description"
                />
              </Stack>
            </GridItem>
            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Flex justifyContent={"space-between"} height={"100%"}>
                <Stack>
                  <Text>Image</Text>
                  <Button
                    color={"brand.grey"}
                    border={"1px solid"}
                    borderColor={"brand.grey"}
                    boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                  >
                    <Upload size={16} />
                    <Text ml={2} fontSize={"14px"} fontWeight={"600"}>
                      Upload Image
                    </Text>
                  </Button>
                </Stack>
                <Flex
                  justifyContent={"center"}
                  color={"brand.grey"}
                  bgColor={"brand.grey100"}
                  width={"60%"}
                  alignItems={"center"}
                >
                  Image Preview
                </Flex>
              </Flex>
            </GridItem>

            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"}>SIZE</Text>
                  <div className="container">
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label className="switch" for="checkbox">
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
                  {size.map(({ title }, ind) => (
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

            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"}>CRUST</Text>
                  <div className="container">
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label className="switch" for="checkbox">
                      <span className="slider"></span>
                    </label>
                  </div>
                </Flex>
                <hr />
                <Text color={"brand.grey"}>Select Crust</Text>
                <Stack gap={4} my={2}>
                  {crust.map(({ title }, ind) => (
                    <Flex key={ind} alignItems={"center"} gap={2}>
                      <Box>
                        <label className={style.customCheckbox}>
                          <input name="dummy" type="checkbox" />
                          <span className={style.checkmark}></span>
                        </label>
                      </Box>
                      <Text>{title}</Text>
                    </Flex>
                  ))}
                </Stack>
              </Stack>
            </GridItem>

            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"}>PANEER/CHICKEN</Text>
                  <div className="container">
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label className="switch" for="checkbox">
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

            <GridItem px={"20px"} py={"16px"} bgColor={"brand.white"}>
              <Stack>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"500"}>EXTRA CHEESE</Text>
                  <div className="container">
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label className="switch" for="checkbox">
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
          </Grid>
        </DIV>
      </Box>
    </Layout>
  );
};
let DIV = styled.div`
  /* The switch - the box around the slider */
  .container {
    width: 41px;
    height: 21px;
    position: relative;
  }

  /* Hide default HTML checkbox */
  .checkbox {
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

  .checkbox:checked + .switch .slider {
    left: calc(50% - 20px / 2 + 10px);
    top: calc(50% - 19px / 2);
  }
`;
