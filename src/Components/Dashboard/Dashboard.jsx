import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { bill, circlewhite, userTick, dollor, ep_sell } from "../../assets";
import { ActiveOrders } from "./ActiveOrders";

const statics = [
  {
    title: "Today's Orders",
    Icon: bill,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: bill,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: userTick,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: dollor,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: ep_sell,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: bill,
    num: 30,
  },
  {
    title: "Today's Orders",
    Icon: bill,
    num: 30,
  },
];
export const Dashboard = () => {
  return (
    <Box pl={"14rem"} bgColor={"brand.background"}>
      <Text fontSize={"24px"} fontWeight={"700"}>
        Dashboard
      </Text>

      <Flex flexWrap={"wrap"} gap={"10px"}>
        {statics.map(({ title, Icon, num }, ind) => (
          <Box
            key={ind}
            minW={"260px"}
            borderRadius={"10px"}
            p={"25px"}
            bgColor={"brand.dashboard"}
            pos={"relative"}
          >
            <Text fontSize={"18px"} fontWeight={"600"}>
              {title}
            </Text>
            <Flex justifyContent={"space-between"}>
              <Text fontSize={"36px"} fontWeight={"700"}>
                {num}
              </Text>
              <Image
                src={circlewhite}
                alt={"icons"}
                pos={"absolute"}
                right={0}
                bottom={0}
              ></Image>
              <Image
                src={Icon}
                alt={"icons"}
                pos={"absolute"}
                right={2}
                bottom={2}
              />
            </Flex>
          </Box>
        ))}
      </Flex>

      <ActiveOrders />
    </Box>
  );
};
