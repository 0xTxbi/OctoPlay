import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import Playlists from "./playlists/Playlists";
import TopArtists from "./top-artists/TopArtists";
import TopTracks from "./top-tracks/TopTracks";

function OverviewPageModal({ isOpen, onClose, title, content }) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent maxW="80vw">
        <ModalHeader>
          <Heading as="h2" textAlign="center">
            {title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody w={"90%"}>
          {content === "TA" ? (
            <TopArtists />
          ) : content === "TT" ? (
            <TopTracks />
          ) : content === "PL" ? (
            <Playlists />
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} bg="green.500" _hover={{ bg: "green.600" }}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OverviewPageModal;
