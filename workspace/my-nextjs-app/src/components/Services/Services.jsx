// components/Services.js
import React from 'react';
import { Box, Grid, Text, Image, Stack, Heading } from '@chakra-ui/react';

const ServiceCard = ({ title, description, imageSrc }) => (
    <Box
    borderTop={5}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bg="white"
      textAlign="center"
    >
      <Image src={imageSrc} alt={title} boxSize="150px" objectFit="cover" m="auto" />
      <Heading as="h3" size="lg" my={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
  
  const Services = () => {
    return (
      <Box p={6} mt={9}>
        <Heading mb={6} textAlign="center">Our Services</Heading>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <ServiceCard
            title="Shopify Development"
            description="Custom Shopify development to build and scale your eCommerce business."
            imageSrc="https://shopify.com/shopify.png" // Replace with actual Shopify image URL
          />
          <ServiceCard
            title="WordPress Development"
            description="Professional WordPress development for dynamic and responsive websites."
            imageSrc="https://example.com/wordpress.png" // Replace with actual WordPress image URL
          />
          <ServiceCard
            title="React Development"
            description="Build modern and interactive web applications using React."
            imageSrc="https://reactjs.org/logo-og.png" // React logo URL
          />
          <ServiceCard
            title="Digital Marketing"
            description="Effective digital marketing strategies to grow your online presence."
            imageSrc="https://example.com/digital-marketing.png" // Replace with actual Digital Marketing image URL
          />
        </Grid>
      </Box>
    );
  };
  
  export default Services;
  
