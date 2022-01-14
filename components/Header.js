import React from 'react'
import Link from "next/link"
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/react'

const Header = () => {

    const { data: session, status } = useSession()
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    {/* Logo */}
                    <Box fontSize="1.2rem" cursor="pointer"><Link href="/"><strong>Octo<span style={{ color: "#48bb78" }}>Play</span>.</strong></Link></Box>
                    <HStack spacing={8} alignItems={'center'}>

                        {/* Navigation Links */}
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>

                            <Link href='/tt'>Top Tracks</Link>
                            <Link href='/ta'>Top Artists</Link>
                            <Link href='/yp'>Recent Playlists</Link>

                        </HStack>
                        {/* Navigation Links */}

                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://i.scdn.co/image/ab6775700000ee85070323da04b5aefe5902278e'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>View Profile in App</MenuItem>
                                <MenuDivider />
                                <MenuItem><Button onClick={() => signOut()}>Log Out</Button></MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Link href='/tt'>Top Tracks</Link>
                            <Link href='/ta'>Top Artists</Link>
                            <Link href='/yp'>Recent Playlists</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>

    )

}

export default Header


export async function getServerSideProps(ctx) {

    const session = await getSession(ctx)

    return {
        session
    }

}