import React from 'react'
import Link from 'next/link'
import { 
    Button,
    useDisclosure,
    Input,
    Box,
    Stack,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    Text,
    Heading,
    FormControl ,
    Avatar,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import Navbar from '../../components/navbar'
import Layout from '../../components/layout'
import UploadImage from '../../components/uploadImage'

export default function Create(){
    const firstField = React.useRef()

    return (
        <>
      <Layout>
        <Heading alignSelf='flex-start' as='h4' color='gray.700' size='xl'>Create a recommendation</Heading>
        <Heading as="h2" color='gray.700' my='2rem' size="lg"> Fill out <span class='blue-underline'>your</span> information so that the person recieving the <span class='blue-underline'>recommendation</span> knows who you are ... <span aria-label='eyes'> 👀 </span></Heading>

        <Stack spacing="2.5rem" w='full'>

            <UploadImage postRequestUrl='#'/>

            <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                border='2px solid #d5d5d5'
                ref={firstField}
                id="name"
                placeholder="Bobby Hall Jr"
                />
            </Box>

            <FormControl id='email' isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                border='2px solid #333'
                id="email"
                placeholder="Bobbyhalljr@gmail.com"
                />
            </FormControl>

            <FormControl id='recommendation-form-container' isRequired>
                <FormLabel htmlFor="recommendation">Recommendation</FormLabel>
                <Textarea border='2px solid #333' id="recommendation" />
            </FormControl>
        </Stack>
        <Link href='#'>
            <a style={{ width: '100%' }}>
                <Button _hover={{ bg: 'blue.400' }} fontWeight='600' fontSize='lg' boxShadow='xl' mt='3rem' py='1.5rem' w='full' color='white' bg='blue.300' type="submit" form="my-form">
                    Finish and Review
                </Button>
            </a>
        </Link>
        <Link href='/' as='/'>
            <a style={{ width: '100%' }}>
                <Button colorScheme='blue' variant='outline' leftIcon={<ArrowBackIcon />} color='blue.300' fontWeight='600' fontSize='lg' boxShadow='xl' mt='2rem' py='1.5rem' w='full' type="submit" form="my-form">
                    back home
                </Button>
            </a>
        </Link>
    </Layout>
    </>
    )
}