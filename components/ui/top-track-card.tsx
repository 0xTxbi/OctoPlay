import { cn } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";
import { TrackSheet } from "./track-sheet";
import useTrackGeek from "@/lib/hooks/useTrackGeek";
import { IconUser, IconVinyl } from "@tabler/icons-react";

type TopTrackCardProps = React.ComponentProps<typeof Card>;

export interface TopTrackCardComponentProps extends TopTrackCardProps {
	trackId: string;
	name: string;
	album: string;
	artwork: string;
	artist: string;
	duration: string;
	previewUrl: string;
}

export function TopTrackCard({
	trackId,
	name,
	album,
	artwork,
	artist,
	duration,
	previewUrl,
	className,
	...props
}: TopTrackCardComponentProps) {
	const { trackGeekInfo, artistGeekInfo, trackAudioFeatures } =
		useTrackGeek({
			id: trackId,
		});

	return (
		<>
			<Card
				className={cn(
					"mr-5 lg:max-w-[300px]",
					className
				)}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md max-h-[350px]"
						src={artwork}
						alt={`artwork of the ${name} track`}
						width={300}
						height={300}
					/>
				</CardHeader>
				<CardContent className="grid gap-2 lg:gap-4 mt-5">
					<h2 className="scroll-m-20 md:text-sm lg:text-xl font-semibold tracking-tight">
						{truncateText(name, 20)}
					</h2>
					<span className="flex items-center text-gray-400">
						<IconVinyl className="mr-1 h-4 w-4" />
						<h3 className="scroll-m-20 text-xs font-normal tracking-tight">
							{truncateText(
								album,
								10
							)}
						</h3>
					</span>
					<span className="flex items-center text-gray-400">
						<IconUser className="mr-1 h-4 w-4" />
						<h3 className="scroll-m-20 text-xs font-normal tracking-tight">
							{artist}
						</h3>
					</span>
				</CardContent>
				<CardFooter className="space-x-2">
					<TrackSheet
						name={trackGeekInfo?.name}
						image={
							trackGeekInfo?.album
								?.images[0].url
						}
						album={
							trackGeekInfo?.album
								.name
						}
						releaseDate={
							trackGeekInfo?.album
								?.release_date
						}
						duration={
							trackGeekInfo?.duration_ms
						}
						explicit={
							trackGeekInfo?.explicit
						}
						artist={artistGeekInfo}
						previewUrl={
							trackGeekInfo?.preview_url
						}
						audioFeatures={
							trackAudioFeatures
						}
					/>
				</CardFooter>
			</Card>
		</>
	);
}
