import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
	CalendarIcon,
	ClockIcon,
	ExternalLinkIcon,
	InfoCircledIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Divider from "./divider";
import { Badge } from "./badge";
import { ScrollArea } from "./scroll-area";
import { ArtistGeek } from "@/lib/hooks/useArtistGeek";
import VerifiedIcon from "./icons/verified-icon";
import Link from "next/link";
import { IconTags, IconVinyl } from "@tabler/icons-react";
import { ArtistAlbumCard } from "./artist-album-card";

export function ArtistSheet({
	artistId,
	name,
	image,
	followers,
	genres,
	popularity,
	uri,
	albums,
	className,
	...props
}: ArtistGeek) {
	console.log(albums);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="w-full bg-green-400">
					<InfoCircledIcon className="mr-2 h-4 w-4" />
					Stats
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>Artist Info</SheetTitle>
					<SheetDescription>
						Stats on this artist
					</SheetDescription>
				</SheetHeader>
				<ScrollArea>
					<div className="grid gap-4 py-4">
						<div className="space-y-4">
							{/* track basic info */}
							<Image
								alt={`album cover of ${name}`}
								src={image}
								width={640}
								height={640}
								className="rounded-md"
							/>
							<div className="flex space place-content-between">
								<div className="flex flex-col">
									<div className="flex space-x-1 items-center">
										<h2 className="scroll-m-20 text-2xl font-semibold tracking-normal">
											{
												name
											}
										</h2>
										<VerifiedIcon />
									</div>
									<span className="flex items-center">
										<Badge variant="secondary">
											{`${followers} followers`}
										</Badge>
									</span>
								</div>
								<Link
									href={
										uri
									}
								>
									<Button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
										<ExternalLinkIcon className="h-12 w-12" />
									</Button>
								</Link>
							</div>
							<Divider />
							<span className="flex items-center">
								<IconTags className="mr-2 h-4 w-4" />
								<h3 className="text-lg font-medium tracking-normal">
									Genres
								</h3>
							</span>
							<div>
								{genres.map(
									(
										genre
									) => (
										<Badge className="mr-2">
											{
												genre
											}
										</Badge>
									)
								)}
							</div>
							<Divider />
							<span className="flex items-center">
								<IconVinyl className="mr-2 h-4 w-4" />
								<h3 className="text-lg font-medium tracking-normal">
									Albums
								</h3>
							</span>
							<div>
								{albums.map(
									(
										album
									) => (
										<ArtistAlbumCard
											name={
												album.name
											}
											artwork={
												album
													.images[1]
													.url
											}
											albumId={
												album.id
											}
										/>
									)
								)}
							</div>
							<span className="flex items-center">
								<CalendarIcon className="mr-2 h-4 w-4" />
								<h3 className="text-sm"></h3>
							</span>
							<span className="flex items-center">
								<ClockIcon className="mr-2 h-4 w-4" />
								<h3 className="text-sm"></h3>
							</span>

							<Divider />
							{/* badges */}
							<div className="space-x-2">
								{/* todo: properly guage popularity */}
								{/* <Badge>popular</Badge> */}
								<Badge></Badge>
							</div>
						</div>
					</div>
				</ScrollArea>
				<SheetFooter className="mt-auto">
					<SheetClose asChild>
						<Button className="bg-green-500">
							Close
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
