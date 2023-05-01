import { ISeller } from "@/models/seller";
import { Box, Flex, HStack, Icon, StackDivider, Text } from "@chakra-ui/react";
import React from "react";
import { FaStopwatch, FaUserPlus } from "react-icons/fa";

type TProps = {
  seller: ISeller;
};

type TBoxRatingItemProps = {
  color: string;
  disabled?: boolean;
};

const BoxRatingItem = ({ color, disabled = false }: TBoxRatingItemProps) => (
  <Box
    bgColor={color}
    width={"100%"}
    height={disabled ? 3 : 4}
    opacity={disabled ? 0.2 : 1}
  />
);

export default function SellerRating({ seller }: TProps) {
  return (
    <Box>
      <Flex justify={"space-between"} gap={2} align={"center"} mb={4}>
        <BoxRatingItem color="red" disabled />
        <BoxRatingItem color="orange" disabled />
        <BoxRatingItem color="yellow" disabled />
        <BoxRatingItem color="lime" disabled />
        <BoxRatingItem color="green" />
      </Flex>

      <HStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        justify={"space-around"}
        height={"auto"}
        align={"flex-start"}
        textAlign={"center"}
      >
        <Box flexGrow={1}>
          <Text fontWeight={500} mb={2}>
            +5 mil
          </Text>
          <Text fontSize={12} color={"gray.500"}>
            Ventas en los últimos 60 días
          </Text>
        </Box>

        <Box flexGrow={1}>
          <Icon as={FaUserPlus} color={"gray.600"} boxSize={6} />
          <Text fontSize={12} color={"gray.500"}>
            Brinda buena atención
          </Text>
        </Box>

        <Box flexGrow={1}>
          <Icon as={FaStopwatch} color={"gray.600"} boxSize={6} mx={"auto"} />
          <Text fontSize={12} color={"gray.500"}>
            Despacha sus productos a tiempo
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
