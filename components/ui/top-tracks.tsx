import { Card } from "@/components/ui/card";
import { TopTrackCard } from "./top-track-card";
import Carousel from "./carousel";
import useTopTracks from "@/lib/hooks/useTopTracks";
import { Button } from "./button";
import { IconAdjustments } from "@tabler/icons-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { ClockIcon } from "@radix-ui/react-icons";

type TopTracksProps = React.ComponentProps<typeof Card>;

export function TopTracks({ className, ...props }: TopTracksProps) {
	const [time_range, setTime_range] = React.useState("short_term");
	const { topTracks, loading, error } = useTopTracks({
		time_range: time_range,
	});

	return (
		<>
			<div className="flex justify-end">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="bg-green-500 mb-4 text-end">
							<IconAdjustments
								size={20}
								className="mr-2"
							/>
							Filter
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="">
						<DropdownMenuLabel className="flex items-center">
							<ClockIcon className="mr-2" />
							Time Range
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuRadioGroup
							value={time_range}
							onValueChange={
								setTime_range
							}
						>
							<DropdownMenuRadioItem value="short_term">
								Short term
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="medium_term">
								Medium term
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="long_term">
								Long term
							</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
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
			</Carousel>
		</>
	);
}
