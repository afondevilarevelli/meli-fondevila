import React from "react";
import BorderBox from "../../UI/BorderBox";
import { ISeller } from "@/models/seller";
import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaAward } from "react-icons/fa";
import SellerRating from "./SellerRating";

type TProps = {
  seller: ISeller;
};

export default function SellerInfo({ seller }: TProps) {
  return (
    <BorderBox>
      <Flex direction={"column"} gap={4}>
        <Text fontSize={"lg"} mb={6}>
          Información sobre el vendedor
        </Text>

        <Flex gap={2} align={"flex-start"}>
          <Icon as={FaAward} color={"green.400"} boxSize={5} mt={0.5} />

          <Flex direction={"column"} align={"flex-start"}>
            <Text as={"b"} color={"green.400"}>
              MercadoLíder Platinum
              <br />
            </Text>

            <Text fontSize={14} color={"gray.400"}>
              ¡Es uno de los mejores del sitio!
            </Text>
          </Flex>
        </Flex>

        <SellerRating seller={seller} />

        <Link as={NextLink} href={"/"} color={"blue.400"}>
          <Text fontSize={"sm"}>Ver más datos de este vendedor</Text>
        </Link>
      </Flex>
    </BorderBox>
  );
}
