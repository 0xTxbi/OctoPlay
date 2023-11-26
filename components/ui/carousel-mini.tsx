// Carousel.tsx
import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "./icons/arrow-right-icon";
import ArrowLeftIcon from "./icons/arrow-left-icon";

interface CarouselMiniProps {
	children: ReactNode;
}

const CarouselMini: React.FC<CarouselMiniProps> = ({ children }) => {
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
		fade: true,
		arrows: false,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="w-[330px]">
			<Slider
				ref={sliderRef}
				{...settings}
			>
				{children}
			</Slider>
			<div className="flex space-x-5 items-center justify-center mt-3">
				<ArrowLeftIcon onClick={prevSlide} />

				<ArrowRightIcon onClick={nextSlide} />
			</div>
		</div>
	);
};

export default CarouselMini;
