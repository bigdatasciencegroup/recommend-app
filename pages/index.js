import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
  FormControl
} from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'


import Layout from '../components/layout'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Navbar />

      <Layout>
        <Button onClick={onOpen}>Open</Button>
        <Drawer isOpen={isOpen} onClose={onClose} size='lg'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton bg='gray.200' py='2' fontWeight='medium' px='4' size='xl' borderRadius='lg' whiteSpace='nowrap' m='1rem'> <ArrowBackIcon mr='1' boxSize='1em'/>Go Back</DrawerCloseButton>
            <DrawerHeader center>
              <Heading mt='4rem' as="h2" size="lg"> Fill out <span class='blue-underline'>your</span> information so that the person recieving the <span class='blue-underline'>recommendation</span> knows who you are ... <span aria-label='eyes'> 👀 </span></Heading>
              </DrawerHeader>
            <DrawerBody>
            <Heading mt='2rem' mb='1rem' as='h4' size='lg'>Create a recommendation</Heading>
            <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    ref={firstField}
                    id="name"
                    placeholder="Bobby Hall Jr"
                  />
                </Box>

                <FormControl id='email' isInvalid isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="Bobbyhalljr@gmail.com"
                  />
                </FormControl>

                <FormControl id='recommendation-form-container' isInvalid isRequired>
                  <FormLabel htmlFor="recommendation">Recommendation</FormLabel>
                  <Textarea id="recommendation" />
                </FormControl>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant='blue.300' shadow='md' w='full' color='white' bg='blue.300' type="submit" form="recommendation-form">
                Finish and Review
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Layout>
    </>
  )
}
