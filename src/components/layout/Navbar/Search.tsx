import {
  Divider,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [value, setValue] = useState("");

  function onsubmit(ev: any) {
    ev.preventDefault();
    if (value == "") return;

    console.log(value);
  }

  return (
    <form onSubmit={onsubmit} style={{ width: "100%" }}>
      <InputGroup bgColor={"white"} borderRadius={99}>
        <Input
          placeholder="Buscar"
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
        />
        <InputRightElement
          width={"auto"}
          children={
            <>
              <Divider orientation="vertical" />
              <IconButton
                aria-label="Buscar..."
                bgColor={"transparent"}
                icon={<Icon as={FaSearch} />}
                type="submit"
                _hover={{
                  background: "gray.100",
                }}
              />
            </>
          }
        />
      </InputGroup>
    </form>
  );
}
