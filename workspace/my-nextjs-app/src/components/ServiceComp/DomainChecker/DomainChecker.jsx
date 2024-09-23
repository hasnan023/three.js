import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  HStack,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";

const DomainChecker = () => {
  const [domain, setDomain] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const checkDomainAvailability = async () => {
    setIsLoading(true);

    try {
      console.log("request about to hit");
      const response = await axios.get(`/api/domain-check?domain=${domain}`);
      console.log("requst hitted");
      console.log(response);
      const isAvailable = response.data.available;

      // Set the result based on the API response
      if (isAvailable) {
        setResult("Available");
      } else {
        setResult("Not Available");
      }
    } catch (error) {
      console.error("Error fetching domain status:", error);
      setResult("Error checking domain");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      maxW={{ base: "80%", md: "600px" }} // Full width on small screens, 600px max on larger screens
      mx="auto"
      mt={{ base: "100px", md: "150px" }} // Less margin on top for small screens
      p={{ base: 3, md: 5 }} // Adjust padding based on screen size
      borderRadius="md"
      boxShadow="md"
    >
      {/* Heading */}
      <Heading
        as="h2"
        mb={5}
        textAlign="center"
        fontSize={{ base: "2xl", md: "3xl" }}
      >
        Find Your Domain
      </Heading>

      {/* Search Bar */}
      <HStack spacing={4} flexDirection={{ base: "column", md: "row" }}>
        <InputGroup>
          <Input
            placeholder="Enter your domain name"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            variant="outline"
            size={{ base: "md", md: "lg" }} // Adjust size for input field
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputRightElement>
        </InputGroup>
        <Button
          colorScheme="teal"
          onClick={checkDomainAvailability}
          isLoading={isLoading}
          isDisabled={!domain}
          size={{ base: "md", md: "lg" }} // Adjust size of button
        >
          Search
        </Button>
      </HStack>

      {/* Results Area */}
      <VStack mt={5} spacing={4} align="center">
        {result && (
          <Box
            p={4}
            bg={
              result === "Available"
                ? "green.100"
                : result === "Error checking domain"
                ? "yellow.100"
                : "red.100"
            }
            color={
              result === "Available"
                ? "green.800"
                : result === "Error checking domain"
                ? "yellow.800"
                : "red.800"
            }
            borderRadius="md"
            w="100%"
            textAlign="center"
          >
            <Text fontSize="lg" fontWeight="bold">
              The domain {domain} is {result}.
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default DomainChecker;
