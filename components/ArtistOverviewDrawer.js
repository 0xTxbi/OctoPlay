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
  Icon,
  Progress,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { formatFigure } from "../utils/utils";

function ArtistOverviewDrawer({
  isOpen,
  onClose,
  name,
  popularity,
  followers,
  artistImage,
  uri,
}) {
  useEffect(() => {});
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{name}</DrawerHeader>

          <DrawerBody>
            <Center py={6}>
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
            </Center>
          </DrawerBody>

          <DrawerFooter>
            <ButtonGroup>
              <Button
                w={"full"}
                bg={"green.500"}
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
