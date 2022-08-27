import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { getArtist } from "../../requests";
import { formatFigure } from "../../utils/utils";

function TopArtistsCard({
  artistID,
  name,
  artistImage,
  genre,
  popularity,
  followers,
  uri,
}) {
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
        <Image h={"150px"} w={"full"} src={artistImage} objectFit={"cover"} />
        <Flex justify={"center"} mt={-4}>
          <Link href={uri} isExternal>
            <Button
              w={"full"}
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
              Visit Artist's Profile
            </Button>
          </Link>
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
              {name}
            </Heading>
          </Stack>

          <Stack direction={"column"} justify={"center"} spacing={2}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600} fontSize="sm">
                {formatFigure(followers)}
              </Text>
              <Text fontSize={"xs"} color={"gray.500"}>
                followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Badge variant="subtle" colorScheme="green">
                {genre}
              </Badge>
              <Text fontSize={"xs"} color={"gray.500"}>
                main genre
              </Text>
            </Stack>
          </Stack>

          <Stack my={5} mx={5}>
            <Progress
              value={popularity}
              size="sm"
              isAnimated
              hasStripe
              colorScheme="green"
            />
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

export default TopArtistsCard;
