import { Box, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import { Settings } from "react-slick";

type TProps = {
  images: string[];
  onCloseClicked: () => void;
};

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style }}
      onClick={onClick}
      right={12}
      zIndex={2}
      _before={{
        fontSize: 32,
      }}
    ></Box>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{ ...style }}
      onClick={onClick}
      left={4}
      zIndex={2}
      _before={{
        fontSize: 32,
      }}
    ></Box>
  );
}

export default function FullPageCaroussel({ images, onCloseClicked }: TProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
    customPaging: (i) => (
      <Box
        width={16}
        mt={2}
        ml={i == 0 ? 0 : 12}
        transform={`translateX(-80%)${currentSlide == i ? " scale(1.2)" : ""}`}
        border={currentSlide == i ? "2px solid" : ""}
        borderColor={currentSlide == i ? "blue.400" : ""}
        borderRadius={6}
      >
        <Image src={images[i]} />
      </Box>
    ),
  };

  function onKeyPressed(event: any) {
    if (event.key === "Escape") onCloseClicked();
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed, false);

    return () => document.removeEventListener("keydown", onKeyPressed, false);
  }, []);

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      zIndex={9999}
      height={"100vh"}
      width={"100vw"}
      bgColor={"blackAlpha.600"}
    >
      <Flex direction={"column"} gap={6}>
        <IconButton
          aria-label="Close"
          alignSelf={"flex-end"}
          mr={6}
          mt={2}
          icon={<Icon as={FaTimes} />}
          onClick={onCloseClicked}
        />

        <Box>
          <Slider {...sliderSettings}>
            {images.map((image, idx) => (
              <Box key={idx}>
                <Image src={image} height={"70vh"} mx={"auto"} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Flex>
    </Box>
  );
}
