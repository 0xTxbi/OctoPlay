import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Progress,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { getArtistAlbums, getUsersProfile } from "../requests";
import { convertReleaseDate, formatFigure, truncateText } from "../utils/utils";

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
  const [artistAlbums, setArtistAlbums] = useState(null);
  const [userMarket, setUserMarket] = useState(null);
  // console.log(artistID);

  useEffect(() => {
    // fetch user's market
    const fetchUserMarket = async () => {
      const data = await getUsersProfile();
      setUserMarket(data?.data?.country);
    };

    fetchUserMarket();
  }, [artistID]);

  useEffect(() => {
    const fetchArtistAlbumData = async () => {
      const data = await getArtistAlbums(artistID, userMarket, 5);
      setArtistAlbums(data?.data?.items);
      return { data };
    };

    fetchArtistAlbumData();
  }, [artistID]);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
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
                  color="green.500"
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
                {artistAlbums !== null && artistAlbums.length > 0 ? (
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
