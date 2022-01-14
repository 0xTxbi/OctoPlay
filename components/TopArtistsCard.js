import React from 'react'
import { Stack, Heading, Text, useColorModeValue, Flex, Image, Icon, Badge, Button, Link } from '@chakra-ui/react'
import { BsSpotify } from 'react-icons/bs';
import numeral from 'numeral'

function TopArtistsCard({ artisteData }) {

    let artisteTopGenre = artisteData.genres.slice(0, 1)

    return (

        <>

            <Stack
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={artisteData.images[0].url}
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        {artisteData.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {numeral(artisteData.followers.total).format('0.0a')} followers
                    </Text>

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>

                        {artisteTopGenre.map(genre => (
                            <Badge
                                px={2}
                                py={1}
                                colorScheme={'green'}
                                fontWeight={'400'}>
                                {genre}
                            </Badge>
                        ))}

                    </Stack>
                    <Stack align={'center'}>
                        <Stack
                            width={'100%'}
                            mt={'2rem'}
                            direction={'row'}
                            padding={2}
                            align={'center'}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            <Link href={artisteData.uri}><Button
                                leftIcon={<Icon as={BsSpotify} />}
                                fontSize={'sm'}
                                rounded={'full'}
                                bg={'green.400'}
                                color={'white'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(73 187 119 / 48%), 0 10px 10px -5px rgb(73 187 119 / 43%)'
                                }
                                _hover={{
                                    bg: 'green.400',
                                }}
                                _focus={{
                                    bg: 'green.400',
                                }}>
                                View Artist in App
                            </Button></Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

        </>

    )
}

export default TopArtistsCard