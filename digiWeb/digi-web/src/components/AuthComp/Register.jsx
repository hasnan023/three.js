// pages/register.js
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Grid,
  Image,
  Center,
  HStack,
  Icon,
  Divider,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "Yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios"; // Import axios
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import Link from "next/link";

import { useRouter } from "next/router";

const Register = () => {
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Email is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Send registration data to the backend
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        values
      );
      const { token } = res.data;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Show success toast on successful registration
      toast({
        title: "Registration successful.",
        description: "You've registered successfully.",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });

      router.push("/login");
      // Optionally reset the form
      resetForm();
    } catch (error) {
      // Handle errors (like user already exists, etc.)
      console.error(
        "Error during registration:",
        error.response?.data?.msg || error.message
      );

      // Show error toast
      toast({
        title: "Registration failed.",
        description: error.response?.data?.msg || "An error occurred.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }

    setSubmitting(false);
  };

  return (
    <Box
      bgImage="url('/ImageAssets/LoginBg1.jpg')" // Path to your background image
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        display="flex"
        gap={6}
        maxW="1050px"
        mx="auto"
        p={6}
        alignItems="center"
        borderRadius="lg"
        boxShadow="lg"
        backdropFilter="blur(10px)"
      >
        {/* Left Side: Brand icon and tagline */}
        <Box
          p={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/favicon.png"
            alt="Brand Logo"
            boxSize="100px"
            height="260px"
            width="350px"
          />
          <Heading as="h2" size="lg" mb={2} textAlign="center">
            Hi! This is Drip
          </Heading>
          <Text fontSize="lg" textAlign="center">
            We Deliver what we promised
          </Text>
        </Box>

        {/* Separator */}
        <Divider
          orientation="vertical"
          borderColor="rgba(255, 255, 255, 0.5)"
          height="250px"
          borderWidth="2px"
          backdropFilter="blur(10px)"
        />

        {/* Right Side: Register Form */}
        <Box
          p={8}
          ml={20}
          width="50%"
          borderRadius="lg"
          bg="rgba(255, 255, 255, 0.2)"
          boxShadow="lg"
          border="1px solid rgba(255, 255, 255, 0.3)"
          backdropFilter="blur(10px)"
        >
          <Heading as="h1" mb={6} textAlign="center">
            Register
          </Heading>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="Enter your name"
                        bg="rgba(255, 255, 255, 0.7)"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        placeholder="Enter your email"
                        bg="rgba(255, 255, 255, 0.7)"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      position="relative"
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        bg="rgba(255, 255, 255, 0.7)"
                      />
                      <IconButton
                        position="absolute"
                        right="05px"
                        top="53px"
                        transform="translateY(-50%)"
                        variant="link"
                        onClick={() => setShowPassword(!showPassword)} // Toggle function
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      />
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  type="submit"
                  width="full"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <Center>
            <Text color="red.500">
              Already a member?
              <Link href="/login" color="blue">
                Login!
              </Link>
            </Text>
          </Center>
          <HStack spacing={4} mt={6} justify="center">
            <Link href="/auth/google">
              <Icon as={FaGoogle} boxSize={4} color="red.500" />
            </Link>
            <Link href="/auth/facebook">
              <Icon as={FaFacebook} boxSize={4} color="blue.500" />
            </Link>
            <Link href="/auth/instagram">
              <Icon as={FaInstagram} boxSize={4} color="#F56040" />
            </Link>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Register;
