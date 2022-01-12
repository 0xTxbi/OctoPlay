import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Container, Stack, Heading, Text, Box, Button, Icon, Center, VStack, useColorModeValue, Image, Flex, Avatar } from '@chakra-ui/react'
import TopAlbumsCard from '../components/TopAlbumsCard'

export default function topTracks({ data }) {

    let faveTracksData = data.items

    return <>

        <Header />

        <Container maxW={'3xl'}>
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
                    lineHeight={'110%'}>
                    Your Top Tracks/Albums
                </Heading>
                <Text>Here are your top tracks/albums.</Text>


                <Stack
                    width={'80vw'}
                    alignItems={'center'}
                    direction={'row'}
                    spacing={5}
                    align={'center'}
                    alignSelf={'center'}>
                    {faveTracksData.map(faveTrack => (

                        <TopAlbumsCard trackData={faveTrack.album} />

                    ))}
                </Stack>


            </Stack>
        </Container>

    </>
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const type = 'tracks'
    const limit = 5
    const range = 'short_term'
    const res = await fetch(`https://api.spotify.com/v1/me/top/${type}?time_range=${range}&limit=${limit}`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session.user.accessToken}`,
            "Content-Type": "application/json"
        }

    })
    const data = await res.json()

    return {
        props: {
            data,
            session
        }
    }

}