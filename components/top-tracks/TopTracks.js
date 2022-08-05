import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useState } from "react";
import TopTracksCard from "./TopTracksCard";

function TopTracks() {
  const { data: session } = useSession();
  const [topTracksData, setTopTracksData] = useState(null);

  useEffect(() => {
    const fetchTTData = async () => {
      const limit = 10;
      const data = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTopTracksData(data?.data?.items);

      return { data };
    };

    fetchTTData();
  }, []);

  return (
    <>
      <h1>Top Tracks</h1>
      {topTracksData?.map((topTrack) => (
        <>
          <TopTracksCard
            title={topTrack?.name}
            album={topTrack?.album?.name}
            albumCover={topTrack?.album?.images[0]?.url}
            artistID={topTrack?.artists[0]?.id}
            duration={topTrack?.duration_ms}
            releaseDate={topTrack?.album?.release_date}
            uri={topTrack?.uri}
          />
        </>
      ))}
    </>
  );
}

export default TopTracks;
