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
} from "@chakra-ui/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { convertDuration, convertReleaseDate } from "../../utils/utils";

function TopTracksCard({
  title,
  album,
  albumCover,
  artistID,
  duration,
  releaseDate,
  uri,
}) {
  const { data: session } = useSession();
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      const data = await axios.get(
        `https://api.spotify.com/v1/artists/${artistID}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setArtistData(data?.data);

      return { data };
    };

    fetchArtistData();
  }, []);

  return (
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
            size={"md"}
            src={artistData?.images[0]?.url}
            alt={"Author"}
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
            <Text color={"gray.500"} fontSize="xs">
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
  );
}

export default TopTracksCard;
