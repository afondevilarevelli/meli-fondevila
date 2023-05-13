import React from "react";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import {
  ALL_RATINGS_VALUES,
  getAverageRating,
  getRatingNumber,
} from "@/lib/utils";
import { Rating } from "react-simple-star-rating";
import { FaStar } from "react-icons/fa";
import { useProductContext } from "@/contexts/ProductContext";

export default function RatingOverview() {
  const { product } = useProductContext();

  const theme = useTheme();

  const allRatingsAsNumber = product?.opinions.map((op) =>
    getRatingNumber(op.rating)
  );

  return (
    <Stack>
      <HStack spacing={4}>
        <Text fontSize={"6xl"} color={"blue.500"} fontWeight={500}>
          {getAverageRating(product!)}
        </Text>

        <VStack spacing={0} align={"flex-start"}>
          <Rating
            readonly={true}
            allowFraction
            initialValue={getAverageRating(product!)}
            emptyStyle={{ display: "flex" }}
            fillStyle={{ display: "-webkit-inline-box" }}
            size={24}
            fillColor={theme.colors.blue[400]}
          />
          <Text fontSize={12} ml={6} color={"gray.500"}>
            ({product?.opinions.length} calificaciones)
          </Text>
        </VStack>
      </HStack>

      {ALL_RATINGS_VALUES.map((val, idx) => {
        const amount = allRatingsAsNumber?.filter((n) => n == val).length;
        return (
          <Flex key={idx} align={"center"} gap={4}>
            <Box
              height={1}
              bgColor={"gray.400"}
              flex={1}
              borderRadius={99}
              position={"relative"}
              _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                borderRadius: 99,
                height: 1,
                width: `${
                  (amount || 0 / (allRatingsAsNumber?.length || 1)) * 100
                }%`,
                zIndex: 2,
                bgColor: "gray.600",
              }}
            ></Box>
            <Text fontSize={14} color={"gray.400"}>
              {val} <Icon as={FaStar} />
            </Text>
          </Flex>
        );
      })}
    </Stack>
  );
}
