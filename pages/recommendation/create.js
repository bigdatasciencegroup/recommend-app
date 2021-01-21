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
import { useWizard } from 'react-wizard-primitive'

// wizard steps
const Step1 = ({ stepIndex, nextStep }) => {
  // const { isActive, nextStep, previousStep } = useWizard()
  return (
    <Box>
      <Text size="2xl">Choose a Username</Text>
      <Box my="10">
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" />
          <FormHelperText>
            Must be unique, Try using your real name
          </FormHelperText>
        </FormControl>
        <Box my="10" d="flex" justifyContent="flex-end">
          <Button bg="blue.300" colorScheme="blue" onClick={nextStep}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

const Step2 = ({ stepIndex, nextStep, previousStep }) => {
  // const { isActive, nextStep, previousStep } = useWizardStep()
  return (
    <>
      {/* {isActive ? ( */}
      <>
        <Text size="2xl">Choose a Username</Text>
        <Box my="10">
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" />
            <FormHelperText>
              Must be unique, Try using your real name
            </FormHelperText>
          </FormControl>
          <Box my="10" d="flex" justifyContent="space-evenly">
            <Button variant="outline" colorScheme="blue" onClick={previousStep}>
              Previous
            </Button>
            <Button bg="blue.300" colorScheme="blue" onClick={nextStep}>
              Next
            </Button>
          </Box>
        </Box>
      </>
      {/* ) : null} */}
    </>
  )
}

const CustomStep = ({ title, formLabel, formHelperText, value = '' }) => {
  return (
    <Box>
      <Text size="2xl">{title}</Text>
      <Box my="10">
        <FormControl id="username">
          <FormLabel>{formLabel}</FormLabel>
          <Input type="text" value={value} />
          <FormHelperText>{formHelperText}</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default function Create() {
  const router = useRouter()
  const { id } = router.query

  // wizard
  const { nextStep, previousStep, activeStepIndex, getStep } = useWizard()
  const steps = ['step1', 'step2', 'step3']

  return (
    <Layout>
      {/* <CustomHeading
          title="Create a Introduction"
          description="Record an introduction video"
        /> */}
      {steps.map(
        (step, index) =>
          getStep().isActive && (
            <CustomStep
              key={step}
              steps={steps}
              nextStep={nextStep}
              previousStep={previousStep}
              stepIndex={index}
              title={`step ${index}`}
            />
          )
      )}

      {/* bottom nav */}
      <Box my="10" d="flex" justifyContent="space-evenly">
        <Button
          disabled={activeStepIndex === 0}
          onClick={previousStep}
          variant="outline"
          colorScheme="blue"
          onClick={previousStep}
        >
          Previous
        </Button>
        <Button
          disabled={activeStepIndex === steps.length - 1}
          bg="blue.300"
          colorScheme="blue"
          onClick={nextStep}
        >
          Next
        </Button>
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
    </Layout>
  )
}
