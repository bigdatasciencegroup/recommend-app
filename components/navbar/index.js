import React, { useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link as ChakraLink,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  MenuList,
  MenuItem,
  Menu,
  Avatar,
} from '@chakra-ui/react'
// import { DarkModeSwitch } from "./DarkModeSwitch";

const MenuItems = ({ children }, isOpen) => (
  <Menu>
    <MenuList>
      <MenuItem bg="gray.100">{children}</MenuItem>
    </MenuList>
  </Menu>
  // <Box bg='gray.100' w='100%'>
  // <Text
  //   mt={{ base: 4, md: 0 }}
  //   m={2}
  //   display="flex"
  //   justifyContent="center"
  //   fontSize="xl"
  //   fontWeight="semibold"
  //   p={2}
  // >
  //   {children}
  // </Text>
  // <Divider />
  // </Box>
)

const Navbar = (props) => {
  const [show, setShow] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const handlePlacementChange = (event) => setPlacement(event.target.value)
  // /
  // const { colorMode } = useColorMode();
  // const bgColor = { light: "gray.100", dark: "gray.700" };
  // const color = { light: "black", dark: "white" };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      padding=" .7rem 1rem"
      bg="gray.100"
      // bg={bgColor[colorMode]}
      // color={color[colorMode]}
      w="full"
      position="fixed"
      top="0"
      zIndex="100"
      {...props}
    >
      <Link href="/" as="/">
        <a>
          <Text
            fontWeight="bold"
            whiteSpace="nowrap"
            fontSize={['lg', '3xl']}
            mr={12}
            ml={2}
          >
            RecommendApp
          </Text>
        </a>
      </Link>
      <Box display={['none', 'none', 'inline-block']} ml="auto" mr={12}>
        <Box display="flex">
          <Box
            d="flex"
            alignItems="flex-end"
            fontWeight="semibold"
            fontSize="xl"
          >
            <Link href="/" as="/">
              <a>
                <MenuItems>Home</MenuItems>
              </a>
            </Link>
            <Link href="/projects" as="/projects">
              <a>
                <MenuItems>Projects</MenuItems>
              </a>
            </Link>
            <Link href="/about" as="/about">
              <a>
                <MenuItems>About</MenuItems>
              </a>
            </Link>
            {/* <Link href="/blog" as="/blog">
              <a>
                <MenuItems>Blog</MenuItems>
              </a>
            </Link> */}
            {/* <Link href="/resources" as="/resources">
              <a>
                <MenuItems>Resources</MenuItems>
              </a>
            </Link> */}
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" mr="1rem">
        {/* <DarkModeSwitch /> */}
        <Button bg="gray.300" onClick={onOpen}>
          <svg
            fill="#333"
            width="22px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Button>
      </Box>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="7px" border="1px solid #a5a5a5" />
          <DrawerHeader bg="gray.100" borderBottomWidth="1px">
            <Link href="/" as="/">
              RecommendApp
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="1" mt="4" alignItems="flex-start">
              <Heading mb="4" size="sm">
                Menu
              </Heading>
              <Box
                d="flex"
                flexDirection="column"
                justifyContent="center"
                my="10"
              >
                <Avatar />
                <Box d="block">name email</Box>
              </Box>
              <Link href="/" as="/">
                <a>Discover</a>
              </Link>
              <Link href="/projects" as="/projects">
                <a>
                  <MenuItems>Profile</MenuItems>
                </a>
              </Link>
              <Link href="/about" as="/about">
                <a>
                  <MenuItems>Create Recommandation</MenuItems>
                </a>
              </Link>
              {/* <Link href="/blog" as="/blog">
                <a>
                <MenuItems>Blog</MenuItems>
                </a>
              </Link> */}
              {/* <Link href="/resources" as="/resources">
                <a>
                  <MenuItems>Resources</MenuItems>
                </a>
              </Link> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Navbar
