import { IProduct } from "@/models/product";
import { Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaAward, FaBackward, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";

type TProps = {
  product: IProduct;
};

type TBuyInfoItemProps = {
  icon: IconType;
  label?: string;
  labelUrl?: string;
  description: string;
};

const BuyInfoItem = ({
  icon,
  label,
  labelUrl,
  description,
}: TBuyInfoItemProps) => {
  return (
    <Flex gap={4}>
      <Icon as={icon} color={"gray.500"} boxSize={4} mt={1.5} />

      <Text color={"gray.400"}>
        {label && (
          <Link as={NextLink} href={labelUrl} color={"blue.400"}>
            {label}
          </Link>
        )}
        {(label ? ". " : "") + description}
      </Text>
    </Flex>
  );
};

export default function BuyInfo({ product }: TProps) {
  return (
    <VStack spacing={4} align="stretch">
      <BuyInfoItem
        icon={FaBackward}
        label="Devolución gratis"
        labelUrl="/"
        description="Tenés 30 días desde que lo recibís."
      />
      <BuyInfoItem
        icon={FaShieldAlt}
        label="Compra protegida"
        labelUrl="/"
        description="Recibí el producto que esperabas o te devolvemos tu dinero."
      />
      <BuyInfoItem
        icon={FaTrophy}
        label="Mercado Puntos"
        labelUrl="/"
        description="Sumás 8422 puntos."
      />
      <BuyInfoItem
        icon={FaAward}
        description="12 meses de garantía de fábrica."
      />
    </VStack>
  );
}
