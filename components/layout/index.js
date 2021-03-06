import Head from 'next/head'
import { Container } from '@chakra-ui/react'

import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function Layout({ children, center }) {
  return (
    <>
      <Navbar fontFamily="Montserrat" />

      <Container
        fontFamily="Montserrat"
        fontWeight="600"
        pt="28"
        d="flex"
        margin="0 auto"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxW="2xl"
        color="gray.600"
      >
        {children}
      </Container>

      <Footer />
    </>
  )
}
