import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import TopArtistsCard from "./TopArtistsCard";

function TopArtists() {
  const { data: session } = useSession();
  useEffect(() => {
    const fetchTAData = async () => {
      const data = await axios.get(
        `https://api.spotify.com/v1/me/top/artists`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    };

    fetchTAData();
  }, []);

  return (
    <>
      <h1>Top Artists</h1>
      <TopArtistsCard />
    </>
  );
}

export default TopArtists;
