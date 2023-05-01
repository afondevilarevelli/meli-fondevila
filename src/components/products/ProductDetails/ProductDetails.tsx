import { IProduct } from "@/models/product";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductImagesCaroussel from "./ProductImagesCaroussel";
import ProductBasicInfo from "./ProductBasicInfo";

type TProps = {
  product: IProduct;
};

export default function ProductDetails({ product }: TProps) {
  return (
    <Flex>
      <Box width={"55%"}>
        <ProductImagesCaroussel product={product} />
      </Box>
      <Box flex={1} py={4}>
        <ProductBasicInfo product={product} />
      </Box>
    </Flex>
  );
}
