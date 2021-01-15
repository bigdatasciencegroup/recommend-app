import Link from 'next/link'
import { Button, Box, ArrowBackIcon } from '@chakra-ui/react'

export default function OutlineButton({ text, href, as, callback }) {
  return (
    <Box d="flex" alignItems="center" justifyContent="center" w="100%" mt="7">
      <Link href={href} as={as}>
        <a style={{ width: '100%' }}>
          <Button
            colorScheme="blue"
            variant="outline"
            color="blue.300"
            fontWeight="bold"
            fontSize="lg"
            boxShadow="xl"
            borderRadius="xl"
            py="1.5rem"
            w="full"
            // leftIcon={<ArrowBackIcon />}
          >
            {text}
          </Button>
        </a>
      </Link>
    </Box>
  )
}
