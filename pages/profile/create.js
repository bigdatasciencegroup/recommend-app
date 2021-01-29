import React, { useRef } from 'react'
import { Wizard, WizardStep } from 'react-wizard-primitive'
import UploadImage from '../../components/uploadImage'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Input,
  Box,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Text,
  FormHelperText,
  Link as ChakraLink,
  Tooltip
} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

import PlayLottie from '../../lotties/helper'
import aboutLottie from '../../lotties/about/about.json'
import importLottie from '../../lotties/import/import.json'
import helloLottie from '../../lotties/hello/hello.json'
import welcomeLottie from '../../lotties/welcome/welcome.json'

import TrophySVG from '../../components/trophySVG'

// wizard steps
const Step1 = ({ stepIndex }) => {
  const playerRef = useRef()
  return (
    <>
      <Box>
        <Box>
          <PlayLottie
            ref={playerRef}
            src={welcomeLottie}
            loop={false}
            // controls
            hover
            // autoplay
            // renderer="svg"
            style={{
              height: '250px',
              width: '300px'
            }}
          />

          <Text mt="4" color="gray.300" fontWeight="900" fontSize="xl">{`Step ${
            stepIndex + 1
          }`}</Text>
          <Text mb="6" fontWeight="medium" fontSize="3xl">
            Choose a Username
          </Text>
          <FormControl id="username" mb="8">
            <InputGroup size="sm" d="flex" alignItems="center" s>
              <InputLeftAddon
                py="5"
                px="6"
                // bg="blue.400"
                // color="white"
                bg="none"
                borderRadius="lg"
                fontWeight="bold"
                color="gray.500"
                children="raque.com/"
                border="2px solid"
                borderColor="gray.400"
                // boxShadow="sm"
              />
              <Input
                py="5"
                // boxShadow="sm"
                px="6"
                borderRadius="lg"
                color="gray.500"
                variant="outline"
                placeholder="Bobbyhalljr"
                border="2px solid"
                borderColor="gray.400"
              />
            </InputGroup>
            <FormHelperText fontSize="xs">
              * Must be unique, Try using your real name
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}

const Step2 = ({ stepIndex }) => {
  return (
    <Box>
      <Text mt="4" color="gray.300" fontWeight="900" fontSize="xl">{`Step ${
        stepIndex + 1
      }`}</Text>
      <Text mb="2" fontWeight="medium" fontSize="3xl">
        Upload a profile picture or video
      </Text>
      <Box my="10">
        <UploadImage postRequestUrl="#" />
      </Box>
    </Box>
  )
}

const Step3 = ({ stepIndex, nextStep, previousStep }) => {
  return (
    <Box>
      <Box
        my="4"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <PlayLottie
          src={importLottie}
          loop={false}
          hover
          autoplay
          renderer="svg"
          style={{
            marginTop: '1rem',
            height: '150px',
            width: '200px'
          }}
        />

        <Text
          alignSelf="flex-start"
          p="4"
          mt="4"
          color="gray.300"
          fontWeight="900"
          fontSize="xl"
        >{`Step ${stepIndex + 1}`}</Text>
        <Text p="4" mb="2" fontWeight="medium" fontSize="3xl">
          Import your Linkedin connections
        </Text>
        <Text p="4" mb="4">
          Import your linkedin connections to get a better experience
        </Text>
        <Button
          mt="10"
          py="6"
          fontSize="lg"
          fontWeight="bold"
          px="24"
          borderRadius="full"
          colorScheme="blue"
          bg="blue.400"
          boxShadow="xl"
        >
          Import Connections
        </Button>
      </Box>
      <Box d="flex" mt="10" alignItems="center" justifyContent="center">
        <Button
          d="flex"
          margin="0 auto"
          justifyContent="center"
          // border="none"
          onClick={previousStep}
          variant="outline"
          color="blue.300"
          px="4"
          colorScheme="blue"
          leftIcon={<ArrowBackIcon />}
        >
          Previous Step
        </Button>
        <Button
          d="flex"
          rightIcon={<ArrowForwardIcon />}
          onClick={nextStep}
          margin="0 auto"
          justifyContent="center"
          color="gray.400"
          my="8"
          fontWeight="bold"
          background="none"
        >
          Skip for now
        </Button>
      </Box>
    </Box>
  )
}

const Step4 = ({ stepIndex }) => {
  const playerRef = useRef()
  return (
    // <Box>
    <Box>
      <Text
        alignSelf="flex-start"
        color="gray.300"
        fontWeight="900"
        fontSize="xl"
      >{`Step ${stepIndex + 1}`}</Text>
      <Text mb="2" fontWeight="medium" fontSize="3xl">
        About You
      </Text>
      <Text mb="8">Almost done! Tell everyone a little about yourself</Text>
      <FormControl>
        <FormLabel>Display name</FormLabel>
        <Input
          border="2px solid"
          borderColor="gray.400"
          placeholder="Bobbyhalljr"
          color="gray.500"
        />
      </FormControl>
      <FormControl mt="6">
        <FormLabel>Bio</FormLabel>
        <Textarea
          h="2rem"
          border="2px solid"
          borderColor="gray.400"
          placeholder="Introduce yourself"
          color="gray.500"
        />
      </FormControl>
    </Box>
    // </Box>
  )
}

const Citation = ({ src, author }) => (
  <>
    <Text fontSize="xs">
      Animation by:
      <ChakraLink color="blue.300" src={src}>
        {author}
      </ChakraLink>
    </Text>
  </>
)

export default function CreateProfilePage() {
  // wizard steps
  const steps = ['Step1', 'Step2', 'step3', 'step4']
  return (
    <Box overflowX="hidden">
      <Wizard>
        {({
          activeStepIndex,
          nextStep,
          previousStep,
          maxActivatedStepIndex = 3,
          resetToStep
        }) => (
          <Box
            boxShadow="xl"
            p="6"
            borderRadius="xl"
            w={['90%', '75%', '50%']}
            margin="3rem auto"
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
                      isActive && (
                        <Step3
                          stepIndex={index}
                          previousStep={previousStep}
                          nextStep={nextStep}
                        />
                      )
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
            {activeStepIndex === 2 ||
              (3 && (
                <Box
                  w={['100%', '75%', '50%']}
                  maxW="2xl"
                  my="10"
                  d="flex"
                  justifyContent="space-evenly"
                >
                  <Button
                    leftIcon={<ArrowBackIcon />}
                    px="16"
                    mr="10"
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
                    rightIcon={<ArrowForwardIcon />}
                    px="16"
                    // disabled={activeStepIndex === steps.length - 2}
                    bg="blue.300"
                    colorScheme="blue"
                    onClick={
                      maxActivatedStepIndex === 3
                        ? resetToStep(0) && alert('you done !')
                        : nextStep
                    }
                  >
                    {activeStepIndex === 3 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              ))}
            <Text fontWeight="bold" my="4" fontSize="lg">{`Step ${
              activeStepIndex + 1
            } out of 4`}</Text>
          </Box>
        )}
      </Wizard>
    </Box>
  )
}
