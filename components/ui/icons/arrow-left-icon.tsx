// ArrowLeftIcon.tsx
import React from "react";

const ArrowLeftIcon: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div
			className="w-8 h-8 text-white rounded-full flex items-center justify-center cursor-pointer transition duration-300 "
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="w-6 h-6 transform rotate-180"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</div>
	);
};

export default ArrowLeftIcon;
