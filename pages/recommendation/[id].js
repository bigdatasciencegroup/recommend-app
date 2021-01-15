import { Box, Avatar, Text, Heading } from '@chakra-ui/react'
import Layout from '../../components/layout'
import SolidButton from '../../components/buttons/solidButton'
import OutlineButton from '../../components/buttons/outlineButton'

export default function Recommendation() {
  return (
    <Layout>
      <Box>
        <Heading mb="24">Review your information</Heading>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        boxShadow="2xl"
        rounded="2rem"
        p="6"
        mb="10"
        border="1px solid #f5f5f5"
        position="relative"
        borderTop="4px solid #29B6F6"
      >
        <Avatar
          mb="10"
          size="2xl"
          boxShadow="xl"
          position="absolute"
          top="-35"
          lef="0"
        />
        <Box mt="24">
          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Name:
          </Text>
          <Text fontSize="lg" fontWeight="600" mb="6">
            Bobby Hall Jr
          </Text>

          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Email:
          </Text>
          <Text fontSize="lg" fontWeight="600" mb="6">
            bobbyhalljr@gmail.com
          </Text>

          <Text color="gray.400" fontSize={['sm', 'md']} fontWeight="bold">
            Company:
          </Text>
          <Text fontSize="lg" fontWeight="600" mb="6">
            Lambda School
          </Text>

          <Box mb="16" mt="10" w="95%" maxW="xl" wordBreak="break-all">
            <Text
              mb="1"
              color="gray.400"
              fontSize={['md', 'lg']}
              fontWeight="bold"
            >
              Recommendation:
            </Text>
            <Text fontSize="xl" fontWeight="600" mb="6">
              "This is my super awesome recommendation!
              bhfjgdivhkerjfbdhivjfbvihlfdbvujhbdfvbleudfibkvedfhugvbekrdf
              vlhbrefdvrfdbhviberfkdbvidbg."
            </Text>
          </Box>
        </Box>
      </Box>

      <SolidButton
        text="Publish Recommendation"
        href="/recommendation/share"
        as="/recommendation/share"
      />
      <OutlineButton
        text="Edit Recommandation"
        href="/recommendation/create"
        as="/recommendation/create"
      />
    </Layout>
  )
}
