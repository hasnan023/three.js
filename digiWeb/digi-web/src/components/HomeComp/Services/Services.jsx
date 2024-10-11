import React from "react";
import {
  Box,
  Grid,
  Text,
  Image,
  Heading,
  Tooltip,
  HStack,
  Button,
} from "@chakra-ui/react";

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      h="80%"
      w="100%"
      _hover={{
        transform: { base: "scale(1.3)", md: "scale(1.7)" }, // Smaller scale on small screens
        zIndex: 10, // Ensure it appears above other cards
      }}
      transition="transform 0.3s ease-in-out" // Smooth transition for scaling
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        h="100%"
        w="100%"
        borderRadius={10}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        opacity="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={4}
        transition="opacity 0.3s ease-in-out, transform 0.3s ease-in-out"
        _hover={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        <Box>
          <Heading as="h3" fontSize="15px" mb={2}>
            {title}
          </Heading>
          <Tooltip
            label={description}
            fontSize="15px"
            placement="end"
            bg="white"
            textColor="black"
          >
            <Text noOfLines={2} cursor="pointer" fontSize="10px">
              {description}
            </Text>
          </Tooltip>
          {/* Buttons */}
          <HStack spacing={2} mt={10} justifyContent="center">
            <a href="/services">
              <Button size="xs" colorScheme="teal" variant="outline">
                Details
              </Button>
            </a>
            <Button size="xs" colorScheme="blue" variant="outline">
              Chat
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

const Services = () => {
  return (
    <Box position="relative" w="100%" p="60px">
      <Heading mb={8} textAlign="center">
        Our Services
      </Heading>

      {/* Grid of service cards */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(6, 1fr)",
        }} // Responsive grid
        // Add some space between the cards
      >
        <ServiceCard
          title="Shopify Development"
          description="Custom Shopify development to build and scale your eCommerce business."
          imageSrc="/ImageAssets/shopifyIconImage.png"
        />
        <ServiceCard
          title="WordPress Development"
          description="Professional WordPress development for dynamic and responsive websites."
          imageSrc="/ImageAssets/wordpressIconImage.png"
        />
        <ServiceCard
          title="React Development"
          description="Build modern and interactive web applications using React."
          imageSrc="/ImageAssets/reactIconImage.png"
        />
        <ServiceCard
          title="Digital Marketing"
          description="Effective digital marketing strategies to grow your online presence."
          imageSrc="/ImageAssets/metaIconImage.jpg"
        />
        <ServiceCard
          title="PhotoShoot"
          description="Professional photoshoots for your products or services."
          imageSrc="/ImageAssets/photographyIconImage.jpg"
        />
        <ServiceCard
          title="Consultancy"
          description="Expert consultancy services to guide your business strategies."
          imageSrc="/ImageAssets/consultancyIconImage.png"
        />
      </Grid>
    </Box>
  );
};

export default Services;
