import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from "../Carousel";
import TopTracksCard from "./TopTracksCard";

function TopTracks() {
  const { data: session } = useSession();
  const [topTracksData, setTopTracksData] = useState(null);
  const [dataRange, setDataRange] = useState("medium_term");
  const [filterTitle, setFilterTitle] = useState("Past 6 months");

  useEffect(() => {
    const fetchTTData = async () => {
      const limit = 10;
      const data = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?time_range=${dataRange}&limit=${limit}`,
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
  }, [dataRange]);

  return (
    <>
      <Flex justifyContent={"flex-end"}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="green.500"
          >
            {filterTitle}
          </MenuButton>
          <MenuList>
            <MenuItem
              isDisabled={filterTitle === "All time" && true}
              onClick={() => {
                setDataRange("long_term");
                setFilterTitle("All time");
              }}
            >
              All time
            </MenuItem>
            <MenuItem
              isDisabled={filterTitle === "Past 6 months" && true}
              onClick={() => {
                setDataRange("medium_term");
                setFilterTitle("Past 6 months");
              }}
            >
              Last 6 months
            </MenuItem>
            <MenuItem
              isDisabled={filterTitle === "Past month" ? true : false}
              onClick={() => {
                setDataRange("short_term");
                setFilterTitle("Past month");
              }}
            >
              Past month
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Carousel>
        {topTracksData?.map((topTrack) => (
          <>
            <TopTracksCard
              key={topTrack?.id}
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
      </Carousel>
    </>
  );
}

export default TopTracks;