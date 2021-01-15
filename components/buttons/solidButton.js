import Link from 'next/link'
import { Button, Box, ArrowFowardIcon } from '@chakra-ui/react'

export default function SolidButton({ text, href, as }) {
  return (
    <Box d="flex" justifyContent="center" alignItems="center" mt="8" w="100%">
      <Link href={href} as={as}>
        <a style={{ width: '100%' }}>
          <Button
            boxShadow="xl"
            bg="blue.300"
            _hover={{ bg: 'blue.400' }}
            fontWeight="bold"
            fontSize="lg"
            color="white"
            py="1.5rem"
            w="full"
            // rightIcon={<ArrowFowardIcon />}
          >
            {text}
          </Button>
        </a>
      </Link>
    </Box>
  )
}
