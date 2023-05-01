import { Icon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  HStack,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

type TLink = {
  label: string;
  path: string;
  children: TLink[];
};

const links: TLink[] = [
  {
    label: "Categorias",
    path: "/",
    children: [
      { label: "Vehículos", path: "/", children: [] },
      { label: "Inmuebles", path: "/", children: [] },
    ],
  },
  { label: "Ofertas", path: "/", children: [] },
  { label: "Historial", path: "/", children: [] },
  { label: "Supermercado", path: "/", children: [] },
  { label: "Moda", path: "/", children: [] },
  { label: "Vender", path: "/", children: [] },
  { label: "Ayuda", path: "/", children: [] },
];

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children?: JSX.Element | string;
}) => (
  <Link
    href={href || ""}
    as={NextLink}
    sx={{ "&:hover": { textDecoration: "none", opacity: 0.7 } }}
  >
    {children}
  </Link>
);

const LinkItem = ({
  item,
  hasParent = false,
}: {
  item: TLink;
  hasParent?: boolean;
}) => {
  if (item.children?.length == 0) {
    return hasParent ? (
      <NavLink href={item.path}>
        <MenuItem>
          <Text fontSize={14}>{item.label}</Text>
        </MenuItem>
      </NavLink>
    ) : (
      <NavLink href={item.path}>
        <Text fontSize={14}>{item.label}</Text>
      </NavLink>
    );
  }

  return (
    <Menu>
      <MenuButton>
        <Text fontSize={14}>
          {item.label} <Icon as={FaArrowDown} boxSize={3} />
        </Text>
      </MenuButton>
      <MenuList>
        {item.children.map((child, idx) => (
          <LinkItem item={child} hasParent={true} key={idx} />
        ))}
      </MenuList>
    </Menu>
  );
};

export default function NavLinks() {
  return (
    <HStack spacing={6}>
      {links.map((item, idx) => (
        <LinkItem item={item} key={idx} />
      ))}
    </HStack>
  );
}
