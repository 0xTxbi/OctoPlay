import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	return (
		<Carousel>
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
		</Carousel>
	);
}
