import React from "react";
import { logo } from "../../assets";
import {
  Stack,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Checkbox,
  Button,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { doLogin } from "../../Redux/Auth/action";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const handleNavigate = () => {
    toast({
      title: "Login Successfull",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };
  const handleForm = (event) => {
    event.preventDefault();
    const formData = event.target;
    const email = formData.querySelector("#email").value;
    const password = formData.querySelector("#password").value;
    const rememberMe = formData.querySelector("#remember").checked;
    const data = {
      userName: email,
      password: password,
    };
    dispatch(doLogin(data, handleNavigate));
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Box>
        <Text fontSize={"36px"} fontWeight={"700"}>
          Admin Panel
        </Text>
      </Box>
      <Stack
        p={"2rem"}
        borderRadius={"xl"}
        my={"2rem"}
        boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      >
        <img
          src={logo}
          alt="logo"
          height={"100px"}
          width={"100px"}
          style={{ margin: "auto" }}
        />
        <Box my={"2rem"} textAlign={"center"}>
          <Text fontSize={"25px"} fontWeight={"600"}>
            Login
          </Text>
        </Box>
        <form onSubmit={handleForm}>
          <Stack gap={"1rem"}>
            <FormControl>
              <FormLabel color={"brand.primary"}>Email:</FormLabel>
              <Input
                type="text"
                placeholder={"email@example.com"}
                width={"352px"}
                id={"email"}
                value={"HMP"}
              />
            </FormControl>

            <InputGroup>
              <FormControl>
                <FormLabel color={"brand.primary"}>Password:</FormLabel>
                <Input
                  placeholder={"email@example.com"}
                  width={"352px"}
                  id={"password"}
                  type={show ? "text" : "password"}
                  value={"123456"}
                />
                <InputRightElement width="4.5rem" mt={"2rem"}>
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <EyeOff /> : <Eye />}
                  </Button>
                </InputRightElement>
              </FormControl>
            </InputGroup>

            <Checkbox id="remember">Remember me</Checkbox>

            <Button
              type="submit"
              color={"brand.background"}
              bgColor={"#D60024"}
              variant={"Simple"}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
