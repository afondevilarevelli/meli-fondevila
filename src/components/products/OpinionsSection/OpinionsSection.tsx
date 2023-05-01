import { IProduct } from "@/models/product";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RatingOverview from "./RatingOverview";
import OpinionsList from "./OpinionsList";

type TProps = {
  product: IProduct;
};

export default function OpinionsSection({ product }: TProps) {
  return (
    <Flex gap={12}>
      <RatingOverview product={product} />

      <Box flex={1}>
        <Box width={"60%"}>
          <OpinionsList product={product} />
        </Box>
      </Box>
    </Flex>
  );
}
