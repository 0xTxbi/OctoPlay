import {
  Badge,
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
  Progress,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineDotChart } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { getArtist } from "../../requests";
import { formatFigure } from "../../utils/utils";
import ArtistOverviewDrawer from "../ArtistOverviewDrawer";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchArtistData = async () => {
      const data = await getArtist(artistID);
      setArtistData(data?.data);

      return { data };
    };

    fetchArtistData();
  }, [artistID]);

  console.log(artistData);
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
          <ButtonGroup>
            <IconButton
              onClick={() => onOpen()}
              aria-label="View Full Stats"
              bg={"green.500"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              icon={<Icon as={AiOutlineDotChart} />}
            />
            <Link href={uri} isExternal>
              <IconButton
                aria-label="View Full Stats"
                bg={"green.500"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                icon={<Icon as={FaSpotify} />}
              />
            </Link>
          </ButtonGroup>
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

      <ArtistOverviewDrawer
        isOpen={isOpen}
        onClose={onClose}
        artistID={artistID}
        artistImage={artistData?.images[0]?.url}
        name={artistData?.name}
        popularity={artistData?.popularity}
        followers={artistData?.followers?.total}
        uri={artistData?.uri}
      />
    </Center>
  );
}

export default TopArtistsCard;
