import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import RatingOverview from "./RatingOverview";
import OpinionsList from "./OpinionsList";
import { useProductContext } from "@/contexts/ProductContext";

export default function OpinionsSection() {
  const { product } = useProductContext();

  return (
    <Flex gap={12}>
      <RatingOverview />

      <Box flex={1}>
        <Box width={"60%"}>
          <OpinionsList />
        </Box>
      </Box>
    </Flex>
  );
}
