import { Box } from "@chakra-ui/react";
import React from "react";

export default function BorderBox({ children, ...props }: any) {
  return (
    <Box
      border={"1px"}
      borderColor={"gray.300"}
      borderRadius={8}
      py={6}
      px={4}
      {...props}
    >
      {children}
    </Box>
  );
}
