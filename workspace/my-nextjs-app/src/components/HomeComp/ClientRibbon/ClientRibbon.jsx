import React from "react";
import { Box, Flex, Image, keyframes } from "@chakra-ui/react";

// Define the scrolling animation
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // Move half of the container (50%) to achieve infinite scroll
`;

const ClientRibbon = () => {
  const brandIcons = [
    "/logo.png",
    "/kover.png",
    "/logo.png",
    "/kover.png",
    "/logo.png",
    // Add more logos as needed
  ];

  return (
    <Box width="100%" overflow="hidden" borderRadius="4" boxShadow="lg">
      <Flex
        align="center"
        justify="space-between" // Space icons evenly
        width="200%" // Double the width to allow scrolling
        animation={`${scroll} 30s linear infinite`} // Adjust the scroll speed (30s for a smooth animation)
      >
        {/* First set of logos */}
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
              maxH="20px" // Adjust the height for your needs
              objectFit="contain"
            />
          </Box>
        ))}

        {/* Second set of logos to create a seamless loop */}
        {brandIcons.map((src, index) => (
          <Box
            key={index + brandIcons.length}
            width="auto"
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              maxH="20px" // Adjust the height for your needs
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ClientRibbon;
