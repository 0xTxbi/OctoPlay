import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUsersTopArtists } from "../../requests";
import ArtistOverviewDrawer from "../ArtistOverviewDrawer";
import Carousel from "../Carousel";
import TopArtistsCard from "./TopArtistsCard";

function TopArtists() {
  const [topArtistsData, setTopArtistsData] = useState(null);
  const [dataRange, setDataRange] = useState("medium_term");
  const [filterTitle, setFilterTitle] = useState("Past 6 months");

  useEffect(() => {
    const fetchTopArtists = async () => {
      const limit = 10;
      const data = await getUsersTopArtists(limit, dataRange);
      setTopArtistsData(data?.data?.items);

      return { data };
    };

    fetchTopArtists();
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
      <Carousel variant={topArtistsData?.length === 1 ? "single" : "multiple"}>
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
