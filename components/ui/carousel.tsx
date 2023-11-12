// Carousel.tsx
import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { Button } from "./button";
import SpotifyIcon from "./icons/spotify-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
import ArrowLeftIcon from "./icons/arrow-left-icon";

interface CarouselProps {
	children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
	const sliderRef = useRef<Slider>(null);

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const settings = {
		speed: 500,
		centerMode: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<div className="carousel-container">
			<Slider
				ref={sliderRef}
				{...settings}
			>
				{children}
			</Slider>
			<div className="flex space-x-5 items-center justify-center mt-10">
				<ArrowLeftIcon onClick={prevSlide} />

				<ArrowRightIcon onClick={nextSlide} />
			</div>
		</div>
	);
};

export default Carousel;