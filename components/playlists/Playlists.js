import React, { useEffect, useState } from "react";
import { getUsersPlaylists } from "../../requests";
import Carousel from "../Carousel";
import Loader from "../Loader";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const [playlistsData, setPlaylistsData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(loading);

  useEffect(() => {
    setLoading(true);
    const fetchPlaylists = async () => {
      const data = await getUsersPlaylists();
      setPlaylistsData(data?.data?.items);
      console.log(data);
    };

    setTimeout(() => {
      fetchPlaylists();

      // setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  } else if (!loading) {
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
}

export default Playlists;
