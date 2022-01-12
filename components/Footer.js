import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';


export default function Footer() {

    const date = new Date()

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© {date.getFullYear()} OctoPlay. All rights reserved</Text>

                <Stack direction={'row'} spacing={6}>
                    <Text color={'green.400'}>Built by the <Link href='https://github.com/TechieJossy'>Ugly Molluska 🐙</Link></Text>
                </Stack>
            </Container>
        </Box>
    );
}