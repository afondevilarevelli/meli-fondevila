import { Box, Image } from "@chakra-ui/react";
import Drift from "drift-zoom";
import React, { useEffect, useRef, useState } from "react";

type TProps = {
  image: string;
};

export default function ZoomingImage({ image }: TProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const paneRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const [driftInstance, setDriftInstance] = useState<Drift>();

  useEffect(() => {
    if (driftInstance) return;

    setDriftInstance(
      new Drift(imgRef.current!, {
        paneContainer: imgRef.current!,
        zoomFactor: 1.5,
        containInline: false,
        hoverBoundingBox: false,
        showWhitespaceAtEdges: true,
        inlineContainer: imgRef.current!,
        injectBaseStyles: true,
        inlineOffsetY: 50,
      })
    );
  }, []);

  function onImageClicked() {}

  return (
    <Box ref={parentRef}>
      <Image
        ref={imgRef}
        src={image}
        width={"100%"}
        onClick={onImageClicked}
        _hover={{
          cursor: "zoom-in",
        }}
        data-zoom={image}
      />
      <Box ref={paneRef} />
    </Box>
  );
}
