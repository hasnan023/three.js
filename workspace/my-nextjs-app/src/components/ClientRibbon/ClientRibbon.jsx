import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

const ClientRibbon = () => {
  // Replace these paths with the actual paths to your brand icons
  const brandIcons = [
    'logo.png',
    'kover.png',
    'logo.png',
    'kover.png',
    'logo.png',


    
  ];

  return (
    <Box
      width="100%"
      
      borderRadius="4"
      boxShadow="lg"
    >
      <Flex
        justify="space-evenly" // Evenly space the icons
        align="center"
        wrap="no-wrap" // Prevent icons from wrapping to the next line
        height="auto" // Ensure height adjusts to content
      >
        {brandIcons.map((src, index) => (
          <Box
            key={index}
            width="auto"
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              maxH="20px" // Set a max height for consistent sizing
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ClientRibbon;
