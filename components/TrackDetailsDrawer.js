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
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";
import {
  getArtistAlbums,
  getArtistTopTracks,
  getRelatedArtists,
  getTrack,
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
  trackID,
  artistID,
  artistImage,
  uri,
}) {
  const [trackInfo, setTrackInfo] = useState(null);

  // fetch user's market
  useEffect(() => {
    const fetchTrackInfo = async () => {
      const data = await getTrack(trackID);
      setTrackInfo(data?.data);
    };

    fetchTrackInfo();
  }, [artistID]);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack py={6}>
              {/* Quick Stats */}
              <Container>
                <Flex>
                  <HStack>
                    <Image
                      src={trackInfo?.album?.images[0]?.url}
                      boxSize="120px"
                      borderRadius="sm"
                    />
                    <Box alignSelf="end">
                      <Heading fontSize="2xl">{trackInfo?.name}</Heading>
                      <Badge
                        mr={2}
                        colorScheme={
                          trackInfo?.popularity >= 70 ? "green" : "orange"
                        }
                      >
                        {trackInfo?.popularity >= 70
                          ? "Popular"
                          : "Quite Popular"}
                      </Badge>
                      <Badge
                        colorScheme={
                          trackInfo?.explicit === true ? "red" : "green"
                        }
                      >
                        {trackInfo?.explicit === true
                          ? "Explicit"
                          : "Not Explicit"}
                      </Badge>
                      <Text color="gray.300" fontSize="md">
                        {trackInfo?.album?.name}
                      </Text>
                      <Text color="gray.300" fontSize="xs">
                        {trackInfo?.artists[0]?.name}
                      </Text>
                    </Box>
                  </HStack>

                  <Spacer />
                  <HStack>
                    <Box alignSelf="end" textAlign="right">
                      <IconButton
                        bg="green.500"
                        size="lg"
                        color="white"
                        rounded="full"
                        fontSize="sm"
                        icon={<Icon as={FaPlay} />}
                        _hover={{
                          transform: "translateY(-2px)",
                          boxShadow: "lg",
                        }}
                      />
                    </Box>
                  </HStack>
                </Flex>
              </Container>
            </VStack>
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
