import Head from 'next/head';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react';
import { BsSpotify } from "react-icons/bs"

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        This is <br />
                        <Text as={'span'} color={'green.400'}>
                            OctoPlay 🚀
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        The essential Spotify analytics tool built on its{' '}
                        <a href="https://developer.spotify.com/documentation/web-api/">official API</a>
                    </Text>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            colorScheme={'green'}
                            leftIcon={<Icon as={BsSpotify} />}
                            bg={'green.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}>
                            Sign In With Your Spotify Account
                        </Button>
                        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                            Learn more
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}