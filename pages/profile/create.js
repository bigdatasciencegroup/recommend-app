import { Wizard, WizardStep } from 'react-wizard-primitive'
import UploadImage from '../../components/uploadImage'
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
  Link as ChakraLink
} from '@chakra-ui/react'

// wizard steps
const Step1 = ({ stepIndex }) => {
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex + 1}`}</Text>
      <Text fontSize="3xl">Choose a Username</Text>
      <Box my="10">
        <FormControl id="username">
          <FormLabel color="gray.400">Username</FormLabel>
          <InputGroup size="sm" d="flex" alignItems="center">
            <InputLeftAddon
              py="5"
              px="6"
              // bg="blue.400"
              // color="white"
              bg="none"
              borderRadius="lg"
              fontWeight="bold"
              children="raque.com/"
            />
            <Input
              py="5"
              px="6"
              borderRadius="lg"
              variant="outline"
              placeholder="Username"
            />
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
      <Text fontSize="lg">{`Step ${stepIndex + 1}`}</Text>
      <Text fontSize="3xl">Add an intro video or photo</Text>
      <Box my="10">
        <UploadImage postRequestUrl="#" />
      </Box>
    </Box>
  )
}

const Step3 = ({ stepIndex, nextStep }) => {
  // const { isActive, nextStep, previousStep } = useWizard()
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex + 1}`}</Text>
      <Text fontSize="3xl">Import your Linkedin connections</Text>
      <Box
        my="10"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text>Import your linkedin connections to get references easier</Text>
        <Button
          mt="10"
          py="6"
          fontSize="lg"
          fontWeight="bold"
          px="16"
          borderRadius="full"
          colorScheme="blue"
          bg="blue.400"
        >
          Import
        </Button>
      </Box>
      <Button
        d="flex"
        onClick={nextStep}
        margin="0 auto"
        justifyContent="center"
        color="gray.400"
        my="4"
        fontWeight="bold"
        background="none"
      >
        Skip for now
      </Button>
    </Box>
  )
}

const Step4 = ({ stepIndex }) => {
  return (
    <Box>
      <Text fontSize="lg">{`Step ${stepIndex + 1}`}</Text>
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

export default function CreateProfilePage() {
  // wizard steps
  const steps = ['Step1', 'Step2', 'step3', 'step4']
  return (
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
                    isActive && <Step3 stepIndex={index} nextStep={nextStep} />
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
            ))}
          <Text fontWeight="bold" my="4" fontSize="lg">{`Step ${
            activeStepIndex + 1
          } out of 5`}</Text>
        </Box>
      )}
    </Wizard>
  )
}
