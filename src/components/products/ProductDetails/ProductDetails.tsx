import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductImagesCaroussel from "./ProductImagesCaroussel";
import ProductBasicInfo from "./ProductBasicInfo";

export default function ProductDetails() {
  return (
    <Flex>
      <Box width={"55%"}>
        <ProductImagesCaroussel />
      </Box>
      <Box flex={1} py={4}>
        <ProductBasicInfo />
      </Box>
    </Flex>
  );
}
