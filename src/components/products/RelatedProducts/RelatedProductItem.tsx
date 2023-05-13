import { useProductContext } from "@/contexts/ProductContext";
import { formatPrice } from "@/lib/utils";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function RelatedProductItem() {
  const { product } = useProductContext();

  return (
    <Card
      align="center"
      cursor={"pointer"}
      m={2}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform .15s ease-in",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      }}
      transition={"transform .15s ease-in"}
    >
      <CardBody>
        <Image src={product?.images[0]} alt={product?.name} width={"100%"} />
        <Divider />

        <Stack spacing="3" mt={2}>
          <Heading size="lg" fontWeight={400}>
            $ {formatPrice(product?.price!)}
          </Heading>
          <Text as={"b"} color={"green.400"} fontSize={14}>
            Envío gratis
          </Text>
          <Text fontSize={14} noOfLines={2}>
            {product?.name}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
