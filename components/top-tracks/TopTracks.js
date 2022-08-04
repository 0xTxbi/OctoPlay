import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import TopTracksCard from "./TopTracksCard";

function TopTracks() {
  const { data: session } = useSession();
  useEffect(() => {
    const fetchTTData = async () => {
      const data = await axios.get(`https://api.spotify.com/v1/me/top/tracks`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session?.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    };

    fetchTTData();
  }, []);

  return (
    <>
      <h1>Top Tracks</h1>
      <TopTracksCard />
    </>
  );
}

export default TopTracks;
