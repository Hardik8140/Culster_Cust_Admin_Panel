import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "lucide-react";

// eslint-disable-next-line react/prop-types
export const Breadcrumber = ({ links }) => {
  return (
    <Breadcrumb
      spacing="8px"
      color={"#D60024"}
      fontSize={"20px"}
      fontWeight={"500"}
      separator={<ChevronRightIcon color="#D60024" />}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {links.map((item, ind) => (
        <BreadcrumbItem key={ind}>
          <BreadcrumbLink
            fontWeight={!item.isCurrent && "700"}
            href={item.link}
            isCurrentPage={item.isCurrent}
            color={item.isCurrent && "black"}
          >
            {item.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
