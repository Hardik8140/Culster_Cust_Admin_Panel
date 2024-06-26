import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "lucide-react";
import { linkStyle } from "../../../data";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Breadcrumber = ({ links }) => {
  const navigate = useNavigate();
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
            // href={item.link}
            onClick={() => navigate(item.link)}
            isCurrentPage={item.isCurrent}
            style={linkStyle}
            color={item.isCurrent && "brand.black !important"}
          >
            {item.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
