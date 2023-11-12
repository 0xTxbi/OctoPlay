import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";
import useSWR from "swr";

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
