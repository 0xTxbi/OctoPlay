import React, { useEffect, useState } from "react";
import { getUsersPlaylists } from "../../requests";
import Carousel from "../Carousel";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const [playlistsData, setPlaylistsData] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await getUsersPlaylists();
      setPlaylistsData(data?.data?.items);
    };

    fetchPlaylists();
  }, []);

  return (
    <Carousel variant={playlistsData?.length === 1 ? "single" : "multiple"}>
      {playlistsData?.map((playlist) => (
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
  );
}

export default Playlists;
