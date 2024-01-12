import { Card } from "@/components/ui/card";

import React from "react";
import { RangeFilter } from "./range-filter-dropdown";
import CardSkeleton from "./card-skeleton";
import useTopArtists from "@/lib/hooks/useTopArtitsts";
import { TopArtistCard } from "./top-artist-card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";

type TopArtistsProps = React.ComponentProps<typeof Card>;

export function TopArtists({ className, ...props }: TopArtistsProps) {
	const [time_range, setTime_range] = React.useState("short_term");
	const { topArtists, loading, error } = useTopArtists({
		time_range: time_range,
	});

	const handleTimeRangeChange = (value: string) => {
		setTime_range(value);
	};

	return (
		<>
			<div className="flex justify-end mb-5">
				<RangeFilter
					value={time_range}
					onValueChange={handleTimeRangeChange}
				/>
			</div>

			{loading ? (
				<CardSkeleton mode="artists" />
			) : (
				<div className="container">
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
							{topArtists?.map(
								(artist) => (
									<CarouselItem
										key={
											artist.id
										}
										className="md:basis-1/3 lg:basis-1/3"
									>
										<div className="p-1">
											<TopArtistCard
												key={
													artist.id
												}
												artistId={
													artist.id
												}
												name={
													artist.name
												}
												image={
													artist
														.images[1]
														.url
												}
												followers={
													artist
														.followers
														?.total
												}
												genres={
													artist.genres
												}
												popularity={
													artist.popularity
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
				</div>
			)}
		</>
	);
}
