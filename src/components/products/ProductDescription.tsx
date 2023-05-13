import { useProductContext } from "@/contexts/ProductContext";
import { renderHtml } from "@/lib/utils";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ProductDescription() {
  const { product } = useProductContext();

  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(renderHtml(product?.descripion || ""));
  }, []);

  return (
    <Box
      color={"gray.600"}
      fontSize={18}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Box>
  );
}
