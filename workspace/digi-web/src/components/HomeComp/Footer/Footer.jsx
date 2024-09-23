// components/Footer.js
import { Box, Text, HStack, VStack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={6} bg="gray.800" color="white">
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>
            About Us
          </Link>
          <Link href="/services" _hover={{ textDecoration: "underline" }}>
            Services
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="/privacy" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
        </HStack>
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={5} _hover={{ color: "gray.400" }} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} boxSize={5} _hover={{ color: "gray.400" }} />
          </Link>
        </HStack>
        <Text fontSize="sm" color="gray.400">
          &copy; {new Date().getFullYear()} Drip. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
