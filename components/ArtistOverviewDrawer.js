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
import { useArtistAlbums } from "../hooks/artists/useArtistAlbums";
import { useArtistTopTracks } from "../hooks/artists/useArtistTopTracks";
import { useRelatedArtists } from "../hooks/artists/useRelatedArtists";
import {
  convertReleaseDate,
  convertReleaseDateToYear,
  formatFigure,
  truncateText,
} from "../utils/utils";
import Carousel from "./Carousel";

function ArtistOverviewDrawer({
  isOpen,
  onClose,
  artistID,
  name,
  popularity,
  followers,
  artistImage,
  uri,
}) {
  const { artistAlbums } = useArtistAlbums(artistID, 5);
  const { artistTopTracks } = useArtistTopTracks(artistID);
  const { relatedArtists } = useRelatedArtists(artistID);

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
              <VStack spacing="10px">
                <Avatar size="xl" src={artistImage} name={name} />
                <Heading>{name}</Heading>
                <CircularProgress
                  value={popularity}
                  color={popularity >= 75 ? "green.500" : "orange.500"}
                  size="50"
                  thickness="7px"
                >
                  <CircularProgressLabel>{popularity}</CircularProgressLabel>
                </CircularProgress>
                <Badge colorScheme="green">
                  <Text fontSize="sm">{`${formatFigure(
                    followers
                  )} followers`}</Text>
                </Badge>
              </VStack>

              {/* Albums */}
              <VStack pt="5rem">
                {artistAlbums && artistAlbums?.length > 0 ? (
                  <>
                    <Heading>Albums</Heading>
                    <TableContainer pt={5}>
                      <Table variant="simple" overflow="scroll" size="sm">
                        <Thead>
                          <Tr>
                            <Th></Th>
                            <Th>Name</Th>
                            <Th>Release Date</Th>
                            <Th isNumeric>No of Tracks</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {artistAlbums?.map((album) => (
                            <Tr>
                              <Td>
                                <Image
                                  src={album?.images[0]?.url}
                                  boxSize="50px"
                                />
                              </Td>
                              <Td>{truncateText(album?.name, 25)}</Td>
                              <Td>{convertReleaseDate(album?.release_date)}</Td>
                              <Td isNumeric>{album?.total_tracks}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </>
                ) : (
                  <Heading>No albums yet</Heading>
                )}
              </VStack>

              {/* Top tracks */}
              <VStack pt="5rem">
                {artistTopTracks && artistTopTracks?.length > 0 ? (
                  <>
                    <Heading>Top Tracks</Heading>
                    <TableContainer pt={5}>
                      <Table variant="simple" overflow="scroll" size="sm">
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th>Album</Th>
                            <Th>Year</Th>
                            <Th isNumeric>Popularity</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {artistTopTracks?.map((track) => (
                            <Tr>
                              <Td>{truncateText(track?.name, 20)}</Td>
                              <Td>{truncateText(track?.album?.name, 15)}</Td>
                              <Td>
                                {convertReleaseDateToYear(
                                  track?.album?.release_date
                                )}
                              </Td>
                              <Td isNumeric>
                                <Progress
                                  value={track?.popularity}
                                  colorScheme={
                                    track?.popularity >= 75 ? "green" : "orange"
                                  }
                                  size="sm"
                                />
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </>
                ) : (
                  <Heading>No top tracks yet</Heading>
                )}
              </VStack>

              {/* Related Artists */}
              <VStack pt="5rem">
                <Heading>Related Artists</Heading>
                <Container>
                  <Carousel variant="custom">
                    {relatedArtists?.artists?.map((artist) => (
                      <Box h="auto" bg="transparent">
                        <Tooltip label={artist?.name}>
                          <Avatar
                            src={artist?.images[0]?.url}
                            size="xl"
                            mb={5}
                            name={artist?.name}
                          >
                            <AvatarBadge
                              border="none"
                              bg={
                                artist?.popularity >= 85
                                  ? "green.400"
                                  : "orange.400"
                              }
                              boxSize="0.7em"
                            />
                          </Avatar>
                        </Tooltip>
                      </Box>
                    ))}
                  </Carousel>
                </Container>
              </VStack>
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
                  Visit Artist's Profile
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

export default ArtistOverviewDrawer;
