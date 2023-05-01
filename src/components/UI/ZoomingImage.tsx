import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import BorderBox from "./BorderBox";

type TProps = {
  image: string;
  onImageClicked?: () => void;
};

type TPosition = { x: number; y: number };

export default function ZoomingImage({
  image,
  onImageClicked = () => {},
}: TProps) {
  const [showZoomBox, setShowZoomBox] = useState<boolean>(false);

  const [zoomBoxPosition, setZoomBoxPosition] = useState<TPosition>();

  const containerRef = useRef<HTMLDivElement>(null);
  const zoomBoxRef = useRef<HTMLDivElement>(null);

  const ZOOM_BOX_WIDTH = useBreakpointValue({
    base: 150,
    md: 200,
  });

  const ZOOMED_IMAGE_WIDTH = useBreakpointValue({
    base: 200,
    sm: 300,
    md: 500,
    lg: 600,
    xl: 750,
    ["2xl"]: 900,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerRect = containerRef.current?.getBoundingClientRect();

    const containerHeight = containerRect?.height;
    const containerWidth = containerRect?.width;

    const containerTop = containerRect?.top;
    const containerLeft = containerRect?.left;

    if (
      !containerHeight ||
      !containerWidth ||
      !containerTop ||
      !containerLeft ||
      !ZOOMED_IMAGE_WIDTH
    )
      return;

    var x = event.clientX - containerLeft - ZOOM_BOX_WIDTH! / 2; //x position within the element.
    var y = event.clientY - containerTop - ZOOM_BOX_WIDTH! / 2; //y position within the element.

    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > containerWidth - ZOOM_BOX_WIDTH!)
      x = containerWidth - ZOOM_BOX_WIDTH!;
    if (y > containerHeight - ZOOM_BOX_WIDTH!)
      y = containerHeight - ZOOM_BOX_WIDTH!;

    console.log("X", x);
    console.log("Y", y);
    console.log("---");

    setZoomBoxPosition({ x, y });
  };

  return (
    <Box
      position={"relative"}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOver={() => setShowZoomBox(true)}
      onMouseLeave={() => setShowZoomBox(false)}
      cursor={"zoom-in"}
    >
      {showZoomBox && (
        <>
          <Box
            ref={zoomBoxRef}
            position={"absolute"}
            bgColor={"black"}
            height={ZOOM_BOX_WIDTH}
            width={ZOOM_BOX_WIDTH}
            onClick={onImageClicked}
            opacity={0.4}
            left={zoomBoxPosition?.x}
            top={zoomBoxPosition?.y}
          />

          <BorderBox
            position="absolute"
            right={-ZOOMED_IMAGE_WIDTH!}
            top={0}
            zIndex={99}
            width={ZOOMED_IMAGE_WIDTH}
            p={0}
            height={ZOOMED_IMAGE_WIDTH}
            overflow="hidden"
            backgroundImage={`url("${image}")`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            {/* <Image
              src={image}
              width={"100%"}
              transform={"scale(1.3)"}
              top={0}
            /> */}
          </BorderBox>
        </>
      )}

      <Image src={image} width={"100%"} />
    </Box>
  );
}
