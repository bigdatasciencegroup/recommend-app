import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";
import UploadImage from '../../components/uploadImage'

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateName(value) {
    if (!value) {
      return "You don't have a name? 🤔";
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
    <form onSubmit={handleSubmit(onSubmit)}>

      <FormControl isInvalid={errors.name}>

        <UploadImage postRequestUrl='#'/>

        {/* name */}
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input
          name="name"
          placeholder="name"
          ref={register({ validate: validateName })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      {/* email */}
      <FormLabel htmlFor="name">Email</FormLabel>
        <Input
          name="email"
          placeholder="email"
          ref={register({ validate: validateEmail })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>

        {/* recommendation */}
        <FormLabel htmlFor="recommendation">recommendation</FormLabel>
        <Input
          name="recommendation"
          placeholder="Bobby has been a pleasure to work with. I would absolutely love to work with him again! 😁"
          ref={register({ validate: validateRecommendation })}
        />
        <FormErrorMessage>
          {errors.recommendation && errors.recommendation.message}
        </FormErrorMessage>

      <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}