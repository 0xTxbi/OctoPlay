import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { DiscIcon } from "@radix-ui/react-icons";

type ArtistAlbumCardProps = React.ComponentProps<typeof Card>;

export interface ArtistAlbumCardComponentProps extends ArtistAlbumCardProps {
	albumId: string;
	name: string;
	artwork: string;
	numberOfTracks: string;
}

export function ArtistAlbumCard({
	albumId,
	name,
	artwork,
	numberOfTracks,
	className,
	...props
}: ArtistAlbumCardComponentProps) {
	return (
		<>
			<Card
				className={cn("", className)}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md object-cover"
						src={artwork}
						alt="Picture of the author"
						width={300}
						height={300}
					/>
				</CardHeader>
				<CardContent className="grid gap-1 mt-5">
					<h2 className="scroll-m-20 text-xs font-semibold tracking-normal">
						{name}
					</h2>
					<span className="flex items-center">
						<DiscIcon className="mr-1 h-3 w-3" />
						<h3 className="text-[11px] font-extralight">
							{`${numberOfTracks} tracks`}
						</h3>
					</span>
				</CardContent>
			</Card>
		</>
	);
}
