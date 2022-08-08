import {
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaSpotify } from "react-icons/fa";
import { BsDisc } from "react-icons/bs";

function PlaylistsCard({
  name,
  description,
  playlistImage,
  isPublic,
  isCollaborative,
  totalTracks,
  uri,
}) {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        h="355px"
        w={"full"}
        bg={"gray.800"}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"150px"} w={"full"} src={playlistImage} objectFit={"cover"} />

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
            <Text color={"gray.500"} fontSize="xs" noOfLines={1}>
              {description}
            </Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6} mt={5}>
            <Badge colorScheme="blue">
              <Icon as={BsDisc} mr={1} /> {totalTracks} tracks
            </Badge>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6} mt={5}>
            <Stack spacing={0} align={"center"}>
              <Badge
                variant="subtle"
                colorScheme={isPublic === true ? "green" : "red"}
              >
                public
              </Badge>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Badge
                variant="outline"
                colorScheme={isCollaborative === true ? "green" : "red"}
              >
                collaborative
              </Badge>
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
              View on Spotify
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}

export default PlaylistsCard;
