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
  AspectRatioProps,
  FormHelperText
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

// wizard
import { Wizard, WizardStep } from 'react-wizard-primitive'

// wizard steps
const Step1 = ({ stepIndex }) => {
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex}`}</Text>
      <Text fontSize="3xl">Choose a Username</Text>
      <Box my="10">
        <FormControl id="username">
          <FormLabel color="gray.400">Username</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              p="4"
              // bg="blue.400"
              // color="white"
              bg="none"
              borderRadius="xl"
              fontWeight="bold"
              children="raque.com/"
            />
            <Input p="4" borderRadius="xl" placeholder="username" />
          </InputGroup>
          <FormHelperText fontSize="xs">
            * Must be unique, Try using your real name
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

const Step2 = ({ stepIndex }) => {
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex}`}</Text>
      <Text fontSize="3xl">Add an intro video or photo</Text>
      <Box my="10">
        <UploadImage postRequestUrl="#" />
      </Box>
    </Box>
  )
}

const Step3 = ({ stepIndex }) => {
  // const { isActive, nextStep, previousStep } = useWizard()
  return (
    <Box>
      <Text pb="6" fontSize="lg">{`Step ${stepIndex}`}</Text>
      <Text fontSize="3xl">Import your Linkedin connections</Text>
      <Box
        my="24"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>
          Import your linkedin connections to have the best experience
        </Text>
        <Button mt="10" borderRadius="full" colorScheme="blue" bg="blue.600">
          Import
        </Button>
      </Box>
    </Box>
  )
}

const Step4 = ({ stepIndex }) => {
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex}`}</Text>
      <Text fontSize="3xl">About You</Text>
      <Box my="10">
        <FormControl id="about">
          <FormLabel>Display name</FormLabel>
          <Input placeholder="Bobbyhalljr" />
        </FormControl>
        <FormControl id="about">
          <FormLabel>Bio</FormLabel>
          <Input placeholder="Introduce yourself" />
        </FormControl>
      </Box>
    </Box>
  )
}

export default function Create() {
  const router = useRouter()
  const { id } = router.query

  // wizard
  const steps = ['Step1', 'Step2', 'step3', 'step4']

  return (
    <>
      {/* // <Layout> */}
      <Box w="100vw" h="100vh">
        <Wizard>
          {({ activeStepIndex, nextStep, previousStep }) => (
            <Box
              boxShadow="xl"
              p="6"
              borderRadius="xl"
              w={['90%', '75%', '50%']}
              margin="5rem auto"
              d="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <div>
                {/* render a WizardStep for each color, only show the active one */}
                {steps.map((step) => (
                  <>
                    {/* Step 1 */}
                    <WizardStep key={step}>
                      {({ isActive, index }) =>
                        isActive && <Step1 stepIndex={index} step={step} />
                      }
                    </WizardStep>

                    {/* Step 2 */}
                    <WizardStep key={step}>
                      {({ isActive, index }) =>
                        isActive && <Step2 stepIndex={index} step={step} />
                      }
                    </WizardStep>

                    {/* Step 3 */}
                    <WizardStep key={step}>
                      {({ isActive, index }) =>
                        isActive && <Step3 stepIndex={index} step={step} />
                      }
                    </WizardStep>

                    {/* Step 4 */}
                    <WizardStep key={step}>
                      {({ isActive, index }) =>
                        isActive && <Step4 stepIndex={index} step={step} />
                      }
                    </WizardStep>
                  </>
                ))}
              </div>
              {/* bottom nav */}
              <Box
                w={['100%', '75%', '50%']}
                maxW="2xl"
                my="10"
                d="flex"
                justifyContent="space-evenly"
              >
                <Button
                  px="10"
                  disabled={activeStepIndex === 0}
                  onClick={previousStep}
                  variant="outline"
                  color="blue.300"
                  colorScheme="blue"
                  onClick={previousStep}
                >
                  Previous
                </Button>
                <Button
                  px="10"
                  disabled={activeStepIndex === steps.length - 1}
                  bg="blue.300"
                  colorScheme="blue"
                  onClick={nextStep}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}
        </Wizard>
      </Box>

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
      {/* <OutlineButton text="Back home" href="/" as="/" /> */}
      {/* // </Layout> */}
    </>
  )
}
