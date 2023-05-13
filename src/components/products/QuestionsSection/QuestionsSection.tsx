import { IProduct } from "@/models/product";
import { Box, ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";
import QuestionButton from "./QuestionButton";
import QuestionInput from "./QuestionInput";
import QuestionsList from "./QuestionsList";
import { useProductContext } from "@/contexts/ProductContext";

export default function QuestionsSection() {
  const { product } = useProductContext();

  function onSearch(value: string) {
    console.log(value);
  }

  return (
    <Box>
      <Text fontWeight={500} mb={4}>
        ¿Qué querés saber?
      </Text>

      <ButtonGroup spacing={4} mb={8}>
        <QuestionButton label="Costo y tiempo de envío" />
        <QuestionButton label="Devoluciones gratis" />
        <QuestionButton label="Medios de pago y promociones" />
        <QuestionButton label="Garantía" />
      </ButtonGroup>

      <Box mb={8}>
        <Text fontWeight={500} mb={2}>
          Buscá lo que querés saber
        </Text>
        <QuestionInput onSearch={onSearch} />
      </Box>

      <Box>
        <Text fontWeight={500} mb={4}>
          Últimas realizadas
        </Text>

        <QuestionsList />
      </Box>
    </Box>
  );
}
