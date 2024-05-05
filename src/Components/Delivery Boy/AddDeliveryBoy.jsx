import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { Breadcrumber } from "../MenuItems/Breadcrumber/Breadcrumber";
import { Detail } from "../MenuItems/GridItems/Detail";
import { Image } from "../MenuItems/GridItems/Image";
import { FormButtons } from "../FormButtons";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";

const links = [
  {
    title: "Delivery Boy",
    link: "#",
    isCurrent: false,
  },
  {
    title: "Add New Driver",
    link: "#",
    isCurrent: true,
  },
];
export const AddDeliveryBoy = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const price = form.querySelector("#price");
    const description = form.querySelector("#description");
    const image = form.querySelector("#image");
    const drinkCan = form.querySelector("#checkbox_drinkCan");
    const finaldrinkCan = [];

    if (drinkCan.checked) {
      // get all values of drinkCan
      const drinkCanCheckbox = form.querySelectorAll(".checkbox_drinkCan");
      for (let i = 0; i < drinkCanCheckbox.length; i++) {
        if (drinkCanCheckbox[i].checked) {
          finaldrinkCan.push(drinkCanCheckbox[i].name);
        }
      }
    }
    const data = {
      name: name.value,
      price: +price.value,
      description: description.value,
      image: image ? image.src : "",
      drinkCan: finaldrinkCan,
    };

    console.log(data);
  };

  const inputRef = useRef();
  const [imagePrev, setImagePrev] = useState("");
  const handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    if (!fileObj) {
      return;
    }

    let formData = new FormData();
    formData.append("file", fileObj);
    formData.append("upload_preset", "rdy1h4fu");
    formData.append("cloud_name", "dpspgsvks");

    fetch("https://api.cloudinary.com/v1_1/dpspgsvks/image/upload", {
      method: "post",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        // updateUsersAvatar(data.url);
        setImagePrev(data.url);
      })
      .catch((err) => console.log(err));

    event.target.value = null;
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={links} />
        </Box>
        <DIV>
          <form onSubmit={handleForm}>
            <Grid my={8} w={"100%"} templateColumns="repeat(3, 1fr)" gap={1}>
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
                        Driver Boy Name{" "}
                      </Text>
                      <Input
                        w="100%"
                        type="text"
                        placeholder="Enter Mobile Number"
                        id="name"
                      />
                    </Stack>
                  </Flex>
                </Stack>
              </GridItem>
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
                        Mobile Number{" "}
                      </Text>
                      <Input
                        w="100%"
                        type="text"
                        placeholder="Enter Mobile Number"
                        id="name"
                      />
                    </Stack>
                  </Flex>
                </Stack>
              </GridItem>
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
                        Email Address{" "}
                      </Text>
                      <Input
                        type="text"
                        placeholder="Enter Email Address"
                        id="name"
                      />
                    </Stack>
                  </Flex>
                </Stack>
              </GridItem>
              <GridItem
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                px={"20px"}
                height={"100%"}
                py={"16px"}
                bgColor={"brand.white"}
              >
                <Flex justifyContent={"space-between"} height={"100%"} gap={7}>
                  <Stack gap={7}>
                    <Text>Driver Profile Picture</Text>
                    <Button
                      color={"brand.grey"}
                      border={"1px solid"}
                      borderColor={"brand.grey"}
                      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                      onClick={() => inputRef.current.click()}
                    >
                      <input
                        style={{ display: "none" }}
                        ref={inputRef}
                        type="file"
                        onChange={handleFileChange}
                      />
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
                    {imagePrev ? (
                      <img src={imagePrev} id="image" alt="preview image" />
                    ) : (
                      "Image Preview"
                    )}
                  </Flex>
                </Flex>{" "}
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
