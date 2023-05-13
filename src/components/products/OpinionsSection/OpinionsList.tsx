import { ALL_RATINGS_VALUES } from "@/lib/utils";
import {
  Button,
  ButtonGroup,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowDown, FaStar } from "react-icons/fa";
import OpinionItem from "./OpinionItem";
import { useProductContext } from "@/contexts/ProductContext";

const FilterBtnStyle = {
  colorScheme: "blue",
  rightIcon: <Icon as={FaArrowDown} />,
  borderRadius: 99,
  bgColor: "blue.100",
  color: "blue.600",
  _hover: {
    backgroundColor: "blue.100",
  },
};

export default function OpinionsList() {
  const { product } = useProductContext();

  return (
    <Stack spacing={6}>
      <ButtonGroup spacing="6" size={"sm"}>
        <Popover>
          <PopoverTrigger>
            <Button {...FilterBtnStyle}>
              <Text fontWeight={700}>Ordenar</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent width={"fit-content"}>
            <PopoverArrow />
            <PopoverBody>
              <Button width={"100%"} variant={"ghost"}>
                Más útiles
              </Button>
              <Button width={"100%"} variant={"ghost"}>
                Más recientes
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button {...FilterBtnStyle}>
              <Text fontWeight={700}>Calificación</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent width={"fit-content"}>
            <PopoverArrow />
            <PopoverBody>
              <Button width={"100%"} variant={"ghost"}>
                Todas
              </Button>

              {ALL_RATINGS_VALUES.map((val, idx) => (
                <Button key={idx} width={"100%"} variant={"ghost"}>
                  {val} <Icon as={FaStar} ml={2} />
                </Button>
              ))}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </ButtonGroup>

      <VStack divider={<StackDivider />} spacing={6}>
        {product?.opinions.map((op, idx) => (
          <OpinionItem key={idx} opinion={op} />
        ))}
      </VStack>
    </Stack>
  );
}
