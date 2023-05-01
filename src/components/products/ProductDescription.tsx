import { renderHtml } from "@/lib/utils";
import { IProduct } from "@/models/product";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type TProps = {
  product: IProduct;
};

export default function ProductDescription({ product }: TProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(renderHtml(product.descripion));
  }, []);

  return (
    <Box
      color={"gray.600"}
      fontSize={18}
      dangerouslySetInnerHTML={{ __html: content }}
    ></Box>
  );
}
