import React from 'react'

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
        <Heading as="h2" lineHeight='1.4' size="lg"> Fill out <span class='blue-underline'>your</span> information so that the person recieving the <span class='blue-underline'>recommendation</span> knows who you are ... <span aria-label='eyes'> 👀 </span></Heading>
        <Heading my='2rem' as='h4' size='lg'>Create a recommendation</Heading>

        <Stack spacing="2.5rem" w='full'>
            {/* <Box id='image-upload' bg='gray.200' w='8rem' h='8rem' borderRadius='full' display='flex' justifyContent='center' alignItems='center' margin='0 auto'>
                <Button bg='transparent' _hover='none'>
                    <Box d='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.78448 4.86274V0.53186H7.97414V4.86274H12.7586V7.75H7.97414V12.0809H4.78448V7.75H0V4.86274H4.78448ZM9.56896 13.5245V9.19363H14.3534V4.86274H25.5172L28.4358 7.75H33.4914C35.2457 7.75 36.681 9.04926 36.681 10.6373V27.9608C36.681 29.5488 35.2457 30.848 33.4914 30.848H7.97414C6.21983 30.848 4.78448 29.5488 4.78448 27.9608V13.5245H9.56896ZM20.7328 26.5172C25.1345 26.5172 28.7069 23.2834 28.7069 19.299C28.7069 15.3146 25.1345 12.0809 20.7328 12.0809C16.331 12.0809 12.7586 15.3146 12.7586 19.299C12.7586 23.2834 16.331 26.5172 20.7328 26.5172ZM15.6293 19.299C15.6293 21.8542 17.9099 23.9186 20.7328 23.9186C23.5556 23.9186 25.8362 21.8542 25.8362 19.299C25.8362 16.7438 23.5556 14.6794 20.7328 14.6794C17.9099 14.6794 15.6293 16.7438 15.6293 19.299Z" fill="#A5A5A5"/>
                        </svg>
                        <Text fontSize='sm' >add photo</Text>
                    </Box>
                </Button>
            </Box> */}

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

            <FormControl id='email' isInvalid isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                border='2px solid #d5d5d5'
                id="email"
                placeholder="Bobbyhalljr@gmail.com"
                />
            </FormControl>

            <FormControl id='recommendation-form-container' isInvalid isRequired>
                <FormLabel htmlFor="recommendation">Recommendation</FormLabel>
                <Textarea border='2px solid #d5d5d5' id="recommendation" />
            </FormControl>
            </Stack>
        <Button _hover={{ bg: 'blue.400' }} fontWeight='600' fontSize='lg' boxShadow='2xl' mt='3rem' py='1.5rem' w='full' color='white' bg='blue.300' type="submit" form="my-form">
            Finish and Review
        </Button>
    </Layout>
    </>
    )
}