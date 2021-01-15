import { Text } from '@chakra-ui/react'

export default function H1Gradient(wrap) {
  return (
    <Text
      bgGradient="linear(to-r, #29B6F6,#64FCD9)"
      bgClip="text"
      fontSize={['3xl', '5xl', '6xl']}
      whiteSpace={wrap}
      fontWeight="extrabold"
    />
  )
}
