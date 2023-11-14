import { Skeleton } from "./skeleton";

const CardSkeleton = () => {
	return (
		<div className="grid gap-x-8 gap-y-4 grid-cols-3">
			<Skeleton className="h-[530px] w-[320px]" />
			<Skeleton className="h-[530px] w-[320px]" />
			<Skeleton className="h-[530px] w-[320px]" />
		</div>
	);
};

export default CardSkeleton;