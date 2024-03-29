import { Button, Flex, GridItem, Stack, Text } from "@chakra-ui/react";
import { Upload } from "lucide-react";
import { useRef, useState } from "react";

export const Image = () => {
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
      </Flex>
    </GridItem>
  );
};
