import React from 'react'
import Link from 'next/link'
import { Stack, Heading, Text, Box, Button, useColorModeValue, Image, Icon } from '@chakra-ui/react'
import { BsSpotify } from 'react-icons/bs';

function TopAlbumsCard({ trackData }) {
    return (

        <>

            <Box
                maxW={'300px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    boxSize={'250px'}
                    w={'full'}
                    src={
                        trackData.images[0].url
                    }
                    objectFit={'cover'}
                />

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {trackData.name}
                        </Heading>
                        <Text color={'gray.500'}>{trackData.artists[0].name}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{trackData.total_tracks}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                {trackData.total_tracks === 1 ? 'Track' : 'Tracks'}
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>{trackData.release_date.slice(0, 4)}</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Release Year
                            </Text>
                        </Stack>
                    </Stack>

                    <Link href={trackData.uri}>
                        <Button
                            w={'full'}
                            leftIcon={<Icon as={BsSpotify} />}
                            mt={8}
                            bg={useColorModeValue('#151f21', 'green.400')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>

                            Play in App

                        </Button>
                    </Link>
                </Box>
            </Box>

        </>

    )
}

export default TopAlbumsCard
