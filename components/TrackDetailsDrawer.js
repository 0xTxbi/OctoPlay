import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Heading,
  Icon,
  Image,
  Link,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import {
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtists,
  getUsersProfile,
} from "../requests";
import {
  convertReleaseDate,
  convertReleaseDateToYear,
  formatFigure,
  truncateText,
} from "../utils/utils";
import Carousel from "./Carousel";

function TrackDetailsDrawer({
  isOpen,
  onClose,
  artistID,
  name,
  popularity,
  followers,
  artistImage,
  uri,
}) {
  const [userMarket, setUserMarket] = useState(null);

  // fetch user's market
  useEffect(() => {
    const fetchUserMarket = async () => {
      const data = await getUsersProfile();
      setUserMarket(data?.data?.country);
    };

    fetchUserMarket();
  }, []);

  // // fetch artist's albums
  // useEffect(() => {
  //   const fetchArtistAlbumData = async () => {
  //     const data = await getArtistAlbums(artistID, userMarket, 5);
  //     setArtistAlbums(data?.data?.items);

  //     return { data };
  //   };

  //   const fetchArtistTopTracksData = async () => {
  //     const data = await getArtistTopTracks(artistID, userMarket);
  //     setArtistTopTracks(data?.data?.tracks);
  //     return { data };
  //   };

  //   const fetchRelatedArtistsData = async () => {
  //     const data = await getRelatedArtists(artistID);
  //     setRelatedArtists(data?.data?.artists);
  //     return { data };
  //   };

  //   fetchArtistAlbumData()
  //     .then(fetchArtistTopTracksData())
  //     .then(fetchRelatedArtistsData());
  // }, []);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack py={6}>{/* Quick Stats */}</VStack>
          </DrawerBody>

          <DrawerFooter>
            <ButtonGroup>
              <Link href={uri} isExternal>
                <Button
                  w={"full"}
                  bg={"green.500"}
                  color={"white"}
                  fontSize="sm"
                  leftIcon={<Icon as={FaSpotify} />}
                  rounded={"md"}
                  _hover={{
                    boxShadow: "lg",
                  }}
                >
                  Listen on Spotify
                </Button>
              </Link>
              <Button
                colorScheme="green"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default TrackDetailsDrawer;
