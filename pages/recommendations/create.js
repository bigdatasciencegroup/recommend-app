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
import HookForm from '../../components/HookForm'
import theme from '../../theme'

export default function Create(){
    return (
        <>
      <Layout>
        <Heading alignSelf='flex-start' as='h4' color='gray.700' size='xl'>Create a recommendation</Heading>
        <Heading as="h2" color='gray.700' my='2rem' size="lg"> Fill out <span class='blue-underline'>your</span> information so that the person recieving the <span class='blue-underline'>recommendation</span> knows who sent it</Heading>

        <Stack spacing="2.5rem" w='full'>
            {/* image upload */}
            <UploadImage postRequestUrl='#'/>

            {/* recommendation form */}
            <HookForm />
        </Stack>
    
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