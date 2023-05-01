import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "./NavLinks";
import { Icon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";

export default function UserSection() {
  return (
    <HStack spacing={6} alignItems={"flex-end"}>
      <NavLink href={""}>
        <Text fontSize={14}>Creá tu cuenta</Text>
      </NavLink>
      <NavLink href={""}>
        <Text fontSize={14}>Ingresá</Text>
      </NavLink>
      <NavLink href={""}>
        <Text fontSize={14}>Mis compras</Text>
      </NavLink>

      <IconButton
        aria-label="Carrito"
        bgColor={"transparent"}
        height={"auto"}
        role="group"
        _hover={{
          backgroundColor: "transparent",
        }}
        icon={
          <Icon
            as={FaShoppingCart}
            _groupHover={{
              color: "gray",
            }}
          />
        }
      />
    </HStack>
  );
}
