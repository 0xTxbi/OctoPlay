import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import TopArtistsCard from "./TopArtistsCard";

function TopArtists() {
  const { data: session } = useSession();
  const [topArtistsData, setTopArtistsData] = useState(null);
  const [dataRange, setDataRange] = useState("medium_term");
  const [filterTitle, setFilterTitle] = useState("Past 6 months");

  useEffect(() => {
    const fetchTAData = async () => {
      const limit = 10;
      const data = await axios.get(
        `https://api.spotify.com/v1/me/top/artists?time_range=${dataRange}&limit=${limit}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTopArtistsData(data?.data?.items);

      return { data };
    };

    fetchTAData();
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
        {topArtistsData?.map((topArtist) => (
          <>
            <TopArtistsCard
              key={topArtist?.id}
              artistID={topArtist?.id}
              name={topArtist?.name}
              artistImage={topArtist?.images[0]?.url}
              genre={topArtist?.genres[0]}
              popularity={topArtist?.popularity}
              followers={topArtist?.followers?.total}
              uri={topArtist?.uri}
            />
          </>
        ))}
      </Carousel>
    </>
  );
}

export default TopArtists;
