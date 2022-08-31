import {
  Badge,
  Box,
  Button,
  ButtonGroup,
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
import { FaPause, FaPlay, FaSpotify } from "react-icons/fa";
import ReactPlayer from "react-player";
import { getTrack, getTrackAudioFeatures } from "../requests";
import TrackChart from "./TrackChart";

function TrackDetailsDrawer({ isOpen, onClose, trackID, artistID, uri }) {
  const [trackInfo, setTrackInfo] = useState(null);
  const [trackFeatures, setTrackFeatures] = useState([]);
  const [playerControls, setPlayerControls] = useState({
    pip: false,
    playing: false,
    controls: false,
    light: false,
    muted: false,
    played: 0,
    loaded: 0,
    playbackRate: 1.0,
    loop: true,
  });

  const handlePlayPause = () => {
    setPlayerControls({ playing: !playerControls.playing });
  };

  const handlePlay = () => {
    setPlayerControls({ playing: true });
  };

  const handlePause = () => {
    setPlayerControls({ playing: false });
  };

  const trackFeaturesArr = [];

  // fetch user's market
  useEffect(() => {
    const fetchTrackInfoData = async () => {
      const data = await getTrack(trackID);
      setTrackInfo(data?.data);
    };

    const fetchTrackAudioFeaturesData = async () => {
      const data = await getTrackAudioFeatures(trackID);
      trackFeaturesArr.push(
        {
          name: "",
          value: 0,
        },
        {
          name: "Instrumentalness",
          value: data?.data?.instrumentalness,
        },
        {
          name: "Danceability",
          value: data?.data?.danceability,
        },
        {
          name: "Speechiness",
          value: data?.data?.speechiness,
        },
        {
          name: "Liveness",
          value: data?.data?.liveness,
        },
        {
          name: "Acousticness",
          value: data?.data?.acousticness,
        },
        {
          name: "",
          value: 0,
        }
      );

      setTrackFeatures([...trackFeaturesArr]);
    };

    fetchTrackInfoData().then(fetchTrackAudioFeaturesData());
  }, [artistID]);

  const { playing, loop } = playerControls;

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="lg"
        closeOnOverlayClick={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack py={6}>
              {/* Quick Stats */}
              <Container mb="7rem">
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
                      {trackInfo?.preview_url && (
                        <IconButton
                          onClick={() => handlePlayPause()}
                          bg="green.500"
                          size="lg"
                          color="white"
                          rounded="full"
                          fontSize="sm"
                          icon={
                            playerControls?.playing ? (
                              <Icon as={FaPause} />
                            ) : (
                              <Icon as={FaPlay} />
                            )
                          }
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg",
                          }}
                        />
                      )}
                      <ReactPlayer
                        style={{
                          display: "none",
                        }}
                        url={trackInfo?.preview_url}
                        onPlay={handlePlay}
                        onPause={handlePause}
                        playing={playing}
                        loop={loop}
                      />
                    </Box>
                  </HStack>
                </Flex>
              </Container>
              {/* Quick Stats */}

              {/* Chart */}
              <Container centerContent>
                <Heading fontSize="2xl" mb={2}>
                  Audio Features
                </Heading>
                <TrackChart trackFeaturesData={trackFeatures} />
              </Container>
              {/* Chart */}
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
