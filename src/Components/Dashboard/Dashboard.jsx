import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { bill, circlewhite, userTick, dollor, ep_sell } from "../../assets";
import { ActiveOrders } from "./ActiveOrders";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_Dashboard } from "../../Redux/Dashboard/action";

const statics = [
  {
    title: "Today's Orders",
    Icon: bill,
    property: "todayOrdersCount",
  },
  {
    title: "Monthly Orders",
    Icon: bill,
    property: "monthlyOrdersCount",
  },
  {
    title: "Total Users",
    Icon: userTick,
    property: "totalUsersCount",
  },
  {
    title: "Total Earnings",
    Icon: dollor,
    property: "totalEarningsCount",
  },
  {
    title: "Total Selling",
    Icon: ep_sell,
    property: "totalSellingCount",
  },
];

export const Dashboard = () => {
  const { loading, error, dashboard } = useSelector(
    (store) => store.dashboardReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_Dashboard());
  }, [dispatch]);
  return (
    <Layout>
      <Box>
        <Text fontSize={"24px"} fontWeight={"700"}>
          Dashboard
        </Text>

        <Flex flexWrap={"wrap"} my={8} gap={"10px"}>
          <Box
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              Today's Orders
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {dashboard.todayOrderCount}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={bill}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
          <Box
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              Monthly Orders
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {dashboard.monthlyOrderCount}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={bill}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
          <Box
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              Total Users{" "}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {dashboard.totalUsers}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={userTick}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
          <Box
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              Total Earnings{" "}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {dashboard.totalEarnings}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={dollor}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
          <Box
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              Total Selling{" "}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {dashboard.totalSelling}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={ep_sell}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
        </Flex>

        <ActiveOrders />
      </Box>
    </Layout>
  );
};
