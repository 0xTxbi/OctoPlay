import { Card, CardContent } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import useTopTracks from "@/lib/hooks/useTopTracks";
import React from "react";
import { RangeFilter } from "./range-filter-dropdown";
import CardSkeleton from "./card-skeleton";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	const [time_range, setTime_range] = React.useState("short_term");
	const { topTracks, loading, error } = useTopTracks({
		time_range: time_range,
	});

	console.log(topTracks);

	const handleTimeRangeChange = (value: string) => {
		setTime_range(value);
	};

	return (
		<>
			<div className="container">
				<div className="flex justify-end mb-5">
					<RangeFilter
						value={time_range}
						onValueChange={
							handleTimeRangeChange
						}
					/>
				</div>

				{loading ? (
					<CardSkeleton mode="tracks" />
				) : (
					<Carousel
						opts={{
							align: "center",
							slidesToScroll: 1,
							loop: true,
							containScroll:
								"trimSnaps",
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full -ml-1"
					>
						<CarouselContent>
							{topTracks?.map(
								(track) => (
									<CarouselItem
										key={
											track.id
										}
										className="md:basis-1/3 lg:basis-1/4"
									>
										<div className="p-1">
											<TopTrackCard
												key={
													track.id
												}
												trackId={
													track.id
												}
												name={
													track.name
												}
												album={
													track
														.album
														?.name
												}
												artwork={
													track
														.album
														?.images[0]
														.url
												}
												artist={
													track
														.artists[0]
														.name
												}
												duration={
													track.duration_ms
												}
												previewUrl={
													track.preview_url
												}
											/>
										</div>
									</CarouselItem>
								)
							)}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				)}
			</div>
		</>
	);
}
