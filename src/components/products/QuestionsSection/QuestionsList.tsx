import { IProduct } from "@/models/product";
import { IQuestion } from "@/models/question";
import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";

type TProps = {
  product: IProduct;
};

function QuestionTextItem({
  label,
  color = undefined,
}: {
  label: string;
  color?: string;
}) {
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <HStack
      onMouseOver={() => setBtnVisible(true)}
      onMouseLeave={() => setBtnVisible(false)}
      align={"baseline"}
    >
      <Text color={color}>
        {label}{" "}
        {btnVisible && (
          <Link as={NextLink} href="/" fontSize={14} color="teal.500">
            Denunciar
          </Link>
        )}
      </Text>
    </HStack>
  );
}

const QuestionItem = ({ question }: { question: IQuestion }) => {
  return (
    <Box>
      <QuestionTextItem label={question.text} />
      {question.asnwer && (
        <Box mt={2} ml={6}>
          <QuestionTextItem label={question.asnwer} color={"gray.500"} />
        </Box>
      )}
    </Box>
  );
};

export default function QuestionsList({ product }: TProps) {
  return (
    <Stack spacing={6}>
      {product.questions.map((question, idx) => (
        <QuestionItem key={idx} question={question} />
      ))}
    </Stack>
  );
}
