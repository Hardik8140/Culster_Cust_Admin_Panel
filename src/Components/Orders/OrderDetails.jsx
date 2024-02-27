import React, { useState } from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useDisclosure,
  useSteps,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { logo, updown } from "../../assets";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Progress } from "antd";

const steps = [
  { title: "First", description: "Order Accepted" },
  { title: "Second", description: "Order Preparing" },
  { title: "Third", description: "Delivery Boy Assign" },
  { title: "Fourth", description: "Order On The Way" },
  { title: "Fifth", description: "Order Delivered" },
];

const OrderDetails = () => {
  const [orderAccepted, setOrderAccepted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const { activeStep, setActiveStep } = useSteps({
  //     index: 1,
  //     count: steps.length,
  //   });
  const handleAcceptOrder = () => {
    setOrderAccepted(true);
  };

  const activeStep = orderAccepted ? 1 : 0;

  const activeStepText = steps[activeStep].description;

  const max = steps.length - 1;
  const progressPercent = (activeStep / max) * 100;

  //   const activeStepText = steps[activeStep].description;

  //   const max = steps.length - 1;
  //   const progressPercent = (activeStep / max) * 100;
  return (
    <Layout>
      <Box pl={8} pr={8} pt={4} w="68rem">
        <Breadcrumb
          pb={4}
          spacing="8px"
          separator={<ChevronRightIcon color="brand.primary" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="brand.primary">
              Orders
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Order Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={4}
          //   border="1px solid red"
        >
          <Text fontSize="2rem" fontWeight="bold">
            #0002
          </Text>

          <Box
            // border="1px solid red"
            w="18%"
            display="flex"
            justifyContent="space-between"
          >
            <Button bg="brand.add" color="white">
              Accept
            </Button>
            <Button bg="brand.primary" color="white">
              Reject
            </Button>
          </Box>
        </Box> */}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pb={4}
          //   border="1px solid red"
        >
          <Text fontSize="2rem" fontWeight="bold">
            #0002
          </Text>

          {orderAccepted ? (
            <Box
              //   border="1px solid red"
              w="30%"
              display="flex"
              justifyContent="space-between"
            >
              <Button bg="lightgray">Print Recipe</Button>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="brand.add"
                  color="white"
                  rightIcon={<ChevronDownIcon />}
                >
                  Order Preparing
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={onOpen}>Assign Order</MenuItem>
                  <MenuItem>On the Way</MenuItem>
                </MenuList>
              </Menu>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

                  <ModalFooter></ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          ) : (
            <Box
              // border="1px solid red"
              w="18%"
              display="flex"
              justifyContent="space-between"
            >
              <Button bg="brand.add" color="white" onClick={handleAcceptOrder}>
                Accept
              </Button>
              <Button bg="brand.primary" color="white">
                Reject
              </Button>
            </Box>
          )}
        </Box>

        <Box display="flex" gap="10px">
          <Box w="70%">
            <Box bg="white" p={2} mb={2} borderRadius={6}>
              <Text fontWeight="bold" pb={4}>
                Customers Details
              </Text>

              <Grid templateColumns="repeat(2, 1fr)">
                <GridItem color="gray">Customer Name : Hardik Gajera</GridItem>
                <GridItem color="gray">
                  Customer Name : example@example.com
                </GridItem>
                <GridItem color="gray">Mobile Number : xxxxxxxxxx</GridItem>
                <GridItem color="gray">Address : xxxxxxxxxx</GridItem>
              </Grid>
            </Box>

            <Box
              bg="white"
              borderRadius={6}
              p={4}
              display="flex"
              alignItems="center"
            >
              <Image src={logo} pr={4} />
              <Text fontWeight="bold">Culture Crust Pizza- Toronto,MH5</Text>
            </Box>
            {/* order details */}
            <DIV>
              <table>
                <thead
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={{ display: "flex", gap: "20px", fontSize: "12px" }}
                    >
                      <Image src={logo} />
                      <Box>
                        <Text>BBQ- chicken & bacon cheddar melt</Text>
                        <Box display="flex">
                          <Text>Regular Topping : </Text>
                          <Text>Mushrooms, Green Peppier, Onion</Text>
                        </Box>
                        <Box display="flex">
                          <Text>Extra Topping : </Text>
                          <Text>
                            Baby Corns (Left Half) Sweet Corns(Right Half)
                          </Text>
                        </Box>
                      </Box>
                    </td>
                    <td>2</td>
                    <td>$ 8.00</td>
                    <td>$ 16.00</td>
                  </tr>
                  <tr>
                    <td
                      style={{ display: "flex", gap: "20px", fontSize: "12px" }}
                    >
                      <Image src={logo} />
                      <Box>
                        <Text>BBQ- chicken & bacon cheddar melt</Text>
                        <Box display="flex">
                          <Text>Regular Topping : </Text>
                          <Text>Mushrooms, Green Peppier, Onion</Text>
                        </Box>
                        <Box display="flex">
                          <Text>Extra Topping : </Text>
                          <Text>
                            Baby Corns (Left Half) Sweet Corns(Right Half)
                          </Text>
                        </Box>
                      </Box>
                    </td>
                    <td>2</td>
                    <td>$ 8.00</td>
                    <td>$ 16.00</td>
                  </tr>
                </tbody>
              </table>
            </DIV>
            <Box>
              <Text>Special Instruction</Text>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quisquam non nisi dicta alias. Eum excepturi dolorem voluptatem,
                quia iste repudiandae? Commodi magnam deleniti esse vel dolorum
                dolores ipsam obcaecati?
              </Text>
            </Box>
          </Box>

          <Box w="30%">
            <Box backgroundColor="white" borderRadius={6} p={4}>
              <Text>Heading</Text>

              <Stepper
                size="xs"
                orientation="vertical"
                index={activeStep}
                gap="0"
              >
                {steps.map((step, index) => (
                  <Step key={index} alignItems="center" gap="0">
                    <StepIndicator bg="white">
                      <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    <Text pl={3}>{step.description}</Text>
                    {index < steps.length - 1 && (
                      <StepSeparator borderColor="gray" />
                    )}
                  </Step>
                ))}
              </Stepper>
              {/* <Progress value={progressPercent} size="small" /> */}
            </Box>

            <Box bg="white" p={4} mt={4} borderRadius={6}>
              <Text fontWeight="bold" pb={4}>
                Payment Details
              </Text>

              <Box pb={4}>
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize="14px">Subtotal</Text>
                  <Text fontSize="14px">$ 27.00</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize="14px">HST</Text>
                  <Text fontSize="14px">$ 4.00</Text>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize="14px">Delivery Charge</Text>
                  <Text fontSize="14px">$ 2.00</Text>
                </Box>
              </Box>

              <Divider variant="dashed" colorScheme="dark" />

              <Box pt={3}>
                <Box display="flex" justifyContent="space-between">
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">$29.00</Text>
                </Box>
                <Box display="flex" justifyContent="space-between" color="gray">
                  <Text fontSize="14px">Payment Mode</Text>
                  <Text fontSize="14px">Debit Card</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default OrderDetails;

const DIV = styled.div`
  /* width: 70%; */
  table {
    border-collapse: separate;
    border-spacing: 0 0.3em;
  }

  thead > tr > th,
  tbody > tr > td {
    padding: 22px;
  }
  tbody > tr > td {
    /* display: flex; */
    gap: 20px;
  }
  thead > tr {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  tbody > tr {
    background-color: white;
  }
`;
