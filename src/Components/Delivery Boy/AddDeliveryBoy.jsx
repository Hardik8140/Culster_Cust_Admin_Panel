import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { Breadcrumber } from "../MenuItems/Breadcrumber/Breadcrumber";
import { Detail } from "../MenuItems/GridItems/Detail";
import { Image } from "../MenuItems/GridItems/Image";
import { FormButtons } from "../FormButtons";
import { useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewDeliveryBoy,
  updateDeliveryBoy,
} from "../../Redux/Delivery Boy/action";
import { uploadImage } from "../../Redux/MenuItems/action";

const links = [
  {
    title: "Delivery Boy",
    link: "/boy",
    isCurrent: false,
  },
  {
    title: "Add New Driver",
    link: "#",
    isCurrent: true,
  },
];
export const AddDeliveryBoy = () => {
  const inputRef = useRef();
  const [imagePrev, setImagePrev] = useState("");
  const [imgName, setImgName] = useState("");
  const toast = useToast();
  const { boyParam } = useParams();
  const binRef = useRef("");
  const [link, setLink] = useState(links);
  const { delivery_boy } = useSelector((store) => store.delivery_boyReducer);
  const dispatch = useDispatch();
  const [boyData, setBoyData] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
    image: "",
  });

  const navigate = useNavigate();
  const handleError = (msg) => {
    toast({
      title: msg,
      duration: 5000,
      isClosable: true,
      status: "error",
    });
  };
  const handleNavigate = () => {
    toast({
      title: "Driver Added Successfully",
      duration: 5000,
      isClosable: true,
      status: "success",
    });
    navigate("/boy");
  };
  const handleImgName = (name) => {
    setImgName(name);
  };

  useEffect(() => {
    if (boyParam && delivery_boy.length > 0) {
      let current = delivery_boy.filter((item) => item.id === +boyParam);
      current = current[0];
      setBoyData(current);
      setImagePrev(current["profileUrl"]);
      const updated = links.map((item) => {
        if (item["title"] === "Add New Driver") {
          return {
            title: "Edit Driver",
            link: "#",
            isCurrent: true,
          };
        }
        return item;
      });
      setLink(updated);
    }
  }, [boyParam]);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("#name");
    const email = form.querySelector("#emailAddress");
    const phoneNumber = form.querySelector("#phoneNumber");
    const image = form.querySelector("#image");

    if (!name.value) {
      handleError("please enter driver name");
      return;
    }
    if (!email.value) {
      handleError("please enter driver email");
      return;
    }
    if (!phoneNumber.value) {
      handleError("please enter driver phone number");
      return;
    }
    let data = {
      username: name.value,
      email: email.value,
      mobilenumber: phoneNumber.value,
    };
    if (imgName) {
      data = {
        ...data,
        image: "delivery/" + imgName,
      };
    }

    // console.log(data);
    if (boyParam) {
      data = {
        ...data,
        userId: +boyParam,
      };
      dispatch(updateDeliveryBoy(data, +boyParam, handleNavigate));
    } else {
      dispatch(addNewDeliveryBoy(data, handleNavigate));
    }
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    if (!fileObj) {
      return;
    }
    const imageLocation = URL.createObjectURL(fileObj);
    setImagePrev(imageLocation);
    handleImgName(fileObj.name);
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      const binaryStr = reader.result.replace(
        /^data:image\/(png|jpg|jpeg);base64,/,
        ""
      );
      binRef.current = binaryStr;
    };
  };
  const handleMessage = () => {
    toast({
      title: "Image Uploaded Successfully",
      duration: 5000,
      isClosable: true,
      status: "success",
    });
  };
  const handleUpload = () => {
    const final = {
      fileName: `delivery/${imgName}`,
      imageData: binRef.current,
    };
    dispatch(uploadImage(final, handleMessage));
  };
  return (
    <Layout>
      <Box>
        <Box>
          <Breadcrumber links={link} />
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
                    <Stack w={"100%"}>
                      <Text size={"18px"} fontWeight={"500"}>
                        Driver Boy Name{" "}
                      </Text>
                      <Input
                        width="100%"
                        type="text"
                        placeholder="Enter the driver name"
                        id="name"
                        value={boyData?.name}
                        onChange={(event) =>
                          setBoyData({ ...boyData, name: event.target.value })
                        }
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
                    <Stack w={"100%"}>
                      <Text size={"18px"} fontWeight={"500"}>
                        Mobile Number{" "}
                      </Text>
                      <Input
                        w="100%"
                        type="text"
                        placeholder="Enter Mobile Number"
                        id="phoneNumber"
                        value={boyData?.phoneNumber}
                        onChange={(event) =>
                          setBoyData({
                            ...boyData,
                            phoneNumber: event.target.value,
                          })
                        }
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
                    <Stack w={"100%"}>
                      <Text size={"18px"} fontWeight={"500"}>
                        Email Address
                      </Text>
                      <Input
                        type="text"
                        placeholder="Enter Email Address"
                        id="emailAddress"
                        value={boyData?.emailAddress}
                        onChange={(event) =>
                          setBoyData({
                            ...boyData,
                            emailAddress: event.target.value,
                          })
                        }
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
                <Flex justifyContent={"space-between"} height={"100%"}>
                  <Stack>
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
                    <Button
                      mt={4}
                      color={"brand.grey"}
                      border={"1px solid"}
                      w={"fit-content"}
                      borderColor={"brand.grey"}
                      onClick={handleUpload}
                      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
                    >
                      Save
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
                      <img
                        src={imagePrev}
                        id="image"
                        style={{ maxHeight: "inherit" }}
                        alt="preview image"
                      />
                    ) : (
                      "Image Preview"
                    )}
                  </Flex>
                </Flex>
                {/* <Flex justifyContent={"space-between"} height={"100%"} gap={7}>
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
                </Flex> */}
              </GridItem>
            </Grid>
            <FormButtons canceling="/boy" />
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
