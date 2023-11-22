import { Card } from "@/components/ui/card";
import Carousel from "./carousel";
import React from "react";
import { RangeFilter } from "./range-filter-dropdown";
import CardSkeleton from "./card-skeleton";
import useTopArtists from "@/lib/hooks/useTopArtitsts";
import { TopArtistCard } from "./top-artist-card";

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
			<div className="flex justify-end">
				<RangeFilter
					value={time_range}
					onValueChange={handleTimeRangeChange}
				/>
			</div>

			{loading ? (
				<CardSkeleton mode="artists" />
			) : (
				<Carousel>
					{topArtists?.map((artist) => (
						<TopArtistCard
							key={artist.id}
							artistId={artist.id}
							name={artist.name}
							image={
								artist.images[1]
									.url
							}
							followers={
								artist.followers
									?.total
							}
							genres={artist.genres}
							popularity={
								artist.popularity
							}
						/>
					))}
				</Carousel>
			)}
		</>
	);
}
