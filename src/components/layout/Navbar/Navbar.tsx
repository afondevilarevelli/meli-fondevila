import { Image, useBreakpointValue, Flex, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import NavLinks from "./NavLinks";
import ShippingOption from "./ShippingOption";
import UserSection from "./UserSection";
import Search from "./Search";

type TProps = {};

export default function Navbar({}: TProps) {
  const paddingX = useBreakpointValue({
    base: 10,
    ["2xl"]: 64,
  });

  return (
    <Flex
      bgColor={"#fff159"}
      width={"100%"}
      maxWidth={"none"}
      py={2}
      px={paddingX}
      direction={"column"}
      gap={4}
    >
      <Flex gap={24}>
        <Flex gap={12} alignItems={"center"} flex={1}>
          <Link href="/" as={NextLink}>
            <Image src="/logo.png" alt="Logo" height={9} />
          </Link>

          <Search />
        </Flex>

        <Link href="/" as={NextLink}>
          <Image
            src="/images/disney_plus.webp"
            alt="Disney Plus Nivel 6"
            height={10}
          />
        </Link>
      </Flex>

      <Flex gap={12} alignItems={"flex-end"}>
        <ShippingOption place="Capital Federal" />

        <Box flex={1}>
          <NavLinks />
        </Box>

        <UserSection />
      </Flex>
    </Flex>
  );
}
