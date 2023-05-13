import React, { useState } from "react";
import BorderBox from "../../UI/BorderBox";
import { Box, Flex, Icon, Button, Link, Text, Select } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiTruck, FiMapPin } from "react-icons/fi";
import BuyInfo from "./BuyInfo";
import { useProductContext } from "@/contexts/ProductContext";

export default function BuySection() {
  const { product } = useProductContext();

  const [unitsSelected, setUnitsSelected] = useState<number>(1);

  function onBuyClicked() {
    console.log("BUY CLICKED");
  }

  return (
    <BorderBox>
      <Flex gap={6} direction={"column"}>
        <Flex gap={2} align={"flex-start"}>
          <Icon as={FiTruck} color={"green.400"} boxSize={5} mt={0.5} />

          <Flex gap={2} direction={"column"} align={"flex-start"}>
            <Text as={"b"} color={"green.400"}>
              Envío gratis a todo el país
              <br />
            </Text>

            <Text fontSize={14} color={"gray.400"}>
              Conocé los tiempos y las formas de envío.
            </Text>

            <Button
              variant="link"
              leftIcon={<Icon as={FiMapPin} color={"blue.400"} />}
            >
              <Text fontSize={14} color={"blue.400"}>
                Calcular cuándo llega
              </Text>
            </Button>
          </Flex>
        </Flex>

        <Box>
          <Text fontSize={14}>
            Vendido por{" "}
            <Link href="/" as={NextLink} color={"blue.300"}>
              {product?.seller.name.toUpperCase()}
            </Link>
          </Text>

          <Text fontSize={14}>Mercado líder | +5mil ventas</Text>
          <Text fontSize={12} color={"gray.400"}>
            Hace factura A
          </Text>
        </Box>

        <Text as="b">
          {product && product.stock > 0 ? "Stock disponible" : "Sin stock"}
        </Text>

        <Flex gap={2} flexWrap={"nowrap"} align={"baseline"}>
          <Text>Cantidad:</Text>
          <Select
            value={unitsSelected}
            onChange={(ev) =>
              setUnitsSelected(ev.currentTarget.value as unknown as number)
            }
            sx={{ fontWeight: 600, width: "auto" }}
            variant={"flushed"}
          >
            {/* @ts-ignore */}
            {[...Array(product?.stock || 0).keys()].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1} unidad{idx > 0 && "es"}
              </option>
            ))}
          </Select>

          <Text fontSize={14} color={"gray.400"}>
            ({product?.stock} disponibles)
          </Text>
        </Flex>

        <Button colorScheme="blue" py={6} onClick={onBuyClicked}>
          Comprar ahora
        </Button>

        <BuyInfo />
      </Flex>
    </BorderBox>
  );
}
