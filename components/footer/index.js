import { Box, Link as ChakraLink } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      mt="24"
      bg="#64FCD9"
      bg="blue.400"
      fontWeight="bold"
      p="6"
      fontSize="lg"
      color="white"
      display="flex"
      justifyContent="center"
      textAlign="center"
      alignItems="center"
      margin="6rem auto 0 auto"
    >
      <footer>
        Made with <span> ❤️ </span> and hard work by: <br />
        <ChakraLink
          color="gray.200"
          textDecoration="underline"
          href="https://bobbybytez.io"
        >
          Bobby Hall Jr
        </ChakraLink>
      </footer>
    </Box>
  )
}
