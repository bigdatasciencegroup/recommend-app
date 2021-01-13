import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack
} from "@chakra-ui/react";
import UploadImage from '../../components/uploadImage'

export default function HookForm() {

  const { handleSubmit, errors, register, formState } = useForm();

  function validateName(value) {
    if (!value) {
      return "Name is required";
    }
  }

  function validateEmail(value) {
    if (!value) {
      return "Email is required";
    } 
  }

  function validateRecommendation(value) {
    if (!value) {
      return "Recommendation is required, thats kind of the point of the app";
    } 
  }

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Stack spacing="10" w='full'>
        <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl isInvalid={errors.name}>
            {/* name */}
            <FormLabel mt='4' htmlFor="name">First name</FormLabel>
            <Input
            mb='2'
            name="name"
            placeholder="Bobby Hall Jr"
            ref={register({ required: true })}
            />
            <FormErrorMessage>
            {errors.name && errors.name.message}
            </FormErrorMessage>
            </FormControl>

            <textarea name="Recommendation" ref={register({required: true})} />


            {/* email */}
            <FormControl isInvalid={errors.email} isRequired>
                <FormLabel mt='4' htmlFor="name">Email</FormLabel>
                <Input
                isRequired
                name="email"
                placeholder="bobbyhalljrcs@gmail.com"
                ref={register({ validate: validateEmail })}
                />
                <FormErrorMessage>
                {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>

            {/* recommendation */}
            <FormControl isInvalid={errors.recommendation} isRequired>
                <FormLabel mt='10' htmlFor="recommendation">recommendation</FormLabel>
                <Textarea
                isRequired
                size='md'
                h='200px'
                name="recommendation"
                placeholder="Jane has been a pleasure to work with. I would absolutely love to work with her again! 😁"
                ref={register({ validate: validateRecommendation })}
                />
                <FormErrorMessage>
                {errors.recommendation && errors.recommendation.message}
                </FormErrorMessage>
            </FormControl>

            <Button isLoading={formState.isSubmitting} type="submit" _hover={{ bg: 'blue.400' }} fontWeight='600' fontSize='lg' boxShadow='xl' mt='3rem' py='1.5rem' w='full' color='white' bg='blue.300' type="submit" form="my-form">
                Finish and Review
            </Button>

        </form>
    </Stack>
  );
}