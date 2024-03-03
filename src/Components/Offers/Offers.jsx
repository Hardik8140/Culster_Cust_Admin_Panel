import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import Layout from "../Layout/Layout";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { CustomTable } from "../CustomTable";
import { linkStyle } from "../../data";
const headings = [
  { title: "ID", isFunc: true },
  { title: "Offer Name", isFunc: false },
  { title: "Price", isFunc: true },
  { title: "Category", isFunc: false },
  { title: "Status", isFunc: true },
  { title: "Action", isFunc: false },
];

const values = [
  {
    id: "001",
    offerName: "1 Medium 2 topping",
    price: "$5.00",
    category: "Pickup Special No Speciality",
    status: "In stock",
  },
  {
    id: "002",
    offerName: "1 Large 2 topping",
    price: "$5.00",
    category: "Combo-No Speciality Pizza  Included",
    status: "Out of stock",
  },
];

export const Offers = () => {
  return (
    <Layout>
      <Box>
        <Text fontSize={"24px"} fontWeight={"700"}>
          Offers
        </Text>
        <Flex my={6} justifyContent={"space-between"}>
          <InputGroup bgColor={"white"} borderRadius={"10px"} w={"fit-content"}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon size={18} color="#949494" />
            </InputLeftElement>
            <Input type="search" placeholder="Search" id={"search"} />
          </InputGroup>
          <Button
            leftIcon={<AddIcon />}
            backgroundColor="brand.add"
            color="white"
            p="16px 20px"
            fontSize={"12px"}
            variant={"simpleWhite"}
          >
            <Link to="/offers/add" style={linkStyle}>
              Add New Offer
            </Link>
          </Button>
        </Flex>
      </Box>
      <Box>
        <CustomTable
          headings={headings}
          values={values}
          currentPage={"offers"}
        ></CustomTable>
      </Box>
    </Layout>
  );
};
