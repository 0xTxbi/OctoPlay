import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";
import React from "react";
import { RangeFilter } from "./range-filter-dropdown";
import CardSkeleton from "./card-skeleton";
import useTopArtists from "@/lib/hooks/useTopArtitsts";

type TopArtistsProps = React.ComponentProps<typeof Card>;

export function TopArtists({ className, ...props }: TopArtistsProps) {
	const [time_range, setTime_range] = React.useState("short_term");
	const { topArtists, loading, error } = useTopArtists({
		time_range: time_range,
	});

	console.log(topArtists);

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

			{/* {loading && <CardSkeleton />}
			<Carousel>
				{topTracks?.map((track) => (
					<TopTrackCard
						key={track.id}
						trackId={track.id}
						name={track.name}
						album={track.album?.name}
						artwork={
							track.album?.images[0]
								.url
						}
						artist={track.artists[0].name}
						duration={track.duration_ms}
						previewUrl={track.preview_url}
					/>
				))}
			</Carousel> */}
		</>
	);
}
