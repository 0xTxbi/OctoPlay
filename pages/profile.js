import React from "react";
import HomeHeader from "../components/HomeHeader";
import Link from "next/link";
import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Profile({}) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      {/* Header */}
      <HomeHeader />
      <Center height={"80vh"}>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
              lineHeight={"110%"}
            >
              Welcome {session?.user?.name}
            </Heading>
            <Text>Select any of the buttons to proceed 👇🏽</Text>
            <Stack
              direction={"row"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Link href="/tt">
                <Button
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Top Tracks
                </Button>
              </Link>
              <Link href="/ta">
                <Button
                  colorScheme={"green"}
                  variant={"outline"}
                  rounded={"full"}
                  px={6}
                >
                  Top Artists
                </Button>
              </Link>
              <Link href="/yp">
                <Button
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Recent Playlists
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Center>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
