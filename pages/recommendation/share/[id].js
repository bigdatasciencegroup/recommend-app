import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Divider,
  Center
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import OutlineButton from '../../../components/buttons/outlineButton'
import CustomHeading from '../../../components/heading/customHeading'

export default function Share() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout>
      <CustomHeading
        title="Share with family, friends and co-workers"
        w="200px"
        description="Show your appreceiation for your family, friends, teamates, co-workers, etc. By sharing your recommandation via social media,
        email or link"
      />
      <Stack mt="16" spacing="8" my="16" w={['90%', '75%']}>
        <Button
          py="6"
          size="md"
          variant="outline"
          bg="gray.100"
          _hover={{ bg: 'gray.200' }}
          borderRadius="xl"
        >
          <i class="fas fa-envelope-open-text"></i>
          <Box ml="2">Share by Email</Box>
        </Button>

        <Button py="6" bg="#0072B1" colorScheme="blue" borderRadius="xl">
          <i class="fab fa-linkedin-in"></i>
          <Box ml="2">Share on Linkedin</Box>
        </Button>

        <Button py="6" bg="#4267B2" colorScheme="blue" borderRadius="xl">
          <i class="fab fa-facebook-f"></i>
          <Box ml="2">Share on Facebook</Box>
        </Button>

        <Button py="6" bg="#1DA1F2" colorScheme="blue" borderRadius="xl">
          <i class="fab fa-twitter"></i>
          <Box ml="2">Share on Twitter</Box>
        </Button>
      </Stack>

      <Button
        py="6"
        w={['90%', '75%']}
        bg="green.300"
        colorScheme="green"
        mb="16"
        borderRadius="xl"
      >
        <i class="fas fa-link"></i>
        <Box ml="2" size="2xl">
          Copy Link
        </Box>
      </Button>

      {/* <OutlineButton
        callback={() => router.back()}
        href={`/recommendation[id]`}
        as={`/recommendation/${id}`}
        text="Preview Recommendation"
      /> */}
    </Layout>
  )
}
