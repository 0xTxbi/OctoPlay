import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Button, ButtonGroup, Center } from "@chakra-ui/react";

function Carousel({ children }) {
  const [carouselBtnRef, setCarouselBtnRef] = useState(null);

  const carouselSettings = {
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={setCarouselBtnRef} {...carouselSettings}>
        {children}
      </Slider>
      <Center mt={5}>
        <ButtonGroup spacing={5}>
          <Button
            onClick={carouselBtnRef?.slickPrev}
            bg="green.500"
            _hover={{ bg: "green.600" }}
          >
            Previous
          </Button>
          <Button
            onClick={carouselBtnRef?.slickNext}
            _hover={{ bg: "green.500" }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Center>
    </>
  );
}

export default Carousel;
