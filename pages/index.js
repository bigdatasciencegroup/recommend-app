import React from 'react'
import Link from 'next/link'

import { Button, Box, Text, Heading } from '@chakra-ui/react'

import Layout from '../components/layout'
import HomeSVG from '../components/homeSVG'

export default function Home() {
  return (
    <Layout>
      <Box textAlign="center">
        <Text
          bgGradient="linear(to-r, #29B6F6,#64FCD9)"
          bgClip="text"
          fontSize={['3xl', '4xl', '5xl']}
          whiteSpace={['wrap', 'nowrap']}
          fontWeight="black"
        >
          Give. Recieve. Share.
        </Text>
        <Text
          my="8"
          // mx="2"
          letterSpacing="1"
          fontSize={['lg', 'xl']}
          fontWeight="700"
          color="gray.500"
        >
          We make it super easy to <span className="blue-text">give</span>,{' '}
          <span className="blue-text">recieve</span> and{' '}
          <span className="blue-text">share</span> the good things people say
          about each other
        </Text>
      </Box>

      <HomeSVG />

      <Link href="/recommendation/create">
        <a style={{ width: '100%', padding: '1.5rem 2rem' }}>
          <Button
            boxShadow="xl"
            bg="blue.300"
            _hover={{ bg: 'blue.400' }}
            fontWeight="bold"
            fontSize="lg"
            color="white"
            py="4"
            px="6"
            w="full"
          >
            Give a recommendation
          </Button>
        </a>
      </Link>
    </Layout>
  )
}
