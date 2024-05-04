import {
  Button,
  Flex,
  GridItem,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../Redux/MenuItems/action";

export const Image = ({
  itemValue,
  categoryId = "00000",
  name = "unknown",
  handleImageName,
}) => {
  const inputRef = useRef();
  const [imagePrev, setImagePrev] = useState(itemValue || "");
  const binRef = useRef("");
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    setImagePrev(itemValue);
  }, [itemValue]);
  const handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    if (!fileObj) {
      return;
    }
    const imageLocation = URL.createObjectURL(fileObj);
    setImagePrev(imageLocation);
    handleImageName(fileObj.name);
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      const binaryStr = reader.result.replace(
        /^data:image\/(png|jpg|jpeg);base64,/,
        ""
      );
      binRef.current = binaryStr;
    };
    // let formData = new FormData();
    // formData.append("file", fileObj);
    // formData.append("upload_preset", "rdy1h4fu");
    // formData.append("cloud_name", "dpspgsvks");

    // fetch("https://api.cloudinary.com/v1_1/dpspgsvks/image/upload", {
    //   method: "post",
    //   body: formData,
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     // updateUsersAvatar(data.url);
    //     setImagePrev(data.url);
    //   })
    //   .catch((err) => console.log(err));

    // event.target.value = null;
  };

  const handleNavigate = () => {
    toast({
      title: "Image uploaded successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  const handleUpload = () => {
    const final = {
      fileName: `${categoryId}/${name}`, // "'CategoryId'/name_of_oizza.png",
      imageData: binRef.current,
    };
    dispatch(uploadImage(final, handleNavigate));
  };
  return (
    <GridItem
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
      px={"20px"}
      height={"100%"}
      py={"16px"}
      bgColor={"brand.white"}
    >
      <Flex justifyContent={"space-between"} height={"100%"}>
        <Stack>
          <Text>Image</Text>
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
          maxH={"13rem"}
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
    </GridItem>
  );
};
