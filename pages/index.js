import React, { useState } from 'react'
import Link from 'next/link'

import { Button, Box, Text, Tooltip } from '@chakra-ui/react'

import Layout from '../components/layout'
import HomeSVG from '../components/homeSVG'
import PlayLottie from '../lotties/helper'

import homeLottie from '../lotties/home/home.json'

export default function Home() {
  // const homeLottie = useState('../lotties')
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
          mt="8"
          // mx="2"
          letterSpacing="1"
          fontSize={['lg', 'xl']}
          fontWeight="700"
          color="gray.500"
        >
          We make it super easy to<span className="blue-text">give</span>,{' '}
          <span className="blue-text">recieve</span> and{' '}
          <span className="blue-text">share</span> the good things people say
          about each other
        </Text>
      </Box>

      {/* <HomeSVG /> */}
      <PlayLottie
        src={homeLottie}
        loop={false}
        hover
        controls
        // background="#3490DC"
        style={{
          marginTop: '1rem',
          height: '250px',
          width: '300px',
          color: '#fff'
        }}
      />
      {/* <small>
        Animation by:
        <a
          style={{ paddingLeft: '.2rem' }}
          href="https://lottiefiles.com/jigneshgajjar"
        >
          Jignesh Gajjar
        </a>
      </small> */}

      <Link href="/profile/create" as="/profile/create">
        <a style={{ width: '100%', padding: '1.5rem 2rem' }}>
          <Button
            boxShadow="xl"
            bg="blue.300"
            _hover={{ bg: 'blue.400' }}
            fontWeight="bold"
            fontSize="lg"
            color="white"
            py="6"
            px="10"
            w="full"
          >
            Let's get started
          </Button>
        </a>
      </Link>
    </Layout>
  )
}
