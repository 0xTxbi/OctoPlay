import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineDotChart } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { getArtist } from "../../requests";
import { convertDuration, convertReleaseDate } from "../../utils/utils";
import ArtistOverviewDrawer from "../ArtistOverviewDrawer";
import TrackDetailsDrawer from "../TrackDetailsDrawer";

function TopTracksCard({
  title,
  album,
  albumCover,
  artistID,
  duration,
  releaseDate,
  uri,
}) {
  const {
    isOpen: isTrackOpen,
    onOpen: onTrackOpen,
    onClose: onTrackClose,
  } = useDisclosure();
  const {
    isOpen: isArtistOpen,
    onOpen: onArtistOpen,
    onClose: onArtistClose,
  } = useDisclosure();
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      const data = await getArtist(artistID);
      setArtistData(data?.data);
      return { data };
    };

    fetchArtistData();
  }, [artistID]);

  return (
    <>
      <Center py={6}>
        <Box
          maxW={"290px"}
          h="360px"
          w={"full"}
          bg={"gray.800"}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image h={"150px"} w={"full"} src={albumCover} objectFit={"cover"} />
          <Flex justify={"center"} mt={-7}>
            <Avatar
              onClick={() => {
                onArtistOpen();
              }}
              size={"md"}
              src={artistData?.images[0]?.url}
              alt={"Author"}
              _hover={{ cursor: "pointer" }}
              css={{
                border: "1px solid white",
              }}
            />
          </Flex>

          <Box p={5}>
            <Stack spacing={0} align={"center"} mb={2}>
              <Heading
                fontSize={"xl"}
                fontWeight={500}
                fontFamily={"body"}
                textAlign="center"
                noOfLines={1}
              >
                {title}
              </Heading>
              <Text color={"gray.500"} fontSize="xs" noOfLines={1}>
                {album}
              </Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600} fontSize="sm">
                  {convertDuration(duration)}
                </Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                  minutes
                </Text>
              </Stack>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600} fontSize="sm">
                  {convertReleaseDate(releaseDate)}
                </Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                  date released
                </Text>
              </Stack>
            </Stack>

            <ButtonGroup>
              <Button
                w={"full"}
                onClick={() => onTrackOpen()}
                my={5}
                bg={"green.500"}
                size="sm"
                color={"white"}
                fontSize="sm"
                leftIcon={<Icon as={AiOutlineDotChart} />}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Nerd Stats
              </Button>
              <Link href={uri} isExternal>
                <Button
                  w={"full"}
                  my={5}
                  bg={"green.500"}
                  size="sm"
                  color={"white"}
                  fontSize="sm"
                  leftIcon={<Icon as={FaSpotify} />}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  View Track
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
        </Box>
      </Center>

      <ArtistOverviewDrawer
        isOpen={isArtistOpen}
        onClose={onArtistClose}
        artistID={artistID}
        artistImage={artistData?.images[0]?.url}
        name={artistData?.name}
        popularity={artistData?.popularity}
        followers={artistData?.followers?.total}
        uri={artistData?.uri}
      />

      <TrackDetailsDrawer isOpen={isTrackOpen} onClose={onTrackClose} />
    </>
  );
}

export default TopTracksCard;
