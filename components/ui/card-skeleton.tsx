import { Skeleton } from "./skeleton";

interface CardSkeletonProps {
	mode: "tracks" | "artists";
}

const CardSkeleton: React.FC<CardSkeletonProps> = ({ mode }) => {
	return mode === "tracks" ? (
		<div>
			<Skeleton className="h-[530px] w-[320px]" />
			<Skeleton className="h-[530px] w-[320px]" />
			<Skeleton className="h-[530px] w-[320px]" />
			<Skeleton className="h-[530px] w-[320px]" />
		</div>
	) : (
		<div>
			<Skeleton className="h-[394px] w-[365px]" />
			<Skeleton className="h-[394px] w-[365px]" />
			<Skeleton className="h-[394px] w-[365px]" />
		</div>
	);
};

export default CardSkeleton;
