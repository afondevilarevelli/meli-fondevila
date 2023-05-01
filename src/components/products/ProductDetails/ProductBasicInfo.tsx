import { formatPrice, getAverageRating } from "@/lib/utils";
import { IProduct } from "@/models/product";
import {
  Badge,
  Flex,
  Icon,
  Link,
  ListItem,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  UnorderedList,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";
import NextLink from "next/link";

type TProps = {
  product: IProduct;
};

export default function ProductBasicInfo({ product }: TProps) {
  const theme = useTheme();
  return (
    <Flex direction={"column"} gap={1}>
      <Flex justify={"space-between"} align={"center"}>
        <Text fontSize={14} color={"gray.400"}>
          Nuevo | +5mil vendidos
        </Text>

        <Icon
          as={FiHeart}
          boxSize={6}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "blue.600" }}
        />
      </Flex>

      <Text fontWeight={500} fontSize={"2xl"}>
        {product.name}
      </Text>

      <Flex align={"center"} gap={2} cursor={"pointer"}>
        <Rating
          onClick={() => {}}
          readonly={true}
          allowFraction
          initialValue={getAverageRating(product)}
          emptyStyle={{ display: "flex" }}
          fillStyle={{ display: "-webkit-inline-box" }}
          size={24}
          fillColor={theme.colors.blue[400]}
        />
        <Text fontSize={14} color={"blue.400"}>
          ({product.opinions.length})
        </Text>
      </Flex>

      <Badge bgColor={"blue.500"} color={"white"} width={"fit-content"} mt={2}>
        Ahora 12
      </Badge>

      <Stat mt={2}>
        <StatNumber fontSize={"4xl"} fontWeight={400}>
          $ {formatPrice(product.price)}
        </StatNumber>
        <StatHelpText fontSize={"md"}>
          en 12x $ {formatPrice(product.price / 12)}
        </StatHelpText>
      </Stat>

      <Link href="/" as={NextLink} color={"blue.300"} fontSize={"sm"}>
        Ver los medios de pago
      </Link>

      <Text fontWeight={500} mt={8} mb={4} fontSize={14}>
        Lo que tenés que saber del producto:
      </Text>
      <UnorderedList fontSize={14} spacing={2} color={"gray.600"}>
        {product.basicFeatures.map((feature, idx) => (
          <ListItem key={idx}>{feature}</ListItem>
        ))}
      </UnorderedList>

      <Link href="/" as={NextLink} color={"blue.300"} fontSize={"sm"} mt={4}>
        Ver más características
      </Link>
    </Flex>
  );
}
