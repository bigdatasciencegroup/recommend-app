import React from 'react'
import Link from 'next/link'

import {
  Button,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react"

import Layout from '../components/layout'
import HomeSVG from '../components/homeSVG'

export default function Home() {
  return (
    <Layout>
      {/* <Text fontSize='4xl' as='h1' fontWeight='bold'>Give. Recieve. Share.</Text> */}
      <Text
        bgGradient="linear(to-r, #29B6F6,#64FCD9)"
        bgClip="text"
        fontSize={['3xl', '5xl', '6xl']}
        whiteSpace='nowrap'
        fontWeight="extrabold"
        // textAlign='center'
      >
        Give. Recieve. Share.
      </Text>
      <Text my='8' mx='2' letterSpacing='1px' fontSize='1.4rem' fontWeight='700' textAlign='center'>We make it super easy to <span className='blue-underline'>give</span>, <span className='blue-underline'>recieve</span> and <span className='blue-underline'>share</span> the good things people have to say about each other</Text>
      <HomeSVG />

        <Link href='/recommendations/create'>
          <a style={{ width: '100%', padding: '1.5rem 2rem' }}>
            <Button boxShadow='xl' bg='blue.300' _hover={{ bg: 'blue.400' }} fontWeight='bold' fontSize='lg' color='white' py='2' px='4' w='full'>
              Let's get started
            </Button>
          </a>
        </Link>
    </Layout>
  )
}
