import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useUserTopTracks } from "../../hooks/user/useUserTopTracks";
import Carousel from "../Carousel";
import Loader from "../Loader";
import TopTracksCard from "./TopTracksCard";

function TopTracks() {
  // const [topTracksData, setTopTracksData] = useState(null);
  const [dataRange, setDataRange] = useState("medium_term");
  const [filterTitle, setFilterTitle] = useState("Past 6 months");
  const limit = 10;
  const {
    topTracks: topTracksData,
    isLoading,
    isError,
  } = useUserTopTracks(limit, dataRange);

  if (isLoading) return <Loader />;
  if (isError) console.log("error");
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
      <Carousel variant={topTracksData?.length === 1 ? "single" : "multiple"}>
        {topTracksData?.items?.map((topTrack) => (
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
        ))}
      </Carousel>
    </>
  );
}

export default TopTracks;
