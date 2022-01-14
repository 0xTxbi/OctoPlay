import React from 'react'
import { useSession, getSession, signIn } from 'next-auth/react'
import Header from '../components/Header'
import {
    Container, Icon, Button, Stack, Heading, Text, Box, AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogCloseButton,
    AlertDialogOverlay, useDisclosure, Link
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsSpotify } from 'react-icons/bs';
import TopAlbumsCard from '../components/TopAlbumsCard'

export default function topTracks({ data }) {

    const { data: session } = useSession()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    let faveTracksData = data.items

    useEffect(() => {
        if (data.error.message) {
            onOpen()
        }
    }, [data.error])

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
                <Text>Here are your top tracks/albums   </Text>


                <Stack
                    width={'80vw'}
                    alignItems={'center'}
                    direction={'row'}
                    spacing={5}
                    align={'center'}
                    alignSelf={'center'}>
                    {/* {faveTracksData.map(faveTrack => (

                        <TopAlbumsCard trackData={faveTrack.album} />

                    ))} */}
                </Stack>


            </Stack>
        </Container>


        {/* Alert dialog */}
        {data.error.message ? onOpen : ''}
        <AlertDialog AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>Session Expired 💀</AlertDialogHeader>
                <AlertDialogBody>
                    Oops. Your session on OctoPlay just expired. Please sign in again.
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef}>
                        <Link href='/'>
                            Exit
                        </Link>
                    </Button>
                    <Button
                        onClick={() => signIn('spotify')}
                        leftIcon={<Icon as={BsSpotify} />}
                        bg={'green.400'}
                        ml={5}
                        _hover={{ bg: 'green.400' }}>
                        Sign In Again
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

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
            Authorization: `Bearer ${session.accessToken}`,
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