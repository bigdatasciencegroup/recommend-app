import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  useDisclosure,
  Input,
  Box,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Text,
  Heading,
  Avatar,
  Switch,
  Divider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'

import Layout from '../../components/layout'
import UploadImage from '../../components/uploadImage'
import SolidButton from '../../components/buttons/solidButton'
import OutlineButton from '../../components/buttons/outlineButton'

export default function Create() {
  const router = useRouter()
  const { id } = router.query
  const { handleSubmit, errors, register, formState } = useForm()
  const [isPrivate, setIsPrivate] = React.useState(null)
  const [confirmPrivacy, setConfirmPrivacy] = React.useState(false)

  const [isOpen, setIsOpen] = React.useState(false)
  const open = () => setIsOpen(!isOpen)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const handleChange = (e) => {
    setIsPrivate(e.target.checked)
  }

  return (
    <>
      <Layout>
        <Box
          mb="4"
          d="flex"
          flexDirection="column"
          // alignItems="center"
          // justifyContent="flex-start"

          alignSelf="flex-start"
        >
          <Text fontSize={['2xl', '3xl']} fontWeight="700">
            Create a Recommendation
          </Text>
          <Text
            as="h2"
            my="4"
            fontSize={['lg', 'xl', '2xl']}
            fontWeight="600"
            color="gray.500"
          >
            Fill out your information so that the person recieving the{' '}
            recommendation knows who sent it
          </Text>
        </Box>

        <Stack spacing="10" w="full" fontSize="lg">
          {/* image upload */}
          <UploadImage postRequestUrl="#" />

          {/* recommendation form */}
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
              {/* name */}
              <FormLabel fontWeight="bold" mt="4" htmlFor="name">
                First name
              </FormLabel>
              <Input
                mb="2"
                name="name"
                placeholder="Bobby Hall Jr"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleNameChange}
                // value={name}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            {/* company */}
            <FormControl isInvalid={errors.company}>
              <FormLabel fontWeight="bold" mt="4" htmlFor="company">
                Company
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Tesla"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleEmailChange}
                // value={email}
              />
              <FormErrorMessage>
                {errors.company && errors.company.message}
              </FormErrorMessage>
            </FormControl>

            {/* email */}
            <FormControl isInvalid={errors.email} isRequired>
              <FormLabel fontWeight="bold" mt="4" htmlFor="name">
                Email
              </FormLabel>
              <Input
                isRequired
                name="email"
                type="email"
                placeholder="bobbyhalljrcs@gmail.com"
                fontWeight="500"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleEmailChange}
                // value={email}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* recommendation */}
            <FormControl isInvalid={errors.recommendation} isRequired>
              <FormLabel fontWeight="bold" mt="10" htmlFor="recommendation">
                Recommendation
              </FormLabel>
              <Textarea
                isRequired
                size="md"
                h="200px"
                type="textarea"
                name="recommendation"
                fontWeight="500"
                placeholder="Jane has been a pleasure to work with. I would absolutely love to work with her again! 😁"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleRecommendationChange}
                // value={recommendation}
              />
              <FormErrorMessage>
                {errors.recommendation && errors.recommendation.message}
              </FormErrorMessage>
            </FormControl>

            {/* Make private */}
            <Divider h="2rem" />
            <FormControl mt="6" mb="24" display="flex" alignItems="center">
              <FormLabel
                htmlFor="make-private"
                fontWeight="600"
                fontSize={['lg', 'xl', '2xl']}
              >
                Make recommendation private?
              </FormLabel>
              <Switch
                isDisabled={confirmPrivacy === false ? 'false' : 'true'}
                onClick={() => setIsOpen(true)}
                value={isPrivate}
                ml="auto"
                pr="2rem"
                size="lg"
                id="make-private"
                colorScheme="green"
              />
            </FormControl>

            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Private Recommendations
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure? Private recommendations can only be seen by
                    you and who ever you share them with.
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="blue"
                      onClick={(e) => handleChange(e)}
                      ml={3}
                    >
                      Make Private
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>

            <SolidButton
              // isLoading={formState.isSubmitting}
              type="submit"
              text="Finish and Review"
              href="/recommendation/[id]"
              as={`/recommendation/${id}`}
            />
          </form>
        </Stack>

        <OutlineButton text="Back home" href="/" as="/" />
      </Layout>
    </>
  )
}
