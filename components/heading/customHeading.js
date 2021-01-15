import { Text, Box } from '@chakra-ui/react'

export default function CustomHeading({ title, description }) {
  return (
    <Box mb="4" d="flex" flexDirection="column" alignSelf="flex-start">
      <Text fontSize={['2xl', '3xl']} fontWeight="700">
        {title}
      </Text>
      <Text
        as="h2"
        my="4"
        fontSize={['lg', 'xl', '2xl']}
        fontWeight="600"
        color="gray.500"
      >
        {description}
      </Text>
    </Box>
  )
}
