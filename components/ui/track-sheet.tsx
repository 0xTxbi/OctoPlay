import { useEffect, useRef, useState } from "react";
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
	InfoCircledIcon,
} from "@radix-ui/react-icons";
import { TrackGeek } from "@/lib/hooks/useTrackGeek";
import Image from "next/image";
import { formatDate, formatDuration } from "@/lib/utils";
import Divider from "./divider";
import { Badge } from "./badge";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ScrollArea } from "./scroll-area";
import { Progress } from "./progress";
import {
	IconPlayerPause,
	IconPlayerPlay,
	IconVinyl,
} from "@tabler/icons-react";

const TRACK_PREVIEW_DURATION = 30;

export function TrackSheet({
	name,
	image,
	album,
	releaseDate,
	artist,
	duration,
	explicit,
	previewUrl,
	className,
	audioFeatures,
}: TrackGeek) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const requestRef = useRef<number | null>(null);

	const { acousticness, danceability, tempo, liveness, energy } =
		audioFeatures;

	const handlePlayPause = () => {
		const audio = audioRef.current;

		if (audio) {
			if (isPlaying) {
				audio.pause();
				setIsPlaying(false);
			} else {
				audio.play();
				setIsPlaying(true);
				requestRef.current =
					requestAnimationFrame(
						updateCurrentTime
					);
			}
		}
	};

	const updateCurrentTime = () => {
		const audio = audioRef.current;
		if (audio) {
			setCurrentTime(audio.currentTime);
			requestRef.current =
				requestAnimationFrame(updateCurrentTime);
		}
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (audio) {
			audio.addEventListener("ended", () => {
				setIsPlaying(false);
				cancelAnimationFrame(requestRef.current!);
			});
		}

		return () => {
			if (audio) {
				audio.removeEventListener("ended", () => {
					setIsPlaying(false);
					cancelAnimationFrame(
						requestRef.current!
					);
				});
			}
		};
	}, []);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="w-full bg-green-400 text-xs lg:text-sm">
					<InfoCircledIcon className="mr-1 lg:mr-2 h-4 w-4" />{" "}
					Stats
				</Button>
			</SheetTrigger>
			<SheetContent
				className="flex flex-col"
				onPointerDownOutside={(e) => e.preventDefault()}
			>
				<SheetHeader>
					<SheetTitle>Track Info</SheetTitle>
					<SheetDescription>
						Stats on this track
					</SheetDescription>
				</SheetHeader>
				<ScrollArea>
					<div className="grid gap-4 py-4">
						<div className="space-y-4">
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
										<IconVinyl className="mr-2 h-3 w-3" />
										<h3 className="text-xs">
											{
												album
											}
										</h3>
									</span>
								</div>
								<Button
									onClick={
										handlePlayPause
									}
									className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
								>
									{isPlaying ? (
										<IconPlayerPause className="h-12 w-12" />
									) : (
										<IconPlayerPlay className="h-12 w-12" />
									)}
								</Button>
							</div>
							<audio
								ref={audioRef}
								src={previewUrl}
								hidden
							/>
							<Progress
								value={
									(currentTime /
										TRACK_PREVIEW_DURATION) *
									100
								}
							/>
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
													className="object-cover"
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
							<div className="space-x-2">
								<Badge>
									{explicit ===
									true
										? "explicit"
										: "not explicit"}
								</Badge>
							</div>
							<Divider />
							<div className="flex flex-col space-y-4">
								<div>
									<h4 className="text-xs mb-1">
										Acousticness
									</h4>
									<Progress
										value={
											acousticness *
											100
										}
									/>
								</div>
								<div>
									<h4 className="text-xs mb-1">
										Danceability
									</h4>
									<Progress
										value={
											danceability *
											100
										}
									/>
								</div>
								<div>
									<h4 className="text-xs mb-1">
										Energy
									</h4>
									<Progress
										value={
											energy *
											100
										}
									/>
								</div>
								<div>
									<h4 className="text-xs mb-1">
										Tempo
									</h4>
									<Progress
										value={
											tempo
										}
									/>
								</div>
								<div>
									<h4 className="text-xs mb-1">
										Liveness
									</h4>
									<Progress
										value={
											liveness *
											100
										}
									/>
								</div>
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
