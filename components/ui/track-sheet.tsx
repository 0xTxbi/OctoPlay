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
	DiscIcon,
	InfoCircledIcon,
	PlayIcon,
} from "@radix-ui/react-icons";
import { TrackGeek } from "@/lib/hooks/useTrackGeek";
import Image from "next/image";
import { formatDate, formatDuration } from "@/lib/utils";
import Divider from "./divider";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ScrollArea } from "./scroll-area";
import { useState } from "react";
import AudioPlayer from "./audio-player";

export function TrackSheet({
	trackId,
	name,
	image,
	album,
	artwork,
	releaseDate,
	artist,
	duration,
	explicit,
	previewUrl,
	className,
	...props
}: TrackGeek) {
	const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="w-full bg-green-400">
					<InfoCircledIcon className="mr-2 h-4 w-4" />{" "}
					Stats
				</Button>
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>Track Info</SheetTitle>
					<SheetDescription>
						Stats on this track
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
									<h2 className="text-lg">
										{
											name
										}
									</h2>
									<span className="flex items-center">
										<DiscIcon className="mr-2 h-3 w-3" />
										<h3 className="text-xs">
											{
												album
											}
										</h3>
									</span>
								</div>
								<Button
									onClick={() =>
										setIsAudioPlayerVisible(
											!isAudioPlayerVisible
										)
									}
									className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
								>
									<PlayIcon className="h-12 w-12" />
								</Button>
							</div>
							<Divider />
							<ScrollArea className="h-10">
								{artist?.map(
									(
										artiste
									) => (
										<div
											key={
												artiste.id
											}
											className="flex items-center space-x-2"
										>
											<Avatar>
												<AvatarImage
													src={
														artiste
															?.images[1]
															.url
													}
													alt={`image of ${name}`}
												/>
												<AvatarFallback>
													0x
												</AvatarFallback>
											</Avatar>
											<h3 className="text-xs">
												{
													artiste?.name
												}
											</h3>
										</div>
									)
								)}
							</ScrollArea>
							<Divider />
							<span className="flex items-center">
								<CalendarIcon className="mr-2 h-4 w-4" />
								<h3 className="text-sm">
									{formatDate(
										releaseDate
									)}
								</h3>
							</span>
							<span className="flex items-center">
								<ClockIcon className="mr-2 h-4 w-4" />
								<h3 className="text-sm">
									{formatDuration(
										duration
									)}
								</h3>
							</span>

							<Divider />
							{/* badges */}
							<div className="space-x-2">
								{/* todo: properly guage popularity */}
								{/* <Badge>popular</Badge> */}
								<Badge>
									{explicit ===
									true
										? "explicit"
										: "not explicit"}
								</Badge>
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
			{isAudioPlayerVisible && <AudioPlayer />}
		</Sheet>
	);
}
