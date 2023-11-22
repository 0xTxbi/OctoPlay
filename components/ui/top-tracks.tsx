import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";
import React from "react";
import { RangeFilter } from "./range-filter-dropdown";
import CardSkeleton from "./card-skeleton";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	const [time_range, setTime_range] = React.useState("short_term");
	const { topTracks, loading, error } = useTopTracks({
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

			<Carousel>
				{loading ? (
					<CardSkeleton mode="artists" />
				) : (
					topTracks?.map((track) => (
						<TopTrackCard
							key={track.id}
							trackId={track.id}
							name={track.name}
							album={
								track.album
									?.name
							}
							artwork={
								track.album
									?.images[0]
									.url
							}
							artist={
								track.artists[0]
									.name
							}
							duration={
								track.duration_ms
							}
							previewUrl={
								track.preview_url
							}
						/>
					))
				)}
			</Carousel>
		</>
	);
}
