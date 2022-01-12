import React from 'react'
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
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'
import { GiRocketThruster } from "react-icons/gi"
import { BsSpotify } from 'react-icons/bs';
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Home() {


  const [session, loading] = useSession()
  const toast = useToast()

  if (session) {


    return (

      <>
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
              <Text as={'span'}>
                Octo<span style={{ color: "#48bb78" }}>Play</span>. 🚀
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
              <Link href="/profile">
                <Button
                  colorScheme={'green'}
                  rightIcon={<Icon as={GiRocketThruster} />}
                  bg={'green.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Get Started
                </Button></Link>
              <Text>or</Text>
              <Button onClick={() => signOut()} variant={'link'} colorScheme={'blue'} size={'sm'}>
                Sign out
              </Button>
            </Stack>
          </Stack>
        </Container>


        {/* Display toast component on successful sign in */}
        {!loading ? toast({
          title: 'You\'ve successfully signed in with your Spotify account.',
          description: "Click the 'Get Started' button to proceed.",
          status: 'success',
          duration: 5000,
          isClosable: true,
          colorScheme: 'green.400'
        }) : null}

      </>
    )

  }

  return <>

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
            onClick={() => signIn('spotify')}
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

}