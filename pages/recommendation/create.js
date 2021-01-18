import React, { useRef, useEffect, useState, Fragment } from 'react'
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
  Tag,
  Heading,
  Avatar,
  Switch,
  Divider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AspectRatio,
  AspectRatioProps
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { useReactMediaRecorder, ReactMediaRecorder } from 'react-media-recorder'
import ReactPlayer from 'react-player'

import Layout from '../../components/layout'
import UploadImage from '../../components/uploadImage'
import SolidButton from '../../components/buttons/solidButton'
import OutlineButton from '../../components/buttons/outlineButton'
import CustomHeading from '../../components/heading/customHeading'
import {
  VideoPlayer,
  Duration,
  VideoRecorder
} from '../../components/mediaPlayer/index'

export default function Create() {
  const router = useRouter()
  const { id } = router.query
  const { handleSubmit, errors, register, formState } = useForm()
  const [isPrivate, setIsPrivate] = React.useState(false)
  const [confirmPrivacy, setConfirmPrivacy] = React.useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(!isOpen)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef()

  // video
  const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null)

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream
      }
    }, [stream])
    if (!stream) {
      return null
    }
    return <video ref={videoRef} width={500} height={500} autoPlay controls />
    // return <VideoPlayer />
  }
  // end video

  const alertValue = (value) => {
    let i
    i = setTimeout(() => alertValue(value), 3000)

    const alertValue = () => {
      alert(i)
    }

    return i
  }

  const onToggle = (e) => {
    // if (isPrivate === true) {
    //   setIsOpen(false)
    // }
    setIsPrivate(e.target.value)
    alertValue(e.target.value)
    open
  }

  return (
    <>
      <Layout>
        {/* <CustomHeading
          title="Create a Introduction"
          description="Record an introduction video"
        /> */}

        <VideoRecorder
          video
          render={({ previewStream }) => {
            return <VideoPreview stream={previewStream} />
          }}
        />
        <VideoPlayer />

        {/* OLD UI / Backup */}
        {/* <Stack spacing="10" w="full" fontSize="lg">
          <UploadImage postRequestUrl="#" />

          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={errors.name}>
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

            <FormControl isInvalid={!errors.email} isRequired>
              <FormLabel fontWeight="bold" mt="6" htmlFor="name">
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

            <FormControl isInvalid={!errors.recommendation} isRequired>
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
                placeholder="Jane has been a pleasure to work with. I would absolutely love to work with her again!"
                border="2px solid #333"
                boxShadow="xs"
                // onChange={handleRecommendationChange}
                // value={recommendation}
              />
              <FormErrorMessage>
                {errors.recommendation && errors.recommendation.message}
              </FormErrorMessage>
            </FormControl>

            <Divider h="2rem" />
            <FormControl mt="6" mb="24" display="flex" alignItems="center">
              <FormLabel
                htmlFor="make-private"
                fontWeight="600"
                fontSize={['md', 'xl', '2xl']}
              >
                Make recommendation private?
              </FormLabel>
              <Switch
                isDisabled={isPrivate ? false : true}
                onClick={() => onToggle}
                // onChange={onToggle}
                value={isPrivate}
                ml="auto"
                pr="2rem"
                size="lg"
                id="make-private"
                colorScheme="green"
              />
            </FormControl>

            {isPrivate ? (
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
                      Private recommendations can only be seen by you and who
                      ever you share them with.
                      <Text mt="2" d="block">
                        Are you sure?
                      </Text>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue" onClick={onToggle} ml={3}>
                        Make Private
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            ) : (
              ''
            )}

            <SolidButton
              // isLoading={formState.isSubmitting}
              type="submit"
              text="Finish and Review"
              href="/recommendation/[id]"
              as={`/recommendation/${id}`}
            />
          </form>
        </Stack> */}

        <OutlineButton text="Back home" href="/" as="/" />
      </Layout>
    </>
  )
}
