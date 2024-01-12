import { cn, formatFollowersCount } from "@/lib/utils";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";
import { Badge } from "./badge";
import { Progress } from "./progress";
import useArtistGeek from "@/lib/hooks/useArtistGeek";
import { ArtistSheet } from "./artist-sheet";
import { IconDiscountCheckFilled } from "@tabler/icons-react";

type TopArtistCardProps = React.ComponentProps<typeof Card>;

export interface TopArtistCardComponentProps extends TopArtistCardProps {
	artistId: string;
	name: string;
	image: string | any;
	followers: number;
	genres: string[];
	popularity: number;
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
	const {
		artistsGeekInfo,
		artistAlbumsGeekInfo,
		artistTopTracksGeekInfo,
		artistRelatedArtistsGeekInfo,
		loading,
		error,
	} = useArtistGeek({
		id: artistId,
	});

	return (
		<>
			<Card
				className={cn(" mx-auto", className)}
				{...props}
			>
				<CardHeader className="flex p-0">
					<Image
						className="rounded-full p-[24px] max-h-[160px] object-cover"
						src={image}
						alt={`Picture of ${name}`}
						width={160}
						height={160}
					/>
				</CardHeader>
				<CardContent className="grid gap-4">
					<div className="flex space-x-1 items-center">
						<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
							{truncateText(name, 15)}
						</h2>
						<IconDiscountCheckFilled className="h-4 w-4 text-green-500" />
					</div>
					<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
						<Badge>
							{`${formatFollowersCount(
								followers
							)} followers`}
						</Badge>
					</h2>
					<h3 className="scroll-m-20 text-md font-medium tracking-tight">
						{/* {genres} */}
					</h3>
					<div className="flex place-items-center">
						<h3 className="scroll-m-20 text-sm font-light tracking-tight">
							Popularity
						</h3>
					</div>
					<Progress
						value={popularity}
						className="text-green-500"
					/>
				</CardContent>
				<CardFooter className="space-x-2">
					{!loading && (
						<ArtistSheet
							artistId={
								artistsGeekInfo?.id
							}
							name={
								artistsGeekInfo?.name
							}
							image={
								artistsGeekInfo
									?.images[0]
									.url
							}
							followers={formatFollowersCount(
								artistsGeekInfo
									?.followers
									?.total
							)}
							genres={
								artistsGeekInfo?.genres
							}
							popularity={
								artistsGeekInfo?.popularity
							}
							uri={
								artistsGeekInfo?.uri
							}
							albums={
								artistAlbumsGeekInfo
							}
							relatedArtists={
								artistRelatedArtistsGeekInfo
							}
						/>
					)}
				</CardFooter>
			</Card>
		</>
	);
}
