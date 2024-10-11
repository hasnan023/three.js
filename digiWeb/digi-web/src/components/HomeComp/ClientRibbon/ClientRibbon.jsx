import React from "react";
import { Box, Grid, Image, keyframes, Flex } from "@chakra-ui/react";

// Define the horizontal scrolling animations
const scrollForward = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // Scroll halfway to ensure seamless loop
`;

const scrollBackward = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); } // Scroll back to starting position
`;

const ClientRibbon = () => {
  const brandIcons = [
    "/ImageAssets/zamsLogo.png",
    "/ImageAssets/koverLogo.png",
    "/ImageAssets/zamsLogo.png",
    "/ImageAssets/koverLogo.png",
    "/ImageAssets/zamsLogo.png",
    "/ImageAssets/koverLogo.png",
  ];

  return (
    <Box width="100%" overflow="hidden" p={4}>
      {/* Forward Scroll */}
      <Flex
        animation={`${scrollForward} 20s linear infinite`} // Smooth horizontal scroll forward animation
        width="200%" // Double the width for seamless scroll
        sx={{
          ":hover": {
            animationPlayState: "paused", // Pause animation on hover
          },
        }}
      >
        {/* First set of icons */}
        <Grid
          templateColumns={`repeat(${brandIcons.length}, 1fr)`}
          width="50%" // First set takes half of the 200% width
        >
          {brandIcons.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={4}
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
              boxShadow="md"
              height="110px"
              width="180px" // Set a minimum width for each box
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                maxH="20px" // Adjust the height for your needs
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>

        {/* Duplicate set of icons for seamless scroll */}
        <Grid
          templateColumns={`repeat(${brandIcons.length}, 1fr)`}
          width="50%" // Second set takes the other half of the 200% width
        >
          {brandIcons.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={4}
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
              boxShadow="md"
              height="110px"
              width="180px"
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                maxH="20px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>
      </Flex>

      {/* Backward Scroll */}
      <Flex
        mt={5}
        animation={`${scrollBackward} 20s linear infinite`} // Smooth horizontal scroll backward animation
        width="200%" // Double the width for seamless scroll
        sx={{
          ":hover": {
            animationPlayState: "paused", // Pause animation on hover
          },
        }}
      >
        {/* First set of icons */}
        <Grid
          templateColumns={`repeat(${brandIcons.length}, 1fr)`}
          width="50%" // First set takes half of the 200% width
        >
          {brandIcons.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={4}
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
              boxShadow="md"
              height="110px"
              width="180px"
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                maxH="20px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>

        {/* Duplicate set of icons for seamless scroll */}
        <Grid
          templateColumns={`repeat(${brandIcons.length}, 1fr)`}
          width="50%" // Second set takes the other half of the 200% width
        >
          {brandIcons.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={4}
              border="1px solid rgba(0, 0, 0, 0.1)"
              borderRadius="20px"
              boxShadow="md"
              height="110px"
              width="180px"
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                maxH="20px"
                objectFit="contain"
              />
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ClientRibbon;
