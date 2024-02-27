import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#D60024",
      add: "#08671A",
      background: "#F8F8F8",
      orderbg: "#F3F3F3",
      dashboard: "#E9E9E9",
      stock: "#40A711",
      outofstok: "#40A711",
      textColor: "#424242",
      buttonbg: "#DCDCDC",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#919191",
      grey100: "#F0F0F0",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  components: {
    Button: {
      variants: {
        Simple: (props) => ({
          rounded: "lg",
          color: mode("brand.background", "brand.orderbg")(props),
        }),
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
