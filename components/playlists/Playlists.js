import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const { data: session } = useSession();
  const [playlistsData, setPlaylistsData] = useState(null);
  useEffect(() => {
    const fetchPlaylistsData = async () => {
      const data = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setPlaylistsData(data?.data?.items);
    };

    fetchPlaylistsData();
  }, []);

  return (
    <Carousel>
      {playlistsData?.map((playlist) => (
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
      ))}
    </Carousel>
  );
}

export default Playlists;
