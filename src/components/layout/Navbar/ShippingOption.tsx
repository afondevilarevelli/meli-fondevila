import { Icon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

type TProps = {
  place: string;
};

export default function ShippingOption({ place }: TProps) {
  return (
    <Flex
      alignItems={"center"}
      gap={2}
      sx={{ userSelect: "none", transition: "transform .2s ease-in" }}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.02)",
        transition: "transform .2s ease-in",
      }}
    >
      <Icon as={FaMapMarkerAlt} />

      <div>
        <Text as="i" fontSize={"xs"}>
          Enviar a
        </Text>
        <Text fontSize={"sm"}>{place}</Text>
      </div>
    </Flex>
  );
}
