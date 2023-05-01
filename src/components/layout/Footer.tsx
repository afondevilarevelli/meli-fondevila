import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

type TProps = {};

export default function Footer({}: TProps) {
  return (
    <Flex alignItems={"center"} gap={2} py={2} px={4} bgColor={"gray.300"}>
      <InfoOutlineIcon />
      Todos los derechos reservados
    </Flex>
  );
}
