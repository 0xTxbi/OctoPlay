import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";
import { PlayIcon } from "@radix-ui/react-icons";

type TopArtistCardProps = React.ComponentProps<typeof Card>;

export interface TopArtistCardComponentProps extends TopArtistCardProps {
	artistId: string;
	name: string;
	image: string;
	followers: number;
	genres: string[];
	popularity: string;
}

export function TopArtistCard({
	artistId,
	name,
	image,
	followers,
	genres,
	popularity,
	className,
	...props
}: TopArtistCardComponentProps) {
	// const { trackGeekInfo, artistGeekInfo } = useTrackGeek({
	// 	id: trackId,
	// });

	return (
		<>
			<Card
				className={cn("mr-5", className)}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md"
						src={image}
						alt={`Picture of ${name}`}
						width={320}
						height={320}
					/>
				</CardHeader>
				<CardContent className="grid gap-4 mt-5">
					<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
						{truncateText(name, 15)}
					</h2>
					<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
						{followers}
					</h2>
					<h3 className="scroll-m-20 text-md font-medium tracking-tight">
						{/* {genres} */}
					</h3>
					<div className="flex place-items-center">
						<h3 className="scroll-m-20 text-sm font-light tracking-tight">
							{popularity}
						</h3>
					</div>
				</CardContent>
				<CardFooter className="space-x-2">
					<Button
						disabled
						className="w-full bg-green-400"
					>
						<PlayIcon className="mr-2 h-4 w-4" />{" "}
						Play
					</Button>
					{/* <TrackSheet
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
					/> */}
				</CardFooter>
			</Card>
		</>
	);
}
