import {
    Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import Blob from '../Blob';

export function Hero() {
    return (
        <Container maxW={'7xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column-reverse', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }} position={'relative'}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={800}
                        fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
                        position={'sticky'}>
                        <Text
                            as={'span'}
                            bgGradient='linear(to-r, blue.600, gray.400, pink.600)'
                            bgClip='text'
                        >
                            &lt; Sudharsan Gandhi &gt;
                        </Text>
                        <br />
                        <Text width={'100%'} as={'span'} textAlign={'center'}
                            fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                            marginTop={'0'}>
                            &nbsp; &nbsp; &nbsp;Polyglot Developer
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        A Flexible developer with hands on experience on exquisite languages and frameworks. 
                        I always like to keep up with the current trend while preserving the old for good. 
                        I can adapt to new frameworks since I understand, encourage and implement design patterns on my own.
                        
                        - Java 11 Oracle certified
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'blue'}
                            bgGradient='linear(to-r, blue.600, pink.800)'
                            _hover={{ bg: 'blue.600' }}>
                            LinkedIn
                        </Button>
                        <Button
                            size={'lg'}
                            fontWeight={'normal'}
                            colorScheme={'purple'}
                            bgGradient='linear(to-r, purple.500, pink.700)'
                            _hover={{ bg: 'purple.500' }}
                            px={6}>
                            Github
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('red.50', 'red.400')}
                    />
                    <Box 
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'right center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/hero2.jpg'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

