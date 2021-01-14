import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '../styles/globals.css'

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const fonts = {
  fonts: {
    body: "'sans-serif', sans-serif",
    heading: "'Montserrat', sans-serif",
    mono: "'Montserrat', monospace",
  },
}
const theme = extendTheme({ colors, fonts })

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true} theme={theme} colorModeManager>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
