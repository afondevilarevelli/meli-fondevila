import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type TProps = {
  onSearch: (value: string) => void;
};

export default function QuestionInput({ onSearch }: TProps) {
  const [value, setValue] = useState("");

  function onSubmit(ev: any) {
    ev.preventDefault();
    onSearch(value);
  }
  return (
    <form onSubmit={onSubmit}>
      <InputGroup size={"lg"}>
        <Input
          placeholder="Buscar..."
          borderColor={"gray.400"}
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
        />
        <InputRightElement
          children={
            <IconButton
              type="submit"
              icon={<Icon as={FaSearch} />}
              aria-label={"Search"}
              bgColor={"blue.400"}
              color={"white"}
              height={"100%"}
              width={"100%"}
              borderLeftRadius={0}
              _hover={{
                backgroundColor: "blue.500",
              }}
            />
          }
        />
      </InputGroup>
    </form>
  );
}
