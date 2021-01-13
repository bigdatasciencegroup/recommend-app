import Head from 'next/head'
import { Container } from "@chakra-ui/react"

import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

export default function Layout({ children, center }) {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </Head>

        <Navbar />

        <Container pt='28' d='flex' margin='0 auto' flexDirection='column' justifyContent='center' alignItems='center' maxW='xl'>
            {children}
        </Container>

        <Footer />
        </>
    )
}
