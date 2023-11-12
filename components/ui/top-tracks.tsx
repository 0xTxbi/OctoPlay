import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	const { topTracks, loading, error } = useTopTracks();
	console.log(topTracks, loading, error);

	return (
		<Carousel>
			{topTracks?.map((track) => (
				<TopTrackCard
					key={track.id}
					name={track.name}
					album={track.album?.name}
					artwork={track.album?.images[0].url}
					artist={track.artist}
					duration={track.duration_ms}
					previewUrl={track.preview_url}
				/>
			))}
		</Carousel>
	);
}
