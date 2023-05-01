import { Button } from "@chakra-ui/react";
import React from "react";

type TProps = {
  label: string;
  onClick?: () => void;
};

export default function QuestionButton({ label, onClick = () => {} }: TProps) {
  return (
    <Button
      bgColor={"purple.100"}
      color={"purple.600"}
      _hover={{
        backgroundColor: "purple.200",
      }}
      size={"sm"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
