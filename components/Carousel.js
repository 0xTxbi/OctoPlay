import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { Button, ButtonGroup, Center } from "@chakra-ui/react";

function Carousel({ children, variant }) {
  const [carouselBtnRef, setCarouselBtnRef] = useState(null);

  const multipleItemsCarouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const singleItemCarouselSettings = {
    arrows: false,
    slidesToShow: 1,
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

  if (variant === "single") {
    return (
      <>
        <Slider ref={setCarouselBtnRef} {...singleItemCarouselSettings}>
          {children}
        </Slider>
      </>
    );
  }
  if (variant === "multiple") {
    return (
      <>
        <Slider ref={setCarouselBtnRef} {...multipleItemsCarouselSettings}>
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
  } else {
    return null;
  }
}

export default Carousel;
