import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import CardSkeleton from "./card-skeleton";
import usePlaylists from "@/lib/hooks/useUserPlaylists";
import { UserPlaylistsCard } from "./user-playlist-card";

type UserPlaylistsProps = React.ComponentProps<typeof Card>;

export function UserPlaylists({ className, ...props }: UserPlaylistsProps) {
	const { playlistsInfo, playlistsLoading, error } = usePlaylists();

	return (
		<>
			{playlistsLoading ? (
				<CardSkeleton mode="artists" />
			) : (
				<div className="container">
					<Carousel
						opts={{
							align: "center",
							slidesToScroll: 1,
							loop: true,
							containScroll:
								"trimSnaps",
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
						className="w-full -ml-1"
					>
						<CarouselContent>
							{playlistsInfo?.map(
								(playlist) => (
									<CarouselItem
										key={
											playlist.id
										}
										className="md:basis-1/3 lg:basis-1/3"
									>
										<div className="p-1">
											<UserPlaylistsCard
												key={
													playlist.id
												}
												id={
													playlist.id
												}
												name={
													playlist.name
												}
												description={
													playlist.description
												}
												isPublic={
													playlist.isPublic
												}
												tracks={
													playlist.tracks
												}
												images={
													playlist.images
												}
											/>
										</div>
									</CarouselItem>
								)
							)}
						</CarouselContent>

						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			)}
		</>
	);
}
