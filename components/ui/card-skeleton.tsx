import Carousel from "./carousel";
import { Skeleton } from "./skeleton";

interface CardSkeletonProps {
	mode: "tracks" | "artists";
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ mode }) => {
	return mode === "tracks" ? (
		<Carousel>
			<Skeleton className="mr-5 h-[496px] w-[320px]" />
			<Skeleton className="mr-5 h-[496px] w-[320px]" />
			<Skeleton className="mr-5 h-[496px] w-[320px]" />
			<Skeleton className="mr-5 h-[496px] w-[320px]" />
		</Carousel>
	) : (
		<Carousel>
			<Skeleton className="mr-5 h-[394px] w-[365px]" />
			<Skeleton className="mr-5 h-[394px] w-[365px]" />
			<Skeleton className="mr-5 h-[394px] w-[365px]" />
			<Skeleton className="mr-5 h-[394px] w-[365px]" />
		</Carousel>
	);
};

export default CardSkeleton;
