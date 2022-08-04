import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import PlaylistsCard from "./PlaylistsCard";

function Playlists() {
  const { data: session } = useSession();
  useEffect(() => {
    const fetchPlaylistsData = async () => {
      const data = await axios.get(`https://api.spotify.com/v1/me/playlists`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    };

    fetchPlaylistsData();
  }, []);

  return (
    <>
      <h1>Your Playlists</h1>
      <PlaylistsCard />
    </>
  );
}

export default Playlists;
