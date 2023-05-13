import { useProductContext } from "@/contexts/ProductContext";
import { Text, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function ProductFeatures() {
  const { product } = useProductContext();

  return (
    <SimpleGrid columns={2} spacing={6}>
      {product?.features.map((feature, idx) => (
        <Stack key={idx} direction={"row"} spacing={5} align={"flex-start"}>
          <Icon
            as={FaExclamationCircle}
            color={"gray.500"}
            boxSize={6}
            mt={0.5}
          />
          <Text>
            <b>{feature.label}</b>: {feature.value}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  );
}
