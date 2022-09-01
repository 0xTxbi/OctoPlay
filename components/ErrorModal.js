import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { BsSpotify } from "react-icons/bs";

function ErrorModal({ error }) {
  console.log(error);
  return (
    <Modal
      isOpen={error ? true : false}
      isCentered
      motionPreset="slideInBottom"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        {/* Render if internet connection is lost */}
        {error === "Network Error" && (
          <>
            <ModalHeader textAlign="center">Bad Internet</ModalHeader>
            <ModalBody mx={10} textAlign="center" mb={10}>
              <Text>Check your internet settings.</Text>
            </ModalBody>
          </>
        )}

        {/* Render if token has expired */}
        {error?.includes("401") && (
          <>
            <ModalHeader textAlign="center">Expired Session</ModalHeader>
            <ModalBody mx={10} textAlign="center">
              <Text>Please re-authenticate to continue.</Text>
              <Button
                onClick={() => signIn("spotify", { callbackUrl: "/" })}
                colorScheme={"green"}
                leftIcon={<Icon as={BsSpotify} />}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                mt={5}
                mb={5}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign In
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ErrorModal;
