import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { getArtist } from "../../requests";
import { convertDuration, convertReleaseDate } from "../../utils/utils";
import ArtistOverviewDrawer from "../ArtistOverviewDrawer";

function TopTracksCard({
  title,
  album,
  albumCover,
  artistID,
  duration,
  releaseDate,
  uri,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      const data = await getArtist(artistID);
      console.log(data?.data);
      setArtistData(data?.data);
      return { data };
    };

    fetchArtistData();

    console.log(artistData);
  }, [artistID]);

  return (
    <>
      <Center py={6}>
        <Box
          maxW={"270px"}
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
                onOpen();
              }}
              size={"md"}
              src={artistData?.images[0]?.url}
              alt={"Author"}
              _hover={{ cursor: "pointer" }}
              css={{
                border: "2px solid white",
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
                Listen on Spotify
              </Button>
            </Link>
          </Box>
        </Box>
      </Center>

      <ArtistOverviewDrawer
        isOpen={isOpen}
        onClose={onClose}
        artistImage={artistData?.images[0]?.url}
        name={artistData?.name}
        popularity={artistData?.popularity}
        followers={artistData?.followers?.total}
        uri={artistData?.uri}
      />
    </>
  );
}

export default TopTracksCard;
