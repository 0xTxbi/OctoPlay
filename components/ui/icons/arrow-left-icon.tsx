import React from "react";

interface ArrowLeftIconProps {
	onClick?: () => void;
	className?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({
	onClick,
	className,
}) => {
	return (
		<div
			className={className}
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="w-8 h-8 transform rotate-180 bg-green-500 rounded-full p-2 cursor-pointer"
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
