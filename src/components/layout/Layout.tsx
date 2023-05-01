import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type TProps = {
  children: JSX.Element;
};

export default function Layout({ children }: TProps) {
  return (
    <Flex direction={"column"} minHeight={"100vh"}>
      <Navbar />
      <Box flexGrow={1} py={4} px={8} bgColor={"gray.100"}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}
