import React from "react";
import { useSession, getSession } from "next-auth/react";
import Header from "../components/Header";
import { Container, Stack, Heading, Text, Box } from "@chakra-ui/react";
import TopArtistsCard from "../components/TopArtistsCard";
import axios from "axios";
import { useEffect } from "react";
import { topArtistsReq } from "../requests/topArtistsReq";

export default function topArtists({ data }) {
  const { data: session } = useSession();

  //   let artistesData = data?.items;
  //   console.log(data, session);
  console.log(session);

  useEffect(() => {
    console.log("hey");
    const response = axios.get(`https://api.spotify.com/v1/me/top/artists`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${session?.accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }, []);

  return (
    <>
      <Header />

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
            Your Top Artistes
          </Heading>
          <Text>Here are your top 3 music wizards 🧙🏼‍♂️</Text>

          <Stack
            width={"80vw"}
            alignItems={"center"}
            direction={"row"}
            spacing={5}
            align={"center"}
            alignSelf={"center"}
          >
            {/* {artistesData.map(artisteData => (
                        <TopArtistsCard artisteData={artisteData} />
                    ))} */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx);

//   const type = "artists";
//   const limit = 3;
//   const range = "short_term";
//   //   const { data } = await axios.get(
//   //     `https://api.spotify.com/v1/me/top/artists`,
//   //     {
//   //       headers: {
//   //         Accept: "application/json",
//   //         Authorization: `Bearer ${session?.accessToken}`,
//   //         "Content-Type": "application/json",
//   //       },
//   //     }
//   //   );

//   //   return {
//   //     props: {
//   //       data,
//   //       session,
//   //     },
//   //   };

//   const { data } = await axios.get(
//     "https://api.spotify.com/v1/me/top/artists",
//     {
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${session?.accessToken}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   return {
//     props: {
//       data,
//       session,
//     },
//   };
// }
