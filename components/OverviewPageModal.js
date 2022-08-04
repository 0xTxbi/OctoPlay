import {
  Button,
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
  console.log(content);
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {content === "TA" ? (
            <TopArtists />
          ) : content === "TT" ? (
            <TopTracks />
          ) : content === "PL" ? (
            <Playlists />
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OverviewPageModal;
