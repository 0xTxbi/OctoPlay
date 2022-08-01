import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { BsSpotify } from "react-icons/bs";

function UnauthenticatedScreen() {
  const { data: session, status } = useSession();
  console.log(session);
  useEffect(() => {
    // Force sign in if an error was encountered while refreshing access token
    if (session?.error === "RefreshAccessTokenError") {
      signIn();
    }
  }, [session]);

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            This is <br />
            <Text as={"span"}>
              Octo<span style={{ color: "#48bb78" }}>Play</span>.
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            the essential Spotify analytics tool built on its{" "}
            <a href="https://developer.spotify.com/documentation/web-api/">
              official API
            </a>
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              onClick={() => signIn("spotify")}
              colorScheme={"green"}
              leftIcon={<Icon as={BsSpotify} />}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Sign In With Your Spotify Account
            </Button>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default UnauthenticatedScreen;
