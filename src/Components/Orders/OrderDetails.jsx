import React, { useEffect, useState } from "react";
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
  Select,
  Step,
  Progress,
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { accept_Orders, get_Details_Orders } from "../../Redux/Orders/action";
import { array } from "i/lib/util";
import {
  assign_delivery_boy,
  get_delivery_boy,
} from "../../Redux/Delivery Boy/action";
import Cookies from "js-cookie";

const TotalSteps = [
  { title: "First", description: "Order Accepted" },
  { title: "Second", description: "Order Preparing" },
  { title: "Third", description: "Delivery Boy Assign" },
  { title: "Fourth", description: "Order On The Way" },
  { title: "Fifth", description: "Order Delivered" },
];

const OrderDetails = () => {
  const [orderAccepted, setOrderAccepted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const [delivery, setDelivery] = useState("");
  const dispatch = useDispatch();
  const naivgate = useNavigate();
  const { loading, error, detailOrders, orderStatus } = useSelector(
    (store) => store.orderReducer
  );
  const { delivery_boy, assign_boy } = useSelector(
    (store) => store.delivery_boyReducer
  );

  useEffect(() => {
    dispatch(get_Details_Orders(id));
    dispatch(get_delivery_boy());
  }, [dispatch, id]);

  const handleAcceptOrder = (id, status, e) => {
    e.preventDefault();
    console.log(status);
    dispatch(accept_Orders(id, status));
    setOrderAccepted(true);
    Cookies.set(`orderStatus_${id}`, orderStatus);
  };

  useEffect(() => {
    const newOrderStatus = Cookies.get(`orderStatus_${id}`);
    setOrderAccepted(newOrderStatus);
    console.log(newOrderStatus);
  }, [id, orderStatus]);

  const handleAssign = () => {
    dispatch(assign_delivery_boy(delivery, id));
    onClose();
  };

  // console.log(orderStatus.success);

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: TotalSteps.length,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (orderAccepted) {
        if (activeStep < TotalSteps.length - 1) {
          setActiveStep((prevStep) => prevStep + 1);
        }
      }
    }, 12000); // 2 minutes interval
    return () => clearInterval(timer);
  }, [activeStep, orderAccepted, setActiveStep]);
  const activeStepText = TotalSteps[activeStep].description;

  const max = TotalSteps.length - 1;
  const progressPercent = (activeStep / (TotalSteps.length - 1)) * 100;

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

        {Array.isArray(detailOrders) &&
          detailOrders.map((el, i) => (
            <Box key={i}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pb={4}
                //   border="1px solid red"
              >
                <Text fontSize="2rem" fontWeight="bold">
                  # {el.orderId}
                </Text>

                {!orderAccepted ? (
                  <Box
                    // border="1px solid red"
                    w="18%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Button
                      bg="brand.add"
                      color="white"
                      onClick={(e) =>
                        handleAcceptOrder(el.orderId, "ACCEPTED", e)
                      }
                    >
                      Accept
                    </Button>
                    <Button
                      bg="brand.primary"
                      color="white"
                      onClick={(e) =>
                        handleAcceptOrder(el.orderId, "REJECTED", e)
                      }
                    >
                      Reject
                    </Button>
                  </Box>
                ) : (
                  <Box
                    //   border="1px solid red"
                    w="30%"
                    display="flex"
                    justifyContent="space-between"
                    position={"relative"}
                    zIndex={1111}
                  >
                    <Button
                      bg="lightgray"
                      onClick={naivgate(`/orders/${el.orderId}/print`)}
                    >
                      Print Recipe
                    </Button>
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
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text
                            textAlign={"center"}
                            fontSize={"20px"}
                            fontWeight={700}
                          >
                            Assign Delivery Boy
                          </Text>
                          <Text>Select Delivery Boy </Text>
                          <Select onChange={(e) => setDelivery(e.target.value)}>
                            <option>Select Delivery Boy</option>
                            {Array.isArray(delivery_boy) &&
                              delivery_boy.map((el, i) => (
                                <option key={i} value={el.id}>
                                  {el.name}
                                </option>
                              ))}
                          </Select>
                        </ModalBody>

                        <ModalFooter
                          display={"flex"}
                          justifyContent={"center"}
                          gap={3}
                        >
                          <Button
                            bg={"none"}
                            border={"3px solid #D60024"}
                            borderRadius={"10px"}
                            color={"#D60024"}
                            _hover={{ bg: "none" }}
                          >
                            Cancel
                          </Button>
                          <Button
                            bg={"#D60024"}
                            border={"none"}
                            borderRadius={"10px"}
                            color={"#FFF"}
                            _hover={{ bg: "#D60024" }}
                            onClick={handleAssign}
                          >
                            Assign
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
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
                      <GridItem color="gray">
                        Customer Name : &nbsp;
                        {`${el.user.firstName} ${el.user.lastName}`}
                      </GridItem>
                      <GridItem color="gray">
                        Customer Name : {el.user.email}
                      </GridItem>
                      <GridItem color="gray">
                        Mobile Number : {el.user.mobileNumber}
                      </GridItem>
                      <GridItem color="gray">
                        Address :{" "}
                        {`${el.user.houseNoOfAddress} ${el.user.areaOfAddress} ${el.user.address} ${el.user.landmarkAddress}`}
                      </GridItem>
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
                    <Text fontWeight="bold">
                      Culture Crust Pizza- Toronto,MH5
                    </Text>
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
                        {el.orderDetail.map((order, i) => (
                          <tr key={i}>
                            <td
                              style={{
                                display: "flex",
                                gap: "20px",
                                fontSize: "12px",
                              }}
                            >
                              <div style={{ height: "100px", width: "20%" }}>
                                <Image
                                  src={order.image}
                                  alt="order"
                                  w={"100%"}
                                  h={"100%"}
                                  borderRadius={"10px"}
                                  objectFit={"cover"}
                                />
                              </div>
                              <Box flex="1">
                                <Text fontWeight={"bold"} fontSize={"16px"}>
                                  {order.title}
                                </Text>
                                <Box
                                  display="grid"
                                  gridTemplateColumns={
                                    "repeat(auto-fit, minmax(140px, 1fr))"
                                  }
                                  whiteSpace={"wrap"}
                                >
                                  <Text>Regular Topping :</Text>
                                  <Text whiteSpace={"wrap"}>
                                    {order.regularToppings}
                                  </Text>
                                  <Text>Extra Topping :</Text>
                                  <Text whiteSpace={"wrap"}>
                                    {order.extraToppings}
                                  </Text>
                                </Box>
                              </Box>
                            </td>
                            <td>{order.qty}</td>
                            <td style={{ textWrap: "nowrap" }}>
                              $ {order.price}
                            </td>
                            <td style={{ textWrap: "nowrap" }}>
                              $ {order.totalPrice}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </DIV>
                  <Box>
                    <Text>Special Instruction</Text>
                    {el.orderDetail.map((spec) => (
                      <Text key={i}>{spec.specialInstructions}</Text>
                    ))}
                  </Box>
                </Box>

                <Box w="30%">
                  <Box
                    backgroundColor="white"
                    borderRadius={6}
                    p={4}
                    position="relative"
                    zIndex={111}
                  >
                    <Text>History</Text>

                    <Box backgroundColor="white" borderRadius={6} p={4}>
                      <Stepper
                        index={activeStep}
                        orientation="vertical"
                        height="150px"
                        gap="0"
                      >
                        {TotalSteps.map((step, index) => (
                          <Step
                            key={index}
                            textAlign="center"
                            zIndex={1}
                            border="none"
                          >
                            <StepIndicator
                              bg={index < activeStep ? "green" : "gray"}
                              width="17px"
                              height="17px"
                              border="none"
                            >
                              <StepStatus
                                complete={
                                  <Box
                                    bgColor={"green"}
                                    p={2}
                                    w={"inherit"}
                                    rounded={"full"}
                                  ></Box>
                                }
                              />
                            </StepIndicator>

                            <Text fontSize="16px">{step.description}</Text>
                          </Step>
                        ))}
                      </Stepper>
                      {/* <Stepper
                        index={activeStep}
                        orientation="vertical"
                        height="150px"
                        gap="0"
                      >
                        {TotalSteps.map((step, index) => (
                          <Step
                            key={index}
                            textAlign="center"
                            zIndex={1}
                            border="none"
                          >
                            <StepIndicator bg={"grey"}>
                              <StepStatus
                                complete={
                                  <Box bgColor={"red"}>
                                    <StepIcon />
                                  </Box>
                                }
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                              />
                            </StepIndicator>

                            <Box flexShrink="0">
                              <Text fontSize="16px">{step.description}</Text>
                            </Box>

                            <StepSeparator />
                          </Step>
                        ))}
                      </Stepper> */}
                    </Box>
                    <Progress
                      orientation="vertical"
                      height="130px"
                      value={progressPercent}
                      position="absolute"
                      bg={activeStep ? "gray" : "green"}
                      border="1px solid gray"
                      width="2px"
                      top="60px"
                      left="2.45em"
                      zIndex={0}
                    />
                    {/* <Progress value={progressPercent} size="small" /> */}
                  </Box>

                  <Box bg="white" p={4} mt={4} borderRadius={6}>
                    <Text fontWeight="bold" pb={4}>
                      Payment Details
                    </Text>

                    <Box pb={4}>
                      <Box display="flex" justifyContent="space-between">
                        <Text fontSize="14px">Subtotal</Text>
                        <Text fontSize="14px">
                          $ {el.itemsAmounts.subtotal}
                        </Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Text fontSize="14px">HST</Text>
                        <Text fontSize="14px">$ {el.itemsAmounts.hst}</Text>
                      </Box>
                      <Box display="flex" justifyContent="space-between">
                        <Text fontSize="14px">Delivery Charge</Text>
                        <Text fontSize="14px">
                          $ {el.itemsAmounts.deliveryCharge}
                        </Text>
                      </Box>
                    </Box>

                    <Divider variant="dashed" colorScheme="dark" />

                    <Box pt={3}>
                      <Box display="flex" justifyContent="space-between">
                        <Text fontWeight="bold">Total</Text>
                        <Text fontWeight="bold">$ {el.itemsAmounts.total}</Text>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        color="gray"
                      >
                        <Text fontSize="14px">Payment Mode</Text>
                        <Text fontSize="14px">
                          {el.itemsAmounts.paymentMode}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
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
