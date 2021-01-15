import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  Avatar,
  List,
  ListItem,
  ListIcon,
  UnorderedList
} from '@chakra-ui/react'
// import { DarkModeSwitch } from "./DarkModeSwitch";

const MenuItems = ({ children }) => (
  // <Menu>
  //   <MenuList>
  //     <MenuItem bg="gray.600">{children}</MenuItem>
  //   </MenuList>
  // </Menu>
  <Box w="100%" mr="auto">
    <Text
      mt={{ base: 4, md: 0 }}
      m={2}
      fontSize="lg"
      // bg="gray.200"
      borderRadius="lg"
      px="4"
      py="2"
      _hover={{ color: 'blue.300' }}
      _activeLink={{ current: 'blue.300' }}
      fontWeight="semibold"
    >
      {children}
    </Text>
    <Divider />
  </Box>
)

const Navbar = (props) => {
  const [show, setShow] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
  const handlePlacementChange = (event) => setPlacement(event.target.value)

  const router = useRouter()
  const { id } = router.query

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
      boxShadow="sm"
      bg="gray.100"
      opacity="0.9"
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
            fontSize={['2xl', '3xl']}
            mr={12}
            ml={2}
            colorScheme="green"
            color="white"
            bg="blue.400"
            rounded="lg"
            px="3"
            boxShadow="xl"
            _hover={{ boxShadow: '2xl' }}
          >
            R
          </Text>
        </a>
      </Link>
      <Box display={['none', 'none', 'inline-block']} ml="auto" mr={12}>
        <Box display="flex">
          <Box
            d="flex"
            alignItems="flex-start"
            fontWeight="semibold"
            fontSize="lg"
          >
            <Link href="/" as="/" className="current">
              <a>
                <MenuItems>Home</MenuItems>
              </a>
            </Link>
            <Link href="/recommendation/[id]" as={`/recommendation/${id}`}>
              <a>
                <MenuItems>Recommendations</MenuItems>
              </a>
            </Link>
            <Link href="/recommendation/create" as="/recommendation/create">
              <a>
                <MenuItems>Create</MenuItems>
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
        <Button bg="gray.200" border="1px solid #a5a5a5" onClick={onOpen}>
          <svg
            fill="#333"
            width="25px"
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
          <DrawerCloseButton
            mt="7px"
            size={['md', 'lg']}
            p="2"
            bg="red.100"
            color="red.400"
            border="1px solid"
          />
          <DrawerHeader bg="gray.100" borderBottomWidth="1px">
            <Box w="18.9%">
              <Link href="/" as="/">
                <a>
                  <Text
                    fontWeight="bold"
                    // whiteSpace="nowrap"
                    fontSize={['2xl', '3xl']}
                    // mr={12}
                    ml={2}
                    colorScheme="green"
                    color="white"
                    bg="blue.400"
                    rounded="lg"
                    px="3"
                    boxShadow="xl"
                    _hover={{ boxShadow: '2xl' }}
                  >
                    R
                  </Text>
                </a>
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="1" mt="4" alignItems="flex-start">
              <Box
                d="flex"
                flexDirection="column"
                justifyContent="center"
                mt="2"
                mb="4"
              >
                <Text fontSize="lg" mb="4" color="gray.400" fontWeight="700">
                  Profile
                </Text>
                <Box
                  d="flex"
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="center"
                >
                  <Avatar mr="2" />
                  <Box
                    d="flex"
                    alignItems="flex-start"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Text fontWeight="600" fontSize="md">
                      Bobby Hall Jr
                    </Text>
                    <Text>bobbyhalljrcs@gmail.com</Text>
                  </Box>
                </Box>
              </Box>
              <Divider />

              <Text fontSize="lg" pt="8" color="gray.400" fontWeight="700">
                Menu
              </Text>
              <UnorderedList
                d="flex"
                justifyContent="center"
                alignItems="flex-start"
                flexDirection="column"
                _activeLink="blue.300"
                listStyleType="none"
              >
                <ListItem pb="2">
                  <Link href="/" as="/">
                    <a>
                      <MenuItems>Home</MenuItems>
                    </a>
                  </Link>
                </ListItem>
                <ListItem py="2">
                  <Link
                    href="/recommendation/[id]"
                    as={`/recommendation/${id}`}
                  >
                    <a>
                      <MenuItems>Recommendations</MenuItems>
                    </a>
                  </Link>
                </ListItem>
                <ListItem py="2">
                  <Link
                    href="/recommendation/create"
                    as="/recommendation/create"
                  >
                    <a>
                      <MenuItems>Create</MenuItems>
                    </a>
                  </Link>
                </ListItem>
              </UnorderedList>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Navbar
