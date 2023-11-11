import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";

type OverViewProps = React.ComponentProps<typeof Card>;

export function Overview({ className, ...props }: OverViewProps) {
	return (
		<div>
			<h1>Overview</h1>
		</div>
	);
}
