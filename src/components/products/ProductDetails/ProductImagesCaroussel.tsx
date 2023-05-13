import FullPageCaroussel from "@/components/UI/FullPageCaroussel";
import ZoomingImage from "@/components/UI/ZoomingImage";
import { useProductContext } from "@/contexts/ProductContext";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ProductImagesCaroussel() {
  const { product } = useProductContext();

  const [imageSelected, setImageSelected] = useState(0);
  const [showImagesCaroussel, setShowImagesCaroussel] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (showImagesCaroussel) lockScroll();
    else unlockScroll();

    return () => {
      unlockScroll();
    };
  }, [showImagesCaroussel]);

  return (
    <Flex gap={2}>
      <Flex width={"10%"} direction={"column"} gap={2}>
        {product?.images.map((image, idx) => (
          <Image
            src={image}
            key={idx}
            borderStyle={"solid"}
            borderWidth={imageSelected == idx ? 2 : 1}
            borderColor={imageSelected == idx ? "blue.400" : "gray.400"}
            borderRadius={6}
            cursor="pointer"
            onMouseOver={() => setImageSelected(idx)}
            _hover={{
              borderWidth: 2,
              borderColor: "blue.400",
            }}
          />
        ))}
      </Flex>

      <Box flex={1} my={6} mx={2}>
        <ZoomingImage
          image={product?.images[imageSelected] || ""}
          onImageClicked={() => setShowImagesCaroussel(true)}
        />
      </Box>

      {showImagesCaroussel && (
        <FullPageCaroussel
          images={product?.images || []}
          onCloseClicked={() => setShowImagesCaroussel(false)}
        />
      )}
    </Flex>
  );
}
