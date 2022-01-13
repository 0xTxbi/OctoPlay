import React from 'react'
import { useSession, getSession } from 'next-auth/client'
import Header from '../components/Header'
import { Container, Stack, Heading, Text, Box } from '@chakra-ui/react'
import TopArtistsCard from '../components/TopArtistsCard'

export default function topArtists({ data }) {

    const [session, loading] = useSession()

    let artistesData = data.items

    artistesData.map(artisteData => (
        console.log(artisteData.name)
    ))

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
                    Your Top Artistes
                </Heading>
                <Text>Here are your top 3 music wizards 🧙🏼‍♂️</Text>


                <Stack
                    width={'80vw'}
                    alignItems={'center'}
                    direction={'row'}
                    spacing={5}
                    align={'center'}
                    alignSelf={'center'}>

                    {artistesData.map(artisteData => (
                        <TopArtistsCard artisteData={artisteData} />
                    ))}

                </Stack>


            </Stack>
        </Container>
    </>
}

export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    const type = 'artists'
    const limit = 3
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