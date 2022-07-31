import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import NextLink from "next/link";
import { GiRocketThruster } from "react-icons/gi";

function AuthenticatedScreen() {
  const { status } = useSession();
  const toast = useToast();
  const id = "auth-toast";

  /* Display toast component on successful sign in */
  {
    status === "authenticated" && !toast.isActive(id)
      ? toast({
          id,
          title: "You're signed in with your Spotify account.",
          description: "click 'Get Started' button to proceed.",
          status: "success",
          duration: 3000,
          isClosable: true,
          colorScheme: "green.400",
        })
      : "";
  }

  return (
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
            Octo<span style={{ color: "#48bb78" }}>Play</span>. 🚀
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
          <NextLink href="/profile">
            <Button
              colorScheme={"green"}
              rightIcon={<Icon as={GiRocketThruster} />}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
          </NextLink>
          <Text>or</Text>
          <Button
            onClick={() => signOut()}
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
          >
            Sign out
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default AuthenticatedScreen;
