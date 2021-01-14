import { Box, Link as ChakraLink } from '@chakra-ui/react'

export default function Footer(){
    return (
        <Box mt='24' bg='#64FCD9' bgGradient="linear(to-r, #29B6F6,#64FCD9)" fontWeight='bold' p='6' fontSize='lg' display='flex' justifyContent='center' textAlign='center' alignItems='center' color='gray.800' margin='6rem auto 0 auto'>
            <footer>
                Made with <span> ❤️ </span> and hard work by: <br />
                <ChakraLink color='gray.700' textDecoration='underline' href='https://bobbybytez.io'>Bobby Hall Jr</ChakraLink>
            </footer>
        </Box>
    )
}