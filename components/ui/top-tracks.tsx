import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	return (
		<div className="flex flex-wrap gap-5">
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
			<TopTrackCard />
		</div>
	);
}
