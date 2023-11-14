import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";
import { Button } from "./button";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	const { topTracks, loading, error } = useTopTracks();

	console.log(topTracks);

	return (
		<>
			<Button>Filter</Button>
			{/* <Carousel>
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
