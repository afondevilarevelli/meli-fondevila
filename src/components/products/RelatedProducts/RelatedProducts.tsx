import { Box } from "@chakra-ui/react";
import React from "react";
import RelatedProductItem from "./RelatedProductItem";
import Caroussel from "@/components/UI/Caroussel";

export default function RelatedProducts() {
  return (
    <Box width={"2xl"} mx={"auto"}>
      <Caroussel
        slides={Array.from(Array(5).keys()).map(() => (
          <RelatedProductItem />
        ))}
        naturalSlideWidth={400}
        naturalSlideHeight={600}
        visibleSlides={3}
      />
    </Box>
  );
}
