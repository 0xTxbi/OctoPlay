import { Card } from "@/components/ui/card";
import Carousel from "./carousel";
import React from "react";
import CardSkeleton from "./card-skeleton";
import usePlaylists from "@/lib/hooks/useUserPlaylists";
import { UserPlaylistsCard } from "./user-playlist-card";

type UserPlaylistsProps = React.ComponentProps<typeof Card>;

export function UserPlaylists({ className, ...props }: UserPlaylistsProps) {
	const { playlistsInfo, playlistsLoading, error } = usePlaylists();
	console.log(playlistsInfo);

	return (
		<>
			{playlistsLoading ? (
				<CardSkeleton mode="artists" />
			) : (
				<Carousel>
					{playlistsInfo?.map((playlist) => (
						<UserPlaylistsCard
							key={playlist.id}
							id={playlist.id}
							name={playlist.name}
							description={
								playlist.description
							}
							isPublic={
								playlist.isPublic
							}
							tracks={playlist.tracks}
							images={playlist.images}
						/>
					))}
				</Carousel>
			)}
		</>
	);
}
