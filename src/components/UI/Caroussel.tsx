import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  CarouselProviderProps,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type TProps = {
  slides: JSX.Element[];
} & Omit<CarouselProviderProps, "totalSlides" | "children">;

export default function Caroussel({ slides, ...props }: TProps) {
  return (
    <CarouselProvider {...props} totalSlides={slides.length}>
      <Box style={{ position: "relative", margin: "auto", maxWidth: "800px" }}>
        <Slider>
          {slides.map((slide, idx) => (
            <Slide key={idx} index={idx}>
              {slide}
            </Slide>
          ))}
        </Slider>

        <ButtonBack
          style={{
            position: "absolute",
            top: "50%",
            left: "-2%",
            transform: "translateY(-50%)",
          }}
        >
          <IconButton
            aria-label="Back"
            icon={<FaArrowLeft />}
            borderRadius={99}
          />
        </ButtonBack>
        <ButtonNext
          style={{
            position: "absolute",
            top: "50%",
            right: "-2%",
            transform: "translateY(-50%)",
          }}
        >
          <IconButton
            aria-label="Next"
            icon={<FaArrowRight />}
            borderRadius={99}
          />
        </ButtonNext>
      </Box>
      <DotGroup style={{ textAlign: "center" }} />
    </CarouselProvider>
  );
}
