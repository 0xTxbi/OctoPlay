import React, { useEffect, useState } from "react";
import { useUserPlaylists } from "../../hooks/user/useUserPlaylists";
import Carousel from "../Carousel";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const { userPlaylists } = useUserPlaylists();

  return (
    <>
      <Carousel
        variant={userPlaylists?.items?.length === 1 ? "single" : "multiple"}
      >
        {userPlaylists?.items?.map((playlist) => (
          <>
            <PlaylistsCard
              key={playlist?.id}
              name={playlist?.name}
              description={playlist?.description}
              playlistImage={playlist?.images[0]?.url}
              isPublic={playlist?.public}
              isCollaborative={playlist?.collaborative}
              totalTracks={playlist?.tracks?.total}
              uri={playlist?.uri}
            />
          </>
        ))}
      </Carousel>
    </>
  );
}

export default Playlists;
